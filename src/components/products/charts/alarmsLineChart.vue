<template>
    <section>
        <canvas ref="canvas"></canvas>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "alarms-line-chart",
        props: ['product_id'],
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
            this.$store.dispatch('alarmChatSetting', this.product_id)
            this.$store.dispatch('settingDates', new Date())

            setTimeout(() => {
                this.fetchData()
            }, 2000)

        },
        methods: {
            fetchData () {
                this.config.data.labels = this.dates
                this.config.data.datasets[0].data = this.numbers

                let ctx = this.$refs.canvas
                ctx.height = 100
                this.myChart = new Chart(ctx, this.config)

                console.log(this.numbers)
            },
        }
    }
</script>

<style scoped>

</style>