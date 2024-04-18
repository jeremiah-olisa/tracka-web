import type { Database } from "~/lib/types/database.types";

export const useBudget = () => {
  const supabase = useSupabaseClient<Database>();
  const handler = useAsyncErrorHandler();
  const { userId } = useAuthentication();

  const getBudgets = async (_userId?: string) => {
    return await handler(async() => {
      await supabase.from("budgets").select("*").eq("userAccountId", _userId ?? userId);
    });
  };
};
