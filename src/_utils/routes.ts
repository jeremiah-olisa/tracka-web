import { createRouter, createWebHistory } from 'vue-router';

export type PageComponent = typeof import("./../pages/SplashPage.vue");

export interface IRoutes {
    path: string;
    name: string;
    component: () => Promise<PageComponent>;
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
}

const routes = [
    {
        path: '/',
        name: RouteNames.Home,
        component: () => import('./../pages/HomePage.vue'),
    },
    {
        path: '/auth/login',
        name: RouteNames.Login,
        component: () => import('./../pages/LoginPage.vue'),
    },
    {
        path: '/auth/registration',
        name: RouteNames.Registration,
        component: () => import('./../pages/RegistrationPage.vue'),
    },
    {
        path: '/setting',
        name: RouteNames.Setting,
        component: () => import('./../pages/SettingPage.vue'),
    },
    {
        path: '/splash',
        name: RouteNames.Splash,
        component: () => import('./../pages/SplashPage.vue'),
    },
    {
        path: '/transaction',
        name: RouteNames.Transaction,
        component: () => import('./../pages/TransactionPage.vue'),
    },
    {
        name: RouteNames.NotFound,
        path: "/:notFound",
        component: () => import("./../pages/error/NotFound.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;