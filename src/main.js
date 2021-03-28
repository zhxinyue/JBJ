// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/reset.css'
import './utils/flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as api from '../src/request/api'
import VueCookies from 'vue-cookies'
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCookies)
// this.$cookies.config('30d')
/* eslint-disable no-new */
Vue.prototype.NewGuid = function (){
  var guid = "";
  for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
          guid += "-";
  }
  return guid;
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
