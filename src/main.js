import Vue from 'vue'
import router from './router'
import store from './store'
import axios from './axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import App from './App.vue'

Vue.config.productionTip = process.env.NODE_ENV === 'development';

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
