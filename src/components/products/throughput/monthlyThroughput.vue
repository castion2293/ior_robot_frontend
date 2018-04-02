<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
                mt-3
        >
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card class="grey lighten-4">
                        <v-card-title primary-title class="teal lighten-2" >
                            <div class="headline white--text"><strong>每日產能 ({{ month }})</strong></div>
                        </v-card-title>
                        <monthlyThroughputLineChart :month="month" class="hidden-xs-only"></monthlyThroughputLineChart>
                        <monthlyThroughputLineChartMobile :month="month" class="hidden-sm-and-up"></monthlyThroughputLineChartMobile>
                    </v-card>
                </v-flex>

                <v-flex md6 sm12 xs12>
                    <v-card class="white--text">
                        <v-card-title primary-title class="teal accent-3" >
                            <div class="headline"><strong>本月產能 ({{ month }})</strong></div>
                        </v-card-title>
                        <v-card-text class="white">
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-card-title>
                                    <span class="headline grey--text text--darken-2"><strong>良品:</strong></span>
                                </v-card-title>
                                <v-card-text>
                                    <h1 class="text-xs-center light-blue--text text-darken-1" style="font-size:12em;">
                                        <strong v-if="Monthly_Throughput">{{ Monthly_Throughput.total_ok }}</strong>
                                        <strong v-else>0</strong>
                                    </h1>
                                    <v-divider></v-divider>
                                    <v-card-title>
                                        <p class="headline grey--text text--darken-2"><strong>不良品:</strong></p>
                                        <v-spacer></v-spacer>
                                        <p class="text-xs-center headline red--text text--darken-1">
                                            <strong v-if="Monthly_Throughput">{{ Monthly_Throughput.total_ng }}</strong>
                                            <strong v-else>0</strong>
                                        </p>
                                    </v-card-title>
                                </v-card-text>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md6 sm12 xs12>
                    <v-card class="white--text">
                        <v-card-title primary-title class="orange accent-2" >
                            <div class="headline"><strong>比例圖 ({{ month }})</strong></div>
                        </v-card-title>
                        <v-card-text class="white">
                            <monthlyThroughputPieChart></monthlyThroughputPieChart>
                            <v-divider></v-divider>
                            <v-card-title>
                                <p class="headline grey--text text--darken-2"><strong>良率: </strong></p>
                                <v-spacer></v-spacer>
                                <p class="headline grey--text text--darken-2">
                                    <strong v-if="Monthly_Throughput">{{ Monthly_Throughput.rate }} %</strong>
                                    <strong v-else>0 %</strong>
                                </p>
                            </v-card-title>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12>
                    <v-card color="red lighten-2" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong></strong>每日產能報表 ({{ month }})</div>
                        </v-card-title>
                    </v-card>
                    <v-card class="white">
                        <monthlyThroughputList
                                :product_id="product_id"
                                :month="month"
                        ></monthlyThroughputList>
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
    import monthlyThroughputPieChart from '../charts/desktop/monthlyThroughputPieChart'
    import monthlyThroughputLineChart from '../charts/desktop/monthlyThroughputLineChart'
    import monthlyThroughputLineChartMobile from '../charts/mobile/monthlyThroughputLineChartMobile'
    import monthlyThroughputList from '../lists/monthlyThroughputList'

    export default {
        name: "monthlyThroughput",
        props: ['product_id'],
        data () {
            return {
                month: this.findMonth()
            }
        },
        components: {
            drawer,
            loader,
            monthlyThroughputPieChart,
            monthlyThroughputLineChart,
            monthlyThroughputLineChartMobile,
            monthlyThroughputList
        },
        computed: {
            ...mapGetters([
                'loading',
                'Monthly_Throughput'
            ]),
        },
        mounted () {
            let payload = {
                product_id: this.product_id,
                today: this.month
            }

            this.$store.dispatch('getMonthlyThroughput', payload)
        },
        methods: {
            findMonth () {
                let date = new Date()

                return `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}`
            }
        }
    }
</script>

<style scoped>

</style>