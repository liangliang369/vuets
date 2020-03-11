import Vue from 'vue'
import VueRouter from 'vue-router'
import jwt_decode from 'jwt-decode'
import Dashboard from '../views/dashboard/index.vue'
import Home from '../views/home/Home.vue'
Vue.use(VueRouter)

const routes:any = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { name:'淘票票管理系统',path:'/' },
    children:[
      {
        path:'/home',
        name:'Home',
        component:Home,
        meta: { name:'首页',path:'/home' }
      }
    ]
  },
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import ('@/views/login/Login.vue')
  },
  {
    path:'/retrievePassword',
    name:'RetrievePassword',
    component:()=>import('@/views/login/RetrievePassword.vue')
  }
]
const router = new VueRouter({
  routes
})

router.beforeEach((to:any,from:any,next:any)=>{
  const isLogin = sessionStorage.loginToken ? true : false;
  if(to.path=='/login' || to.path=='/retrievePassword') {
    next();
  }else {
    if(isLogin) {
      const decode :any = jwt_decode(sessionStorage.loginToken);
      console.log(decode)
      const { key } = decode;
      next();
    }else {
      next('/login');
    }
  }
})

export default router
