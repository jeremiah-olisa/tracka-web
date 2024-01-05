import { useToast } from "vue-toastification";
import supabase from "./supabase"
const toast = useToast();

export const createUser = async (email: string, password: string, fullName: string) => {
    const response = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { fullName },
            emailRedirectTo: (process.env.NODE_ENV !== 'production' ? 'http://localhost:5173' : 'https://tracka.vercel.app').concat('/auth/login')
        }
    });

    response?.error?.message && toast.error(response.error.message);
    !response?.error?.message &&
        toast.success(
            "Registration successful. Please check your email for verification."
        );

    return response;
}


export const authenticateUser = async (email: string, password: string) => {
    const response = await supabase.auth.signInWithPassword({ email, password });


    response?.error?.message && toast.error(response.error.message);
    !response?.error?.message && toast.success("Login successful");

    return response.data;

}

export const logoutUser = async () => {
    const response = await supabase.auth.signOut();

    response?.error?.message && toast.error(response.error.message);
    !response?.error?.message && toast.info("Logout successful");

    return response;
}