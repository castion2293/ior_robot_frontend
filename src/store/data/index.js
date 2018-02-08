export default {
    state: {
        all_su_status: null,
        all_total_status: null,
        single_su_status: {
            name: ''
        },
        single_total_status: {
            SERVO: '',
            DIN_249_264: [''],
            DOUT_249_264: ['']
        }
    },
    getters: {
        all_su_status (state) {
            return state.all_su_status
        },
        all_total_status (state) {
            return state.all_total_status
        },
        single_su_status (state) {
            return state.single_su_status
        },
        single_total_status (state) {
            return state.single_total_status
        }
    },
    mutations: {
        setAllSUStatus (state, payload) {
            state.all_su_status = payload
        },
        setAllTotalStatus (state, payload) {
            state.all_total_status = payload
        },
        setSingleSUStatue (state, payload) {
            state.single_su_status = payload
        },
        setSingleTotalStatue (state, payload) {
            state.single_total_status = payload
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
        },
        getSingleSUStatue ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`http://localhost:8000/api/status/${payload}`)
                .then(response => {
                    commit('setSingleSUStatue', response.data.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getSingleTotalStatus ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`http://localhost:8000/api/total_status/${payload}`)
                .then(response => {
                    commit('setSingleTotalStatue', response.data.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}