export default {
    state: {
        error: null,
        loading: false
    },
    getters: {
        error (state) {
            return state.error
        },
        loading (state) {
            return state.loading
        },
    },
    mutations: {
        setError (state, payload) {
            state.error = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
    },
    actions: {
        clearError ({commit}) {
            commit('setError', null)
        }
    }
}