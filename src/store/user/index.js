import router from '../../router'

export default {
    state: {
        user: {
            name: '',
            email: '',
            photo: '',
            token: '',
            token_name: ''
        },
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
                    console.log(response)
                    let user = response.data

                    commit('setUser', user)

                    localStorage.setItem('token', user.token)
                    localStorage.setItem('name', user.name)
                    localStorage.setItem('email', user.email)
                    localStorage.setItem('photo', user.photo)
                    localStorage.setItem('token_name', user.token_name)

                    router.push('/dashboard')
                })
                .catch(error => {
                    //console.log(error.response.data.error)

                    commit('setError', error.response.data.error)
                })
        },
        signUserOut ({commit}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.post(host + '/logout', {token_name: localStorage.getItem('token_name')})
                .then(response => {

                    localStorage.removeItem('token')
                    localStorage.removeItem('name')
                    localStorage.removeItem('email')
                    localStorage.removeItem('photo')
                    localStorage.removeItem('token_name')

                    let user = {
                        name: '',
                        email: '',
                        photo: '',
                        token: '',
                        token_name: '',
                    }

                    commit('setUser', user)

                    let products = {
                        name: ''
                    }

                    commit('setDrawerProducts', products)
                    commit('setDrawerProduct', products)

                    router.push('/')
                })
                .catch(error => {
                    console.log(error)
                })
        },
        autoSignIn ({commit},) {
            let user = {
                name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                photo: localStorage.getItem('photo'),
                token: localStorage.getItem('token')
            }

            commit('setUser', user)
        },
        checkUserStatus ({commit}) {
            let token = localStorage.getItem('token')
            if (token !== null && token !== 'undefined') {
                let user = {
                    name: localStorage.getItem('name'),
                    email: localStorage.getItem('email'),
                    photo: localStorage.getItem('photo'),
                    token: localStorage.getItem('token')
                }

                commit('setUser', user)
            }
        }
    }
}
