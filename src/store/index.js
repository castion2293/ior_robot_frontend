import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import component from './component'
import data from './data'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        user: user,
        component: component,
        data: data
    }
})