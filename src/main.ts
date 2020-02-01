import Vue from 'vue';
import VueMeta from 'vue-meta';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

export default vm;
