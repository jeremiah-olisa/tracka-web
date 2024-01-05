import { createRouter, createWebHistory } from 'vue-router'


export interface IRoutes {
  path: string;
  name: string;
  component: () => any;
  meta?: {
    layout: any;
  }
}

// Vue.use(VueRouter);

export enum RouteNames {
  Home = 'Home',
  Login = 'Login',
  Registration = 'Registration',
  Setting = 'Setting',
  Splash = 'Splash',
  Transaction = 'Transaction',
  NotFound = 'Not Found',
  OnBoarding = "On Boarding"
}

const routes: IRoutes[] = [
  {
    path: '/splash',
    name: RouteNames.Splash,
    component: () => import('./../../screens/SplashScreen.vue'),
  },
  {
    path: '/onboarding',
    name: RouteNames.OnBoarding,
    component: () => import('./../../screens/onboarding/OnBoarding.vue'),
  },
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('./../../screens/HomeScreen.vue'),
    // meta: {
    //   layout: MainLayout
    // }
  },
  {
    path: '/auth/register',
    name: RouteNames.Registration,
    component: () => import('./../../screens/auth/RegisterScreen.vue'),
    // meta: {
    //   layout: AuthLayout,
    // }
  },
  // {
  //   path: '/auth/login',
  //   name: RouteNames.Login,
  //   component: () => import('./../pages/LoginPage.vue'),
  //   meta: {
  //     layout: AuthLayout,
  //   }
  // },
  // {
  //   path: '/setting',
  //   name: RouteNames.Setting,
  //   component: () => import('./../pages/SettingPage.vue'),
  //   meta: {
  //     layout: MainLayout
  //   }
  // },
  // {
  //   path: '/splash',
  //   name: RouteNames.Splash,
  //   component: () => import('./../pages/SplashPage.vue'),
  //   meta: {
  //     layout: MainLayout
  //   }
  // },
  // {
  //   path: '/transaction',
  //   name: RouteNames.Transaction,
  //   component: () => import('./../pages/TransactionPage.vue'),
  // },
  // {
  //   name: RouteNames.NotFound,
  //   path: "/:notFound",
  //   component: () => import("./../pages/error/NotFound.vue"),
  // }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
