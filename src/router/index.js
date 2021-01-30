import Vue from 'vue'
import Router from 'vue-router'
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(Router)

const router =  new Router({
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import("../pages/home/Home"),
      meta:{
        title:"首页"
      }
    },
    {
      path:'/city',
      name:'City',
      component:()=>import("@/pages/city/City"),
      meta:{
        title:"城市选择"
      }
    },
    {
      path:"*",
      redirect:"/"
    }
  ]
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  NProgress.start()
  next()
})

router.afterEach((to,from)=>{
  NProgress.done()
})

export default router
