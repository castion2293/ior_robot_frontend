<template>
    <section class="pt-2 pb-2">
        <canvas ref="canvas" height="600"></canvas>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "cumulateThroughputLineChart",
        props: ['start', 'end'],
        data () {
            return {
                myChart: '',
                config: {
                    type: 'horizontalBar',
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
                'Cumulate_Throughput'
            ])
        },
        mounted () {
            setTimeout(() => {
                this.fetchData()
            }, 3000)

            Event.listen('cumulateThroughput', () => {
                setTimeout(() => {
                    this.updateDate()
                }, 3000)
            })
        },
        methods: {
            fetchData () {
                this.config.data.labels = this.findLineLabels(this.start, this.end)
                this.config.data.datasets[0].data = this.findOKDataSets()
                this.config.data.datasets[1].data = this.findNGDateSets()

                let ctx = this.$refs.canvas
                this.myChart = new Chart(ctx, this.config)
            },
            updateDate () {
                this.config.data.labels = this.findLineLabels(this.start, this.end)
                this.config.data.datasets[0].data = this.findOKDataSets()
                this.config.data.datasets[1].data = this.findNGDateSets()

                this.myChart.update();
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
                    return _.find(this.Cumulate_Throughput.items, (item) => {
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
                    return _.find(this.Cumulate_Throughput.items, (item) => {
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