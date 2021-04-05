import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from './store';
import {initializeRequestInterceptors, initializeResponseInterceptors} from "@/api/utils/interceptors";
import './plugins/bootstrap-vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    initializeResponseInterceptors(this);
    initializeRequestInterceptors(this);
  }
}).$mount('#app');
