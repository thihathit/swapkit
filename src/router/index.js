import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

// Async
const About = () => import('@/views/About.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'is-active-trail',
    linkExactActiveClass: 'is-active',
    routes,
})

export default router
