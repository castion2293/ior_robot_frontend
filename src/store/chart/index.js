export default {
    state: {
        dates: [],
        numbers: [],
        alarms : null,
    },
    getters: {
        dates (state) {
            return state.dates
        },
        numbers (state) {
            return state.numbers
        }
    },
    mutations: {
        setDates (state, payload) {
            state.dates = payload
        },
        setNumbers (state, payload) {
            state.numbers = payload
        }
    },
    actions: {
        alarmChatSetting ({commit}, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'

            axios.get(`${host}/alarm?product_id=${payload}`)
            .then(response => {
                this.dispatch('settingNumbers', response.data.data.items)
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
                    //(alarmDate.replace(new RegExp('-', 'g'), '/') === datesArray) ? count++ : count = count
                    // console.log(alarmDate.replace(new RegExp('-', 'g'), '/'))

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

    }
}
