import type { User, Session, WeakPassword } from '@supabase/gotrue-js/src/lib/types';
import { useToast } from "~/components/ui/toast";
import ToastAction from "~/components/ui/toast/ToastAction.vue";
import routes from "~/lib/constants/routes";

type RegisterAuthResponse = { user: User | null; session: Session | null } | undefined;
type LoginAuthResponse = {
  user: User;
  session: Session;
  weakPassword?: WeakPassword | undefined;
} | {
  user: null;
  session: null;
  weakPassword?: null | undefined;
} | undefined;

// NOTE: Do not use supabase directly in your component
export const useAuthentication = () => {
  const { auth } = useSupabaseClient();
  const { toast } = useToast()
  const window = useWindow()
  const user = useSupabaseUser()
  const loginLoadingState = ref(false);
  const registerLoadingState = ref(false);
  const signOutLoadingState = ref(false);

  const loginWithPassword = async (email: string, password: string): Promise<LoginAuthResponse> => {
    const handler = useAsyncErrorHandler("Login Error", loginLoadingState);

    const response = await handler(async () => {
      const { data, error } = await auth.signInWithPassword({ password, email });

      if (error) throw error;
      return data;
    }, () => loginWithPassword(email, password));


    toast({
      title: "Login Successful",
      variant: 'success',
    })

    return response;
  }
  const registerWithPassword = async (email: string, password: string, phone: string, fullName: string): Promise<RegisterAuthResponse> => {
    const handler = useAsyncErrorHandler("Registeration Error", registerLoadingState);

    const response = await handler(async () => {
      const emailRedirectTo = new URL(`${routes.welcome}?name=${fullName}`, window.value.location.origin ?? 'https://tracka.vercel.app').toString();
      const { data, error } = await auth.signUp({ password, email, phone, options: { data: { fullName }, emailRedirectTo } });

      if (error) throw error;

      return data;
    }, () => registerWithPassword(email, password, phone, fullName));

    toast({
      title: "Registration Successful",
      variant: 'default',
    })

    return response;

  }

  const signOut = async () => {
    const handler = useAsyncErrorHandler("Registeration Error", signOutLoadingState);

    await handler(async () => {
      const { error } = await auth.signOut();
      if (error) throw new Error(error.message, { cause: error.cause });
    }, () => signOut());
  }

  const getUserName = computed(() => {
    return user?.value?.user_metadata?.fullName ?? user?.value?.email ?? 'Unknown user';
  })

  return { loginWithPassword, registerWithPassword, signOut, user, signOutLoadingState, loginLoadingState, registerLoadingState, getUserName };
}
