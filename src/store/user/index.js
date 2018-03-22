import router from '../../router'

export default {
    state: {
        user: {
            name: '',
            email: '',
            photo: '',
            token: '',
            token_name: '',
            id: ''
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

                    this.dispatch('setUserLocalStorage', user)

                    // check is there any original url
                    let path = localStorage.getItem('original_url')

                    if (path !== undefined && path !== null) {
                        localStorage.removeItem('original_url')
                        router.push(path)
                    } else {
                        router.push('dashboard')
                    }
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

                    let user = {
                        name: '',
                        email: '',
                        photo: '',
                        token: '',
                        token_name: '',
                        id: ''
                    }

                    commit('setUser', user)

                    this.dispatch('removeLocalStorage', user)

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
                token: localStorage.getItem('token'),
                token_name: localStorage.getItem('token_name'),
                id: localStorage.getItem('id')
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
                    token: localStorage.getItem('token'),
                    token_name: localStorage.getItem('token_name'),
                    id: localStorage.getItem('id')
                }

                commit('setUser', user)
            }
        },
        resetUserProfile ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            payload['token_name'] = localStorage.getItem('token_name')

            axios.post(host + '/user/reset/profile', payload)
                .then(response => {
                    console.log(response.data)

                    let user = response.data

                    commit('setUser', user)

                    this.dispatch('setUserLocalStorage', user)

                    commit('setSuccessSnackbar', true)

                    router.push('/dashboard/settings/userBasic')

                    setTimeout( () => {
                        commit('setSuccessSnackbar', false)
                    }, 3000);

                })
                .catch(error => {
                    console.log(error)

                    commit('setFailureSnackbar', true)

                    setTimeout( () => {
                        commit('setFailureSnackbar', false)
                    }, 3000);
                })
        },
        resetUserPassword ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            payload['token_name'] = localStorage.getItem('token_name')

            axios.post(host + '/user/reset/password', payload)
            .then(response => {
                let user = response.data

                commit('setUser', user)

                this.dispatch('setUserLocalStorage', user)

                commit('setSuccessSnackbar', true)

                router.push('/dashboard/settings/userBasic')

                setTimeout( () => {
                    commit('setSuccessSnackbar', false)
                }, 3000);
            })
            .catch(error => {
                if (Boolean(error.response.data.error)) {
                    commit('setError', error.response.data.error)
                } else if (Boolean(error.response.data.message)) {
                    commit('setError', error.response.data.message)
                }

                commit('setFailureSnackbar', true)

                setTimeout( () => {
                    commit('setFailureSnackbar', false)
                }, 3000);
            })
        },
        resetUserAvatar ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            payload['token_name'] = localStorage.getItem('token_name')

            axios.post(host + '/user/reset/avatar', payload)
            .then(response => {
                let user = response.data

                commit('setUser', user)

                this.dispatch('setUserLocalStorage', user)

                commit('setSuccessSnackbar', true)

                router.push('/dashboard/settings/userBasic')

                setTimeout( () => {
                    commit('setSuccessSnackbar', false)
                }, 3000);
            })
            .catch(error => {
                console.log(error)

                commit('setFailureSnackbar', true)

                setTimeout( () => {
                    commit('setFailureSnackbar', false)
                }, 3000);
            })
        },
        setUserLocalStorage ({commit}, payload) {
            localStorage.setItem('token', payload.token)
            localStorage.setItem('name', payload.name)
            localStorage.setItem('email', payload.email)
            localStorage.setItem('photo', payload.photo)
            localStorage.setItem('token_name', payload.token_name)
            localStorage.setItem('id', payload.id)
        },
        removeLocalStorage ({commit}) {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            localStorage.removeItem('email')
            localStorage.removeItem('photo')
            localStorage.removeItem('token_name')
            localStorage.removeItem('id')
        }
    }
}
