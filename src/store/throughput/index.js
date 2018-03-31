export default {
    state: {
        Daily_Throughput: {
            DATE: '',
            OK_Throughput: '',
            NG_Throughput: ''
        },
        Cumulate_Throughput: {

        }
    },
    getters: {
        Daily_Throughput (state) {
            return state.Daily_Throughput
        },
        Cumulate_Throughput (state) {
            return state.Cumulate_Throughput
        }
    },
    mutations: {
        setDailyThroughput (state, payload) {
            state.Daily_Throughput = payload
        },
        setCumulateThroughput (state, payload) {
            state.Cumulate_Throughput = payload
        }
    },
    actions: {
        getDailyThroughput ({commit}, payload) {
            commit('setLoading', true)

            this.dispatch('setAuthentication')

            axios.get(`${host}/throughput/daily?product_id=${payload.product_id}&today=${payload.today}`)
                .then(response => {
                    commit('setDailyThroughput', response.data)

                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getCumulateThroughput ({commit}, payload) {
            commit('setLoading', true)

            this.dispatch('setAuthentication')

            axios.get(`${host}/throughput/cumulate?product_id=${payload.product_id}&two_week=${payload.today}`)
                .then(response => {
                    commit('setCumulateThroughput', response.data)

                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
