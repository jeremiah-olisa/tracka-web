import { BANK_LIST } from "~/lib/constants"

// This implementation would change
export const useBankList = () => {
    const banks = ref(BANK_LIST);
    const getBankNameByCode = (code: string) => {
        return banks.value.find(c => c.code == code)?.name ?? 'Unknown Bank'
    }
    const getBankLogoByCode = (code: string) => {
        return banks.value.find(c => c.code == code)?.logo ?? 'https://nigerianbanks.xyz/logo/default-image.png'
    }
    return { banks, getBankNameByCode, getBankLogoByCode }
}
