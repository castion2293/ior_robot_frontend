import router from "../../router";

export default {
    state: {
        drawer_products: [],
        drawer_product: {
            name: ''
        },
        reset_products: [],
        reset_groups: [],
    },
    getters: {
        drawer_products (state) {
            return state.drawer_products
        },
        drawer_product (state) {
            return state.drawer_product
        },
        reset_products (state) {
            return state.reset_products
        },
        reset_groups (state) {
            return state.reset_groups
        }
    },
    mutations: {
        setDrawerProducts (state, payload) {

            let products = _.map(payload, product => {
                return {
                    name: product.name,
                    group: product.group,
                    avatar: product.photo,
                    product_id: product.product_id
                }
            })

            let groups = _.uniq(_.map(payload, product => {
                return product.group
            }))

            let elem = null

            _.forEach(groups, group => {
                elem = _.concat(elem, {header: group})

                _.find(products, product => {
                    if (product.group === group) {
                        elem = _.concat(elem, product)
                    }
                })

                elem = _.concat(elem, { divider: true })
            })

            state.drawer_products = _.drop(elem)
        },
        setDrawerProduct (state) {
            state.drawer_product = state.drawer_products[1]
        },
        resetDrawerProduct (state, payload) {
            state.drawer_product = state.drawer_products.find(product => {
                return product.name === payload
            })
        },
        setResetProducts (state, payload) {
            state.reset_groups = _.uniq(_.map(payload, product => {
                return product.group
            }))

            state.reset_products = payload
        }
    },
    actions: {
        getDrawerProducts ({commit}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(host + '/product')
                .then(response => {
                    commit('setDrawerProducts', response.data.data.items)
                    commit('setDrawerProduct')
                })
                .catch(error => {
                    if (error.response.data.message == "Unauthenticated.") {

                        //empty localstorage data
                        localStorage.removeItem('token')
                        localStorage.removeItem('name')
                        localStorage.removeItem('email')
                        localStorage.removeItem('photo')
                        localStorage.removeItem('token_name')
                        localStorage.removeItem('id')

                        let user = {
                            name: '',
                            email: '',
                            photo: '',
                            token: '',
                            token_name: '',
                            id: ''
                        }

                        commit('setUser', user)

                        //push url to index page
                        router.push('/')
                    }

                    //check if user doesn't have product
                    if(Boolean(error.response.data.error)) {
                        console.log("my error: " + Boolean(error.response.data.error))

                        commit('setError', error.response.data.error)
                    }
                })
        },
        reloadDrawerProducts ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(host + '/product')
                .then(response => {
                    commit('setDrawerProducts', response.data.data.items)
                    commit('resetDrawerProduct', payload)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getResetProducts ({commit}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(host + '/product')
            .then(response => {
                console.log(response.data.data.items)
                commit('setResetProducts', response.data.data.items)

                commit('setLoading', false)
            })
            .catch (error => {
                console.log(error)
            })
        }
    }
}
