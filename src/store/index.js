import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import products from './products'
import data from './data'
import shared from './shared'
import chart from './chart'
import drawer from './drawer'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        user: user,
        products: products,
        data: data,
        shared: shared,
        chart: chart,
        drawer: drawer,
    }
})