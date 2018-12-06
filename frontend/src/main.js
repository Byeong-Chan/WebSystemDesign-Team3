import Vue from 'vue'
import App from './App'
import {store} from './store'
import axios from 'axios'
import router from './router'
import VueCookie from'vue-cookie';
import VueSession from 'vue-session'
import config from './config'

Vue.use(VueSession)
Vue.use(VueCookie)

Vue.prototype.$config = config;
Vue.prototype.$EventBus = new Vue;
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
