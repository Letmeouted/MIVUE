// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import 'jquery'
import VueLazyload from 'vue-lazyload'
import 'lazysizes'
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(VueLazyload)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
