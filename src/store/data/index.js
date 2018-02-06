export default {
    state: {
        all_su_status: null,
        all_total_status: null
    },
    getters: {
        all_su_status (state) {
            return state.su_status
        },
        all_total_status (state) {
            return state.su_status
        },
    },
    mutations: {
        setAllSUStatus (state, payload) {
            state.all_su_status = payload
            console.log(state.all_su_status)
        },
        setAllTotalStatus (state, payload) {
            state.all_total_status = payload
            console.log(state.all_total_status)
        }
    },
    actions: {
        getAllSUStatus ({commit}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get('http://localhost:8000/api/status')
                .then(response => {
                    commit('setAllSUStatus', response.data.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getAllTotalStatus ({commit}) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get('http://localhost:8000/api/total_status')
                .then(response => {
                    commit('setAllTotalStatus', response.data.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}