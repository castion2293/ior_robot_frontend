import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Guest from './guest'
import index from '../components/index'
import dashboard from '../components/products/dashboard'
import runStatus from '../components/products/status/runStatus'
import coordinateStatus from '../components/products/status/coordinateStatus'
import customioStatus from '../components/products/status/customioStatus'
import totalioStatus from '../components/products/status/totalioStatus'
import systemioStatus from '../components/products/status/systemioStatus'
import alarmHistory from '../components/products/alarms/alarmHistory'
import alarmDetailed from '../components/products/alarms/alarmDetailed'
import alarmCharts from '../components/products/alarms/alarmCharts'

import userBasic from '../components/settings/userBasic'
import userProduct from '../components/settings/userProduct'
import userNotication from '../components/settings/userNotication'
import userLike from '../components/settings/userLike'

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
        path: '/dashboard/products/status/coordinateStatus/:product_id',
        name: 'coordinateStatus',
        component: coordinateStatus,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/products/status/customioStatus/:product_id',
        name: 'customioStatus',
        component: customioStatus,
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
    },
    {
        path: '/dashboard/products/alarm/alarmCharts/:product_id',
        name: 'alarmCharts',
        component: alarmCharts,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/settings/userBasic',
        name: 'userBasic',
        component: userBasic,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/settings/userProduct',
        name: 'userProduct',
        component: userProduct,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/settings/userNotication',
        name: 'userNotication',
        component: userNotication,
        props: true,
        beforeEnter: AuthGuard
    },
    {
        path: '/dashboard/settings/userLike',
        name: 'userLike',
        component: userLike,
        props: true,
        beforeEnter: AuthGuard
    },
  ],
  mode: 'history'
})
