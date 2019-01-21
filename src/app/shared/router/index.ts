import Vue from 'vue';
import Router from 'vue-router';

import { HomeRoutes } from '@app/home';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        ...HomeRoutes,
    ],
});
