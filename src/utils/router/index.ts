import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/',
        name: 'home',
        component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/about/AboutView.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/auth/login/LoginView.vue')
        },
        {
            path: '/auth/signup',
            name: 'signup',
            component: () => import('@/views/auth/signup/SignUpView.vue')
        },
        {
            path: '/auth/signup/email-verification',
            name: 'email-verification',
            component: () => import('@/views/auth/signup/EmailVerificationView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('@/views/404/NotFoundView.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/dashboard/DashboardView.vue')
        },

    ]
})

export default router
