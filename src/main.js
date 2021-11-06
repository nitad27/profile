import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import fa from 'fontawesome-vue';

require('@/assets/custom.css')
require('@/assets/bootstrap.css')

Vue.config.productionTip = false
Vue.use(fa);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
