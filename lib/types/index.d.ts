import type { InputTypeHTMLAttribute, VueConstructor } from "vue";

declare module "#app" {
  interface PageMeta {
    pageTitle?: string;
    backgroundClass?: string;
    bottomNavBackgroundClass?: string;
    showTopHeader?: boolean;
    showBottomNavigation?: boolean;
  }
}

export interface IFormFieldInput<T extends String = string> {
  key: string;
  input?: {
    data?: string[];
    name: T;
    label: string;
    placeholder: string;
    type: InputTypeHTMLAttribute;
  };
  component?: VueConstructor;
  componentProps?: Record<string, any>;
}

export interface IBankList {
  name: string;
  slug: string;
  code: string;
  ussd: string;
  logo: string;
}

export interface ICreateAccount {
  accountName: string;
  accountNumber: string;
  balance: number;
  bankName: string;
  currency: string;
  meta: string;
  userId?: string;
}

export type Required<T> = {
  [K in keyof T]-?: T[K];
};