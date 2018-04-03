<template>
    <section class="pt-2 pb-2">
        <canvas ref="canvas" height="75"></canvas>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "alarms-line-chart",
        props: ['start', 'end'],
        data () {
            return {
                myChart: '',
                config: {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'Alarms Logs',
                            data: [],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1
                        }],
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        hover: {
                            mode: 'point'
                        }
                    },
                },
                dates: []
            }
        },
        computed: {
            ...mapGetters([
                'alarmSets'
            ])
        },
        mounted () {
            setTimeout(() => {
                this.fetchData()
            }, 3000)

            Event.listen('alarmChart', () => {
                setTimeout(() => {
                    this.updateDate()
                }, 3000)
            })
        },
        methods: {
            fetchData () {
                this.config.data.labels = this.findLineLabels(this.start, this.end)
                this.config.data.datasets[0].data = this.findOAlarmDataSets()

                let ctx = this.$refs.canvas
                this.myChart = new Chart(ctx, this.config)
            },
            updateDate () {
                this.config.data.labels = this.findLineLabels(this.start, this.end)
                this.config.data.datasets[0].data = this.findOAlarmDataSets()

                this.myChart.update()
            },
            findLineLabels (first, last) {
                let firstDay = new Date(first).getTime()
                let lastDay = new Date(last).getTime()
                let interval = (lastDay - firstDay) / 86400000

                let labels = []
                this.dates = []

                for (let i = 0; i <= interval; i++) {
                    let date = new Date(firstDay + 86400000 * i)
                    let year = date.getFullYear().toString()
                    let month = (date.getMonth() + 1).toString()
                    let day = date.getDate().toString()

                    console.log(month.length)

                    if (month.length === 1) {
                        month = '0' + month
                    }

                    if (day.length === 1) {
                        day = '0' + day
                    }

                    this.dates.push(`${year}-${month}-${day}`)
                    labels.push(`${month}/${day}`)
                }

                return labels
            },
            findOAlarmDataSets () {
                let numbers = []

                _.map(this.dates, (date) => {
                    let count = 0

                    _.find(this.alarmSets, (item) => {
                        if (item.ALARM_DATE === date) {
                            ++count
                        }
                    })

                    numbers.push(count)
                })

                return numbers
            }
        }
    }
</script>

<style scoped>

</style>