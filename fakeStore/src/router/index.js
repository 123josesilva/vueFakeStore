import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/home.vue'),
        },
        {
            path: '/carrinho',
            name: 'basket',
            component: () => import('../views/basket.vue'),
        },

    ]
});

export default router;