import type {
  User,
  Session,
  WeakPassword,
} from "@supabase/gotrue-js/src/lib/types";
import { useToast } from "~/components/ui/toast";
import ToastAction from "~/components/ui/toast/ToastAction.vue";
import routes from "~/lib/constants/routes";
import type { Database } from "~/lib/types/database.types";

type RegisterAuthResponse =
  | { user: User | null; session: Session | null }
  | undefined;
type LoginAuthResponse =
  | {
      user: User;
      session: Session;
      weakPassword?: WeakPassword | undefined;
    }
  | {
      user: null;
      session: null;
      weakPassword?: null | undefined;
    }
  | undefined;

// NOTE: Do not use supabase directly in your component
export const useAuthentication = (allowAnonymous: boolean = false) => {
  const { toast } = useToast();
  const window = useWindow();
  const user = useSupabaseUser();
  const handler = useAsyncErrorHandler();
  const supabase = useSupabaseClient<Database>();
  const userId = computed(() => user.value?.id ?? "");

  const pinIsSet = ref(false);
  const loginLoadingState = ref(false);
  const registerLoadingState = ref(false);
  const signOutLoadingState = ref(false);

  const loginWithPassword = async (
    email: string,
    password: string
  ): Promise<LoginAuthResponse> => {
    const response = await handler(
      async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
          password,
          email,
        });

        if (error) throw error;
        return data;
      },
      "Login Error",
      loginLoadingState,
      () => loginWithPassword(email, password)
    );

    toast({
      title: "Login Successful",
      variant: "success",
    });

    return response;
  };

  const registerWithPassword = async (
    email: string,
    password: string,
    phone: string,
    fullName: string
  ): Promise<RegisterAuthResponse> => {
    const response = await handler(
      async () => {
        const emailRedirectTo = new URL(
          `${routes.emailVerified}?name=${fullName}&email=${email}`,
          window.value.location.origin ?? "https://tracka.vercel.app"
        ).toString();
        const { data, error } = await supabase.auth.signUp({
          password,
          email,
          phone,
          options: { data: { fullName }, emailRedirectTo },
        });

        if (error) throw error;

        return data;
      },
      "Registeration Error",
      registerLoadingState,
      () => registerWithPassword(email, password, phone, fullName)
    );

    toast({
      title: "Registration Successful",
      description: "Please check your email to verify your email address",
      variant: "success",
    });

    return response;
  };

  const signOut = async () => {
    await handler(
      async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw new Error(error.message, { cause: error.cause });

        pinIsSet.value = false;
        navigateTo(routes.login, { replace: true });
      },
      "Registeration Error",
      signOutLoadingState,
      () => signOut()
    );
  };

  const setUserPin = async (pin: string) => {
    await handler(async () => {
      const { error } = await supabase
        .from("user_pins")
        .insert({ userid: userId.value, pin });

      if (error) throw error;
      else pinIsSet.value = await userPinIsSet();
    });
  };

  const changeUserPin = (oldPin: string, newPin: string) => {
    // const oldPinEncrypted = `userId.${user.value?.id}-newPin.${newPin}`;
    // const newPinEncrypted = `userId.${user.value?.id}-newPin.${oldPin}`;
    // if (pin.value == oldPin) pin.value = newPinEncrypted;
    // else console.error("Old pin is incorrect");
  };

  const userPinIsSet = async () => {
    return await handler(async () => {
      const { data, error } = await supabase
        .from("user_pins")
        .select("id", { count: "exact" })
        .eq("userid", userId!.value)
        .single();

      if (error && error?.code != "PGRST116") throw error;

      return !!data?.id;
    });
  };

  const getUserName = computed(() => {
    return (
      user?.value?.user_metadata?.fullName ??
      user?.value?.email ??
      "Unknown user"
    );
  });

  watch(userId, () => {
    if (!userId.value && !allowAnonymous) signOut();
  });

  onMounted(async () => {
    pinIsSet.value = await userPinIsSet();
  });

  return {
    loginWithPassword,
    registerWithPassword,
    signOut,
    setUserPin,
    changeUserPin,
    userPinIsSet,
    user,
    signOutLoadingState,
    loginLoadingState,
    registerLoadingState,
    getUserName,
    pinIsSet,
    userId,
  };
};
