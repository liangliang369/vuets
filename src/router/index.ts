import Vue from 'vue'
import VueRouter from 'vue-router'
import jwt_decode from 'jwt-decode'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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

router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.loginToken ? true : false;
  if(to.path=='/login' || to.path=='/retrievePassword') {
    next();
  }else {
    if(isLogin) {
      const decode :any = jwt_decode(localStorage.loginToken);
      console.log(decode)
      const { key } = decode;
      next();
    }else {
      next('/login');
    }
  }
})

export default router
