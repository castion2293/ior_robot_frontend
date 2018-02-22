export default {
    state: {
        dates: [],
        numbers: [],
        code_names: [],
        code_numbers: [],
    },
    getters: {
        dates (state) {
            return state.dates
        },
        numbers (state) {
            return state.numbers
        },
        code_names (state) {
            return state.code_names
        },
        code_numbers (state) {
            return state.code_numbers
        }
    },
    mutations: {
        setDates (state, payload) {
            state.dates = payload
        },
        setNumbers (state, payload) {
            state.numbers = payload
        },
        setCodeNames (state, payload) {
            state.code_names = payload
        },
        setCodeNumbers (state, payload) {
            state.code_numbers = payload
        }
    },
    actions: {
        alarmChatSetting ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`${host}/alarm?product_id=${payload}`)
            .then(response => {
                this.dispatch('settingNumbers', response.data.data.items)
                this.dispatch('settingDates', new Date())
                this.dispatch('settingCodeNumbers', response.data.data.items)
                this.dispatch('settingCodeName', response.data.data.items)
            })
            .catch(error => {
                console.log(error)
            })
        },
        settingNumbers ({commit}, payload) {
            let alarmDates = _.map(payload, alarm => {
                return alarm.ALARM_DATE
            })

            let datesArray = []

            for (let i = 13; i >= 0; i--) {
                datesArray.push(new Date(new Date().getTime() - 86400000 * i))
            }

            let numbers = []

            _.forEach(datesArray, dateArray => {
                let count = 0

                _.find(alarmDates, alarmDate => {
                    (new Date(alarmDate).getDate() === dateArray.getDate()) ? count++ : count = count
                })

                numbers.push(count)
            })

            commit('setNumbers', numbers)
        },
        settingDates ({commit}, payload) {
            let datesArray = []

            for (let i = 13; i >= 0; i--) {
                datesArray.push(new Date(payload.getTime() - 86400000 * i).toLocaleDateString())
            }

            commit('setDates', datesArray)
        },
        settingCodeNumbers ({commit}, payload) {
            let alarmNames = _.uniq(_.map(payload, alarm => {
                return alarm.ALARM_NAME
            }))

            let numbers = []

            _.forEach(alarmNames, alarmName => {
                let count = 0

                _.find(payload, alarm => {
                    (alarmName === alarm.ALARM_NAME) ? count++ : count = count
                })

                numbers.push(count)
            })

            commit('setCodeNumbers', numbers)
        },
        settingCodeName ({commit}, payload) {
            let alarmCodes = _.uniq(_.map(payload, alarm => {
                return alarm.ALARM_NAME
            }))

            commit('setCodeNames', alarmCodes)
        }

    }
}
