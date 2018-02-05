import router from '../../router'

export default {
    state: {
        user: null,
    },
    getters: {
        user (state) {
            return state.user
        }
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        signUserIn ({commit}, payload) {
            axios.post(host + '/login', payload)
                .then(response => {
                    let token = response.data.token

                    commit('setUser', token)
                    localStorage.setItem('token', token)

                    router.push('/dashboard')
                })
                .catch(error => {
                    console.log(error)
                })
        },
        signUserOut ({commit}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(host + '/logout')
                .then(response => {
                    //console.log(response)
                    localStorage.removeItem('token')
                    commit('setUser', null)

                    router.push('/')
                })
                .catch(error => {
                    console.log(error)
                })
        },
        autoSignIn ({commit}, payload) {
            commit('setUser', payload)
        }
    }
}
