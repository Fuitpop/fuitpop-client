import { RouteConfig } from 'vue-router';

export const HomeRoutes: RouteConfig[] = [

    {
        name: 'home',
        path: '/',
        component: () => import('./HomeView.vue'),
    },

];
