export default {
    state: {
        all_su_status: null,
        all_total_status: null,
        single_su_status: {
            name: ''
        },
        single_total_status: {
            SERVO: '',
            DIN_1_16: [''],
            DIN_201_216: [''],
            DIN_249_264: [''],
            DOUT_1_16: [''],
            DOUT_201_216: [''],
            DOUT_249_264: ['']
        },
        coordinate: {
            JOINT: [''],
            WORLD: [''],
            WORK: ['']
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
        coordinate (state) {
            return state.coordinate
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
        setCoordinate (state, payload) {
            state.coordinate = payload
        },
        setAlarms (state, payload) {
            state.alarms = payload
        },
        setAlarm (state, payload) {
            state.alarm = payload
        }
    },
    actions: {
        getAllSUStatus ({commit}) {
            // commit('setLoading', true)

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(host + '/status')
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

            axios.get(host + '/total_status')
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

            axios.get(`${host}/status/${payload}`)
                .then(response => {
                    commit('setSingleSUStatue', response.data.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getSingleTotalStatus ({commit}, payload) {
            // commit('setLoading', true)

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`${host}/total_status/${payload}`)
                .then(response => {
                    commit('setSingleTotalStatue', response.data.data.items)

                    //close loader
                    commit('setLoading', false)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getCoordinate ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`${host}/coordinate/${payload}`)
            .then(response => {
                commit('setCoordinate', response.data.data.items)

                //close loader
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

            axios.get(`${host}/alarm?product_id=${payload}`)
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

            axios.get(`${host}/alarm/${payload.id}?code=${payload.code}`)
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
