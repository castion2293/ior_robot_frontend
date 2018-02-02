import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import dashboard from '../components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
