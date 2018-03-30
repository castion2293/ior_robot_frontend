export default {
    state: {
        OK_Throughput: {
            DATE: '',
            NUMBER: ''
        },
        NG_Throughput: {
            NUMBER: ''
        }
    },
    getters: {
        OK_Throughput (state) {
            return state.OK_Throughput
        },
        NG_Throughput (state) {
            return state.NG_Throughput
        }
    },
    mutations: {
        setOKThroughput (state, payload) {
            state.OK_Throughput = payload
        },
        setNGThroughput (state, payload) {
            state.NG_Throughput = payload
        }
    },
    actions: {
        getOKThroughputForToday ({commit}, payload) {
            commit('setLoading', true)

            this.dispatch('setAuthentication')

            axios.get(`${host}/throughput/ok?product_id=${payload.product_id}&today=${payload.today}`)
                .then(response => {
                    commit('setOKThroughput', response.data.items)

                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getNGThroughputForToday ({commit}, payload) {
            commit('setLoading', true)

            this.dispatch('setAuthentication')

            axios.get(`${host}/throughput/ng?product_id=${payload.product_id}&today=${payload.today}`)
            .then(response => {
                commit('setNGThroughput', response.data.items)

                commit('setLoading', false)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
