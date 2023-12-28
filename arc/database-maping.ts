import { v4 as uuidv4 } from 'uuid';

// Enum for AccountType
export enum AccountType {
    Bank = 'Bank',
    Wallet = 'Wallet',
    CreditCard = 'CreditCard',
}

// Models
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    accounts: Account[];
    budgets: Budget[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Account {
    id: string;
    name: string;
    type: AccountType;
    balance: number;
    user: User;
    userId: string;
    transactions: Transaction[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Transaction {
    id: string;
    transactionDate: Date;
    amount: number;
    description: string;
    category: Category;
    categoryId: string;
    account: Account;
    accountId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    id: string;
    name: string;
    image: string;
    transactions: Transaction[];
    budgetCategories: BudgetCategories[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Budget {
    id: string;
    name: string;
    amount: number;
    startDate: Date;
    endDate: Date;
    user: User;
    userId: string;
    budgetCategories: BudgetCategories[];
    createdAt: Date;
    updatedAt: Date;
}

export interface BudgetCategories {
    id: string;
    budget: Budget;
    budgetId: string;
    category: Category;
    categoryId: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}

// Helper function for generating UUIDs
export function generateUUID(): string {
    return uuidv4();
}