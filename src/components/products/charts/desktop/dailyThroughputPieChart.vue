<template>
    <section class="pt-2 pb-2">
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
                'OK_Throughput',
                'NG_Throughput'
            ]),
        },
        mounted () {
            setTimeout(() => {
                this.fetchData()
            }, 3000)

        },
        methods: {
            fetchData () {
                this.config.data.labels = ['OK品', 'NG品']
                this.config.data.datasets[0].data = [this.OK_Throughput.NUMBER, this.NG_Throughput.NUMBER]

                let ctx = this.$refs.canvas
                this.myChart = new Chart(ctx, this.config)
            },
        }
    }
</script>

<style scoped>

</style>