import type { InputTypeHTMLAttribute } from "vue";

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
  name: T;
  label: string;
  placeholder: string;
  type: InputTypeHTMLAttribute;
  component?: any; 
}
// It is always important to ensure you import/export something when augmenting a type
export { };
