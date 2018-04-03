<template>
    <section class="pt-5 pb-5">
        <canvas ref="canvas" height="200"></canvas>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "DailyThroughputPieChart",
        data () {
            return {
                myChart: '',
                config: {
                    type: 'pie',
                    data: {
                        labels: [],
                        datasets: [{
                            data: [],
                            backgroundColor: [
                                'rgba(3, 155, 229, 0.7)',
                                'rgba(229, 57, 53, 0.7)',
                            ],
                            borderColor: [
                                'rgba(3,155,229,1)',
                                'rgba(229, 57, 53, 1)',
                            ],
                            borderWidth: 1
                        }],
                    },
                    options: {
                        responsive: true,
                        legend: {
                            display: true,
                            position: 'bottom',
                        },
                        hover: {
                            mode: 'point'
                        },
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'Daily_Throughput',
            ]),
        },
        mounted () {
            setTimeout(() => {
                this.fetchData()
            }, 3000)

            Event.listen('dailyThroughput', () => {
                setTimeout(() => {
                    this.updateDate()
                }, 3000)
            });
        },
        methods: {
            fetchData () {
                this.config.data.labels = ['良品', '不良品']
                this.config.data.datasets[0].data = [this.Daily_Throughput.OK_Throughput, this.Daily_Throughput.NG_Throughput]

                let ctx = this.$refs.canvas
                this.myChart = new Chart(ctx, this.config)
            },
            updateDate () {
                this.config.data.labels = ['良品', '不良品']
                this.config.data.datasets[0].data = [this.Daily_Throughput.OK_Throughput, this.Daily_Throughput.NG_Throughput]

                this.myChart.update();
            }
        }
    }
</script>

<style scoped>

</style>