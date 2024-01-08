import { useToast } from 'vue-toastification';
import supabase from "./supabase";
import store from "./store";

const toast = useToast()
export const getUserAccountBalances = async (userId: string) => {
    // Fetch accounts for the specified user
    const { data: accounts, error } = await supabase
        .from('accounts')
        .select('id, balance')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching user accounts:', error);
        return [];
    }

    // Calculate the total balance
    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

    return totalBalance;
};

export const getUserTotalIncome = async (userId: string) => {
    // Fetch accounts for the specified user
    const { data: accounts, error } = await supabase
        .from('accounts')
        .select('id, balance')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching user accounts:', error);
        return [];
    }

    // Calculate the total balance
    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

    return totalBalance;
};