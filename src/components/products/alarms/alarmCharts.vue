<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm12 md12>
                    <v-card class="grey lighten-4">
                        <v-card color="red lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>警報趨勢圖</strong></div>
                            </v-card-title>
                        </v-card>
                        <alarmsLineChart :product_id="this.product_id" class="hidden-xs-only"></alarmsLineChart>
                        <alarms-line-chart-mobile class="hidden-sm-and-up"></alarms-line-chart-mobile>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 md6 class="mt-2">
                    <v-card class="grey lighten-4">
                        <v-card color="amber darken-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>個別警報</strong></div>
                            </v-card-title>
                        </v-card>
                        <alarmsBarChart class="hidden-xs-only"></alarmsBarChart>
                        <alarmsBarChartMobile class="hidden-sm-and-up"></alarmsBarChartMobile>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 md6 class="mt-2">
                    <v-card class="grey lighten-4">
                        <v-card color="green lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>警報比例圖</strong></div>
                            </v-card-title>
                        </v-card>
                        <alarmsPieChart class="hidden-xs-only"></alarmsPieChart>
                        <alarmsPieChartMobile class="hidden-sm-and-up"></alarmsPieChartMobile>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'
    import { mapGetters } from 'vuex'
    import alarmsLineChart from '../charts/desktop/alarmsLineChart'
    import alarmsBarChart from '../charts/desktop/alarmsBarChart'
    import alarmsPieChart from '../charts/desktop/alarmsPieChart'
    import alarmsLineChartMobile from '../charts/mobile/alarmsLineChartMobile'
    import alarmsBarChartMobile from '../charts/mobile/alarmsBarChartMobile'
    import alarmsPieChartMobile from '../charts/mobile/alarmsPieChartMobile'

    export default {
        name: "alarm-charts",
        props: ['product_id'],
        components: {
            drawer,
            loader,
            alarmsLineChart,
            alarmsBarChart,
            alarmsPieChart,
            alarmsLineChartMobile,
            alarmsBarChartMobile,
            alarmsPieChartMobile
        },
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'alarms',
                'loading',
            ]),
        },
        mounted () {
            //this.$store.dispatch('getAlarms', this.product_id)
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
