import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '../layout/AuthLayout.vue';
import MainLayout from '../layout/MainLayout.vue'


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
}

const routes: IRoutes[] = [
    {
        path: '/',
        name: RouteNames.Home,
        component: () => import('./../pages/HomePage.vue'),
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/auth/login',
        name: RouteNames.Login,
        component: () => import('./../pages/LoginPage.vue'),
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: '/auth/register',
        name: RouteNames.Registration,
        component: () => import('./../pages/RegistrationPage.vue'),
        meta: {
            layout: AuthLayout,
        }
    },
    {
        path: '/setting',
        name: RouteNames.Setting,
        component: () => import('./../pages/SettingPage.vue'),
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/splash',
        name: RouteNames.Splash,
        component: () => import('./../pages/SplashPage.vue'),
        meta: {
            layout: MainLayout
        }
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