export default {
    state: {
        drawer: false,
        miniVariant: false,
    },
    getters: {
        drawer (state) {
            return state.drawer
        },
        miniVariant (state) {
            return state.miniVariant
        },
    },
    mutations: {
        toggleDrawer (state) {
            state.drawer = !state.drawer
        },
        setDrawer (state, payload) {
            state.drawer = payload
        },
        toggleminiVariant (state) {
            state.miniVariant = !state.miniVariant
        },
    },
    actions: {
        closeDrawer ({commit}, payload) {
            commit('setDrawer', payload)
        }
    }
}