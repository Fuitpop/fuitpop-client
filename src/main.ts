import Vue from 'vue';
import App from '@app/core/App.vue';

import { router } from '@shared/router';
import { store } from '@shared/store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
