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
//使用awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//引入vuex
import store from "./store"

//进行非父子组件传值
Vue.prototype.$bus = new Vue()


Vue.config.productionTip = false
fastClick.attach(document.body) //解决移动端部分机型点击事件延迟300ms问题
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
