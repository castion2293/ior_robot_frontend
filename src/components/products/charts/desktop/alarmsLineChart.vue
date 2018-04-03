<template>
    <section class="pt-2 pb-2">
        <canvas ref="canvas" height="75"></canvas>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "alarms-line-chart",
        props: ['product_id', 'start', 'end'],
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
                }
            }
        },
        computed: {
            ...mapGetters([
                'dates',
                'numbers'
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
                this.config.data.labels = this.dates
                this.config.data.datasets[0].data = this.numbers

                let ctx = this.$refs.canvas
                this.myChart = new Chart(ctx, this.config)
            },
            updateDate () {
                this.config.data.labels = this.dates
                this.config.data.datasets[0].data = this.numbers

                this.myChart.update()
            }
        }
    }
</script>

<style scoped>

</style>