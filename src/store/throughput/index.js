export default {
    state: {
        Daily_Throughput: {
            DATE: '',
            OK_Throughput: '',
            NG_Throughput: ''
        },
        Monthly_Throughput: {

        },
        Cumulate_Throughput: {

        },
    },
    getters: {
        Daily_Throughput (state) {
            return state.Daily_Throughput
        },
        Monthly_Throughput (state) {
            return state.Monthly_Throughput
        },
        Cumulate_Throughput (state) {
            return state.Cumulate_Throughput
        }
    },
    mutations: {
        setDailyThroughput (state, payload) {
            state.Daily_Throughput = payload
        },
        setMonthlyThroughput (state, payload) {
            state.Monthly_Throughput = payload
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
        getMonthlyThroughput ({commit}, payload) {
            commit('setLoading', true)

            this.dispatch('setAuthentication')

            axios.get(`${host}/throughput/monthly?product_id=${payload.product_id}&monthly=${payload.today}`)
                .then(response => {
                    commit('setMonthlyThroughput', response.data)

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
