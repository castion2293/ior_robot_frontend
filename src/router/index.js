import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Guest from './guest'
import index from '../components/index'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index,
      beforeEnter: Guest
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
