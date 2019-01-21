import Vue from 'vue';
import App from '@app/core/App.vue';

import { router } from '@shared/router';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
