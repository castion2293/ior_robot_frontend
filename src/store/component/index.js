export default {
    state: {
        drawer: false,
        miniVariant: false,
        drawer_products: [],
        drawer_product: {
            name: ''
        }
    },
    getters: {
        drawer (state) {
            return state.drawer
        },
        miniVariant (state) {
            return state.miniVariant
        },
        drawer_products (state) {
            return state.drawer_products
        },
        drawer_product (state) {
            return state.drawer_product
        }
    },
    mutations: {
        toggleDrawer (state) {
            state.drawer = !state.drawer
        },
        toggleminiVariant (state) {
            state.miniVariant = !state.miniVariant
        },
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
                return {
                    group: product.group,
                }
            }))

            let elem = null

            groups.map(group => {
                elem = _.concat(elem, {header: group.group})
                let foo = products.find(product => {
                    return product.group === group.group
                })

                elem = _.concat(elem, foo)
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
                    console.log(error)
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
        }
    }
}
