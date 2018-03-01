import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
