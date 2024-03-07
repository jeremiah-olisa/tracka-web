declare module "#app" {
  interface PageMeta {
    pageTitle?: string;
    showTopHeader?: boolean;
    showBottomNavigation?: boolean;
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
