import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import http from '../http'
import 'vant/lib/index.css';
import { Toast } from 'vant';


Vue.use(Vant)
Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
