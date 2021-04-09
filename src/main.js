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
import Plugins from '../src/utils/common'
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.prototype.Plugins = Plugins;
Vue.use(ElementUI);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next)=>{　//从cookie中取值并给vux中的token赋值
  window.scroll(0, 0);
  next()
 
})
