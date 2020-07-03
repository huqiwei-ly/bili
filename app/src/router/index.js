import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/Register/register.vue'
import Login from '@/views/Login/Login.vue'
import userinfo from '@/views/userinfo/userinfo.vue'
import edit from '@/views/edit/edit.vue'
import Home from '@/views/home/Home.vue'
import Detail from '@/views/Detail/Detail.vue'
import Article from '@/views/Article/Article.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect: '/login'
      },
  {
    path: '/Home',
    component: Home,
    meta:{
      keepalive:true
    }
  },
  {
    path: '/Article/:id',
    component: Article
  },
  {
    path: '/register',
    component: register
  },{
    path:'/Login',
    component:Login
  },{
    path:'/userinfo',
    component:userinfo,
    meta:{
      istoken:true
    }
  },{
    path:'/edit',
    component:edit,
    meta:{
      istoken:true
    }
  },{
    path: '/Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
  if(!localStorage.getItem('token') && !localStorage.getItem('id')&&to.meta.istoken==true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})

export default router
