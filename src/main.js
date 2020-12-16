// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/css/reset.css'
import './assets/css/border.css'
import "./utils/rem"
import "./assets/css/iconfont.css"

Vue.config.productionTip = false
fastClick.attach(document.body) //解决移动端部分机型点击事件延迟300ms问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
