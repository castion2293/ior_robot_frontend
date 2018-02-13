import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Guest from './guest'
import index from '../components/index'
import dashboard from '../components/products/dashboard'
import runStatus from '../components/products/status/runStatus'
import totalioStatus from '../components/products/status/totalioStatus'
import systemioStatus from '../components/products/status/systemioStatus'
import alarmHistory from '../components/products/alarms/alarmHistory'
import alarmDetailed from '../components/products/alarms/alarmDetailed'

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
    },
    {
        path: '/dashboard/products/status/runStatus/:product_id',
        name: 'runStatus',
        component: runStatus,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/products/status/totalioStatus/:product_id',
        name: 'totalioStatus',
        component: totalioStatus,
        props: true,
        beforeEnter: AuthGuard
    },
    {
      path: '/dashboard/products/status/systemioStatus/:product_id',
      name: 'systemioStatus',
      component: systemioStatus,
      props: true,
      beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/products/alarm/alarmHistory/:product_id',
        name: 'alarmHistory',
        component: alarmHistory,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/products/alarm/alarmDetailed/:id/:code',
        name: 'alarmDetailed',
        component: alarmDetailed,
        props: true,
        beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
