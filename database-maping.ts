export enum AccountCategory {
    Saving = "Saving",
    Bussiness = "Bussiness",
    Personal = "Personal",
    Education = "Education",
    Gift = "Gift"
}

export enum TransactionType {
    Credit = "Credit",
    Debit = "Debit"
}

export interface Account {
    id: number, // unique, pk
    accountId: string, // unique, indexed
    accountName: string,
    category: AccountCategory
    createdAt: Date,
    updatedAt: Date,
}


export interface AccountTransaction {
    id: number, // unique, pk
    transactionId: string, // unique, indexed
    transactionType: TransactionType,
    narration: string,
    amount: number
    createdAt: Date,
    updatedAt: Date,
}