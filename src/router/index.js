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

import dailyThroughput from '../components/products/throughput/dailyThroughput'
import monthlyThroughput from '../components/products/throughput/monthlyThroughput'
import cumulateThroughput from '../components/products/throughput/cumulateThroughput'

import schedule from '../components/products/maintain/schedule'
import scheduleSetting from '../components/products/maintain/scheduleSetting'

import userBasic from '../components/settings/userBasic'
import userProducts from '../components/settings/userProducts'
import userProduct from '../components/settings/userProduct'
import userNotification from '../components/settings/userNotification'
import userLikes from '../components/settings/userLikes'
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
            path: '/dashboard/products/throughput/daily/:product_id',
            name: 'dailyThroughput',
            component: dailyThroughput,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/products/throughput/monthly/:product_id',
            name: 'monthlyThroughput',
            component: monthlyThroughput,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/products/throughput/cumulate/:product_id',
            name: 'cumulateThroughput',
            component: cumulateThroughput,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/products/maintain/schedule/:product_id',
            name: 'schedule',
            component: schedule,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/products/maintain/scheduleSetting/:product_id',
            name: 'scheduleSetting',
            component: scheduleSetting,
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
            path: '/dashboard/settings/userProducts',
            name: 'userProducts',
            component: userProducts,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/settings/userProduct/:product_id',
            name: 'userProduct',
            component: userProduct,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/settings/userNotification',
            name: 'userNotification',
            component: userNotification,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/settings/userLikes',
            name: 'userLikes',
            component: userLikes,
            props: true,
            beforeEnter: AuthGuard
        },
        {
            path: '/dashboard/settings/userLike/:product_id',
            name: 'userLike',
            component: userLike,
            props: true,
            beforeEnter: AuthGuard
        },
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
