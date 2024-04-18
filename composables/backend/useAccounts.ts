import type { ICreateAccount } from "~/lib/types";
import type { Database, TablesUpdate } from "~/lib/types/database.types";

export type IUpdateAccount = Required<
  Pick<TablesUpdate<"user_accounts">, "balance" | "accountKey">
> &
  Pick<TablesUpdate<"user_accounts">, "userId">;

export type IDeleteAccount = Required<
  Pick<TablesUpdate<"user_accounts">, "accountKey">
> &
  Pick<TablesUpdate<"user_accounts">, "userId">;

export const useAccounts = () => {
  const GET_ACCOUNT_QUERY_KEY = "get-user-accounts";
  const supabase = useSupabaseClient<Database>();
  const queryClient = useQueryClient();
  const handler = useAsyncErrorHandler();
  const { userId } = useAuthentication();

  //#region MUTATIONS
  const invalidateQuery = (_userId: string) => {
    queryClient.cancelQueries({
      queryKey: [GET_ACCOUNT_QUERY_KEY, _userId],
    });
  };

  const { error: createUserAccountError, mutateAsync: createUserAccountAsync } =
    useMutation({
      mutationFn: async ({
        accountName,
        accountNumber,
        balance,
        bankName,
        currency,
        userId: _userId,
        meta,
      }: ICreateAccount) => {
        await supabase.from("user_accounts").insert({
          accountName,
          accountNumber,
          balance,
          bankName,
          currency,
          meta,
          userId: _userId ?? userId.value,
        });
      },
    });

  const { error: updateUserAccountError, mutateAsync: updateUserAccountAsync } =
    useMutation({
      mutationFn: async ({
        balance,
        userId: _userId,
        accountKey,
      }: IUpdateAccount) => {
        await supabase
          .from("user_accounts")
          .update({ balance })
          .eq("accountKey", accountKey)
          .eq("userId", _userId ?? userId.value);
      },
    });

  const { error: deleteUserAccountError, mutateAsync: deleteUserAccountAsync } =
    useMutation({
      mutationFn: async ({ userId: _userId, accountKey }: IDeleteAccount) => {
        await supabase
          .from("user_accounts")
          .delete()
          .eq("accountKey", accountKey)
          .eq("userId", _userId ?? userId.value);
      },
      onSuccess: () => {},
    });
  //#endregion MUTATIONS

  const createAccount = (dto: ICreateAccount) => {
    const _userId = dto.userId ?? userId.value;
    dto.userId = _userId;

    handler(async () => {
      await createUserAccountAsync(dto);
      if (createUserAccountError) throw createUserAccountError;
      else invalidateQuery(_userId);
    });
  };

  const getUserAccounts = async (_userId?: string) => {
    _userId ??= userId.value;
    const { isLoading, data, error } = useQuery({
      queryKey: [GET_ACCOUNT_QUERY_KEY, _userId],
      queryFn: async () => {
        return await supabase
          .from("user_accounts")
          .select("*")
          .eq("userId", _userId);
      },
    });

    return handler(() => {
      if (error) throw error;

      return { data, isLoading };
    });
  };

  const getUserAccount = async (accountKey: string) => {
    const { isLoading, data, error } = useQuery({
      queryKey: [GET_ACCOUNT_QUERY_KEY, accountKey],
      queryFn: async () => {
        return await supabase
          .from("user_accounts")
          .select("*")
          .eq("accountKey", accountKey);
      },
    });

    return handler(() => {
      if (error) throw error;

      return { data, isLoading };
    });
  };

  const updateAccountBalance = (dto: IUpdateAccount) => {
    const _userId = dto.userId ?? userId.value;
    dto.userId = _userId;

    handler(async () => {
      await updateUserAccountAsync(dto);
      if (updateUserAccountError) throw updateUserAccountError;
      else invalidateQuery(_userId);
    });
  };
  const deleteAccountBalance = (dto: IDeleteAccount) => {
    const _userId = dto.userId ?? userId.value;
    dto.userId = _userId;

    handler(async () => {
      await deleteUserAccountAsync(dto);
      if (deleteUserAccountError) throw deleteUserAccountError;
      else invalidateQuery(_userId);
    });
  };

  return {
    createAccount,
    getUserAccounts,
    getUserAccount,
    updateAccountBalance,
    deleteAccountBalance,
  };
};
