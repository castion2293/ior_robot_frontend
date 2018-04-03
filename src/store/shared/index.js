export default {
    state: {
        error: null,
        loading: false,
        successSnackbar: false,
        failureSnackbar: false,
    },
    getters: {
        error (state) {
            return state.error
        },
        loading (state) {
            return state.loading
        },
        successSnackbar (state) {
            return state.successSnackbar
        },
        failureSnackbar (state) {
            return state.failureSnackbar
        }
    },
    mutations: {
        setError (state, payload) {
            state.error = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setSuccessSnackbar (state, payload) {
            state.successSnackbar = payload
        },
        setFailureSnackbar (state, payload) {
            state.failureSnackbar = payload
        }

    },
    actions: {
        clearError ({commit}) {
            commit('setError', null)
        },
        takeError ({commit}, payload) {
            commit('setError', payload)
        },
        takeLoading({commit}, payload) {
            commit('setLoading', payload)
        }
    }
}
