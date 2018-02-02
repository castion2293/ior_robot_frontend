import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        drawer: false,
        miniVariant: false
    },
    getters: {
        user (state) {
            return state.user
        },
        drawer (state) {
            return state.drawer
        },
        miniVariant (state) {
            return state.miniVariant
        }
    },
    mutations: {
        signUserIn (state, payload) {
            axios.post('http://localhost:8000/api/login', payload)
              .then(response => {
                  let token = response.data.token
                  console.log(token)
                  state.user = token
                  localStorage.setItem('token', token)
              })
              .catch(error => {
                  console.log(error)
              })
        },
        signUserOut (state) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get('http://localhost:8000/api/logout')
                .then(response => {
                    console.log(response)
                    localStorage.removeItem('token')
                    state.user = null
                })
                .catch(error => {
                    console.log(error)
                })
        },
        toggleDrawer (state) {
            state.drawer = !state.drawer
        },
        toggleminiVariant (state) {
            state.miniVariant = !state.miniVariant
        }
    }
})