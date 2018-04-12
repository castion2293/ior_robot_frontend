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

                        <v-layout row wrap>
                            <v-flex md2 offset-md8 sm3 offset-sm7 xs7>
                                <v-menu
                                        lazy
                                        :close-on-content-click="false"
                                        v-model="menu"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        :nudge-right="40"
                                        max-width="500px"
                                        min-width="290px"
                                >
                                    <v-text-field
                                            slot="activator"
                                            label="請選擇月份"
                                            v-model="set_month"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker
                                            type="month"
                                            :first-day-of-week="0"
                                            locale="zh-cn"
                                            v-model="set_month"
                                    >
                                        <template slot-scope="{ save, cancel }">
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="primary" @click="cancel"><strong>取消</strong></v-btn>
                                                <v-btn flat color="primary" @click="save"><strong>確定</strong></v-btn>
                                            </v-card-actions>
                                        </template>
                                    </v-date-picker>
                                </v-menu>
                            </v-flex>
                            <v-flex md2 sm2 xs2 class="mt-2">
                                <v-btn color="primary" @click="setMonth">送出</v-btn>
                            </v-flex>
                        </v-layout>

                        <v-divider></v-divider>

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
                                        <strong v-if="Monthly_Throughput.total_ok">{{ Monthly_Throughput.total_ok }}</strong>
                                        <strong v-else>0</strong>
                                    </h1>
                                    <v-divider></v-divider>
                                    <v-card-title>
                                        <p class="headline grey--text text--darken-2"><strong>不良品:</strong></p>
                                        <v-spacer></v-spacer>
                                        <p class="text-xs-center headline red--text text--darken-1">
                                            <strong v-if="Monthly_Throughput.total_ng">{{ Monthly_Throughput.total_ng }}</strong>
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
                                    <strong v-if="Monthly_Throughput.rate">{{ Monthly_Throughput.rate }} %</strong>
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
                month: this.findMonth(),
                set_month: '',
                menu: false
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
            this.set_month = this.month

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
            },
            setMonth () {
                this.month = this.set_month

                let payload = {
                    product_id: this.product_id,
                    today: this.month
                }

                this.$store.dispatch('getMonthlyThroughput', payload)

                Event.fire('monthlyThroughput')
            }
        }
    }
</script>

<style scoped>

</style>