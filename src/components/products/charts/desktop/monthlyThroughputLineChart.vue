<template>
    <section class="pt-3 pb-2">
        <canvas ref="canvas" height="75"></canvas>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "monthlyThroughputLineChart",
        props: ['month'],
        data () {
            return {
                myChart: '',
                config: {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [
                            {
                                label: '良品',
                                data: [],
                                backgroundColor: 'rgba(3, 155, 229, 0.1)',
                                borderColor: 'rgba(3, 155, 229, 1)',
                                borderWidth: 1
                            },
                            {
                                label: '不良品',
                                data: [],
                                backgroundColor: 'rgba(229, 57, 53, 0.1)',
                                borderColor: 'rgba(229, 57, 53, 1)',
                                borderWidth: 1
                            }
                        ],
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: true,
                            position: 'bottom',
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
                'Monthly_Throughput'
            ])
        },
        mounted () {
            setTimeout(() => {
                this.fetchData()
            }, 3000)

            Event.listen('monthlyThroughput', () => {
                setTimeout(() => {
                    this.updateDate()
                }, 3000)
            })

        },
        methods: {
            fetchData () {
                this.config.data.labels = this.findLineLabels(this.month)
                this.config.data.datasets[0].data = this.findOKDataSets()
                this.config.data.datasets[1].data = this.findNGDateSets()

                let ctx = this.$refs.canvas
                this.myChart = new Chart(ctx, this.config)
            },
            updateDate () {
                this.config.data.labels = this.findLineLabels(this.month)
                this.config.data.datasets[0].data = this.findOKDataSets()
                this.config.data.datasets[1].data = this.findNGDateSets()

                this.myChart.update();
            },
            findLineLabels (month) {
                let firstDay = new Date(month)

                let days = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate()

                let labels = []
                this.dates = []

                for (let i = 0; i < days; i++) {
                    let date = new Date(firstDay.getTime() + 86400000 * i)
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
            findOKDataSets () {
                return  _.map(_.map(this.dates, (date) => {
                    return _.find(this.Monthly_Throughput.items, (item) => {
                        return item.date === date
                    })
                }), (e) => {
                    if (Boolean(e)) {
                        return e.OK_Throughput
                    } else {
                        return 0
                    }
                })
            },
            findNGDateSets () {
                return  _.map(_.map(this.dates, (date) => {
                    return _.find(this.Monthly_Throughput.items, (item) => {
                        return item.date === date
                    })
                }), (e) => {
                    if (Boolean(e)) {
                        return e.NG_Throughput
                    } else {
                        return 0
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>