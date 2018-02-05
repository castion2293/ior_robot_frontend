export default {
    state: {
        drawer: false,
        miniVariant: false
    },
    getters: {
        drawer (state) {
            return state.drawer
        },
        miniVariant (state) {
            return state.miniVariant
        }
    },
    mutations: {
        toggleDrawer (state) {
            state.drawer = !state.drawer
        },
        toggleminiVariant (state) {
            state.miniVariant = !state.miniVariant
        }
    },
    actions: {

    }
}
