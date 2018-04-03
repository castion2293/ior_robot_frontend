export default {
    state: {
        alarmSets: [],
        // dates: [],
        // numbers: [],
        code_names: [],
        code_numbers: [],
    },
    getters: {
        alarmSets (state) {
            return state.alarmSets
        },
        // dates (state) {
        //     return state.dates
        // },
        // numbers (state) {
        //     return state.numbers
        // },
        code_names (state) {
            return state.code_names
        },
        code_numbers (state) {
            return state.code_numbers
        }
    },
    mutations: {
        setAlarmSets (state, payload) {
            state.alarmSets = payload
        },
        // setDates (state, payload) {
        //     state.dates = payload
        // },
        // setNumbers (state, payload) {
        //     state.numbers = payload
        // },
        setCodeNames (state, payload) {
            state.code_names = payload
        },
        setCodeNumbers (state, payload) {
            state.code_numbers = payload
        }
    },
    actions: {
        alarmChatSetting ({commit}, payload) {
            commit('setLoading', true)

            this.dispatch('setAuthentication')

            axios.get(`${host}/alarm?product_id=${payload.product_id}&interval=${payload.start_date}/${payload.end_date}`)
            .then(response => {
                commit('setAlarmSets', response.data.data.items)
                // this.dispatch('settingNumbers', response.data.data.items)
                // this.dispatch('settingDates', payload)
                this.dispatch('settingCodeNumbers', response.data.data.items)
                this.dispatch('settingCodeName', response.data.data.items)

                commit('setLoading', false)
            })
            .catch(error => {
                console.log(error)
            })
        },
        // settingNumbers ({commit}, payload) {
        //     let alarmDates = _.map(payload, alarm => {
        //         return alarm.ALARM_DATE
        //     })
        //
        //     let datesArray = this.dates
        //
        //     for (let i = 13; i >= 0; i--) {
        //         datesArray.push(new Date(new Date().getTime() - 86400000 * i))
        //     }
        //
        //     let numbers = []
        //
        //     _.forEach(datesArray, dateArray => {
        //         let count = 0
        //
        //         _.find(alarmDates, alarmDate => {
        //             (new Date(alarmDate).getMonth() === dateArray.getMonth()) &&
        //             (new Date(alarmDate).getDate() === dateArray.getDate())
        //                 ? count++ : count = count
        //         })
        //
        //         numbers.push(count)
        //     })
        //
        //     commit('setNumbers', numbers)
        // },
        // settingDates ({commit}, payload) {
        //     let firstDay = new Date(payload.start_date).getTime()
        //     let lastDay = new Date(payload.end_date).getTime()
        //     let interval = (lastDay - firstDay) / 86400000
        //
        //     let datesArray = []
        //
        //     for (let i = 0; i <= interval; i++) {
        //         let date = new Date(firstDay + 86400000 * i)
        //         let year = date.getFullYear().toString()
        //         let month = (date.getMonth() + 1).toString()
        //         let day = date.getDate().toString()
        //
        //         console.log(month.length)
        //
        //         if (month.length === 1) {
        //             month = '0' + month
        //         }
        //
        //         if (day.length === 1) {
        //             day = '0' + day
        //         }
        //
        //         datesArray.push(`${month}/${day}`)
        //     }
        //
        //     commit('setDates', datesArray)
        // },
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
