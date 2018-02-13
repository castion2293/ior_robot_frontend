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
        },
        alarms : null,
        alarm: {
            description: ''
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
        },
        alarms (state) {
            return state.alarms
        },
        alarm (state) {
            return state.alarm
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
        },
        setAlarms (state, payload) {
            state.alarms = payload
            console.log(state.alarms)
        },
        setAlarm (state, payload) {
            state.alarm = payload
        }
    },
    actions: {
        getAllSUStatus ({commit}) {
            commit('setLoading', true)

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get('http://localhost:8000/api/status')
                .then(response => {
                    commit('setAllSUStatus', response.data.data.items)

                    commit('setLoading', false)
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
            commit('setLoading', true)

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`http://localhost:8000/api/total_status/${payload}`)
                .then(response => {
                    commit('setSingleTotalStatue', response.data.data.items)

                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getAlarms ({commit}, payload) {
            commit('setLoading', true)

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`http://localhost:8000/api/alarm?product_id=${payload}`)
                .then(response => {
                    commit('setAlarms', response.data.data.items)

                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getAlarm ({commit}, payload) {
            commit('setLoading', true)

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`http://localhost:8000/api/alarm/${payload.id}?code=${payload.code}`)
                .then(response => {
                    commit('setAlarm', response.data.data.items)

                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}