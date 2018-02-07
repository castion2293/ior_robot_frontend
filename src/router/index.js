import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Guest from './guest'
import index from '../components/index'
import dashboard from '../components/products/dashboard'
import runStatus from '../components/products/status/runStatus'
import ioStatus from '../components/products/status/ioStatus'
import alarmHistory from '../components/products/alarms/alarmHistory'

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
        path: '/dashboard/products/status/ioStatus',
        name: 'ioStatus',
        component: ioStatus,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/products/alarm/alarmHistory',
        name: 'alarmHistory',
        component: alarmHistory,
        beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
