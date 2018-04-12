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
                            <div class="headline white--text"><strong>每日產能 ({{startDate}} ~ {{endDate}})</strong></div>
                        </v-card-title>

                        <v-layout row wrap>
                            <v-flex md3 offset-md3 sm3 offset-sm3 xs9>
                                <v-menu
                                        lazy
                                        :close-on-content-click="false"
                                        v-model="menu_start"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        :nudge-right="40"
                                        max-width="500px"
                                        min-width="290px"
                                >
                                    <v-text-field
                                            slot="activator"
                                            label="請選擇開始日期"
                                            v-model="set_start_date"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker
                                            :first-day-of-week="0"
                                            locale="zh-cn"
                                            v-model="set_start_date"
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
                            <v-flex md1>
                                <h1 class="text-xs-center pt-2">~</h1>
                            </v-flex>
                            <v-flex md3 sm3 xs7>
                                <v-menu
                                        lazy
                                        :close-on-content-click="false"
                                        v-model="menu_end"
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        :nudge-right="40"
                                        max-width="500px"
                                        min-width="290px"
                                >
                                    <v-text-field
                                            slot="activator"
                                            label="請選擇結束日期"
                                            v-model="set_end_date"
                                            prepend-icon="event"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker
                                            :first-day-of-week="0"
                                            locale="zh-cn"
                                            v-model="set_end_date"
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
                                <v-btn color="primary" @click="setCumulate">送出</v-btn>
                            </v-flex>
                        </v-layout>

                        <v-divider></v-divider>

                        <cumulateThroughputLineChart
                                :start="startDate"
                                :end="endDate"
                                class="hidden-xs-only"
                        ></cumulateThroughputLineChart>
                        <cumulateThroughputLineChartMobile
                                :start="startDate"
                                :end="endDate"
                                class="hidden-sm-and-up"
                        ></cumulateThroughputLineChartMobile>
                    </v-card>
                </v-flex>

                <v-flex md6 sm12 xs12>
                    <v-card class="white--text">
                        <v-card-title primary-title class="teal accent-3" >
                            <div class="headline"><strong>產能 ({{startDate}} ~ {{endDate}})</strong></div>
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
                                        <strong v-if="Cumulate_Throughput.total_ok">{{ Cumulate_Throughput.total_ok }}</strong>
                                        <strong v-else>0</strong>
                                    </h1>
                                    <v-divider></v-divider>
                                    <v-card-title>
                                        <p class="headline grey--text text--darken-2"><strong>不良品:</strong></p>
                                        <v-spacer></v-spacer>
                                        <p class="text-xs-center headline red--text text--darken-1">
                                            <strong v-if="Cumulate_Throughput.total_ng">{{ Cumulate_Throughput.total_ng }}</strong>
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
                            <div class="headline"><strong>比例圖 ({{startDate}} ~ {{endDate}})</strong></div>
                        </v-card-title>
                        <v-card-text class="white">
                            <cumulateThroughputPieChart></cumulateThroughputPieChart>
                            <v-divider></v-divider>
                            <v-card-title>
                                <p class="headline grey--text text--darken-2"><strong>良率: </strong></p>
                                <v-spacer></v-spacer>
                                <p class="headline grey--text text--darken-2">
                                    <strong v-if="Cumulate_Throughput.rate">{{ Cumulate_Throughput.rate }} %</strong>
                                    <strong v-else>0 %</strong>
                                </p>
                            </v-card-title>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12>
                    <v-card color="red lighten-2" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong></strong>每日產能報表 ({{startDate}} ~ {{endDate}})</div>
                        </v-card-title>
                    </v-card>
                    <v-card class="white">
                       <cumulateThroughputList
                           :product_id="product_id"
                           :startDate="startDate"
                           :endDate="endDate"
                       ></cumulateThroughputList>
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
    import { mapGetters, mapActions } from 'vuex'
    import cumulateThroughputPieChart from '../charts/desktop/cumulateThroughputPieChart'
    import cumulateThroughputLineChart from '../charts/desktop/cumulateThroughputLineChart'
    import cumulateThroughputLineChartMobile from '../charts/mobile/cumulateThroughputLineChartMobile'
    import cumulateThroughputList from '../lists/cumulateThroughputList'

    export default {
        name: "CumulateThroughput",
        props: ['product_id'],
        data () {
            return {
                startDate: this.findDate(13),
                endDate: this.findDate(0),
                menu_start: '',
                menu_end: '',
                set_start_date: '',
                set_end_date: ''
            }
        },
        components: {
            drawer,
            loader,
            cumulateThroughputPieChart,
            cumulateThroughputLineChart,
            cumulateThroughputLineChartMobile,
            cumulateThroughputList
        },
        computed: {
            ...mapGetters([
                'loading',
                'Cumulate_Throughput'
            ]),
        },
        mounted () {
            let payload = {
                product_id: this.product_id,
                start_date: this.startDate,
                end_date: this.endDate
            }

            this.$store.dispatch('getCumulateThroughput', payload)
        },
        methods: {
            ...mapActions([
                'takeError'
            ]),
            findDate (subDay) {
                let date = new Date(new Date().getTime() - 86400000 * subDay)

                return `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`
            },
            setCumulate () {
                if (this.validation(new Date(this.set_start_date), new Date(this.set_end_date))) {
                    this.startDate = this.set_start_date
                    this.endDate = this.set_end_date

                    let payload = {
                        product_id: this.product_id,
                        start_date: this.startDate,
                        end_date: this.endDate
                    }

                    this.$store.dispatch('getCumulateThroughput', payload)

                    Event.fire('cumulateThroughput')
                }
            },
            validation (start, end) {
                if (start == 'Invalid Date' || end == 'Invalid Date') {
                    this.takeError('請輸入開始日期或結束日期!!')
                    return false
                }
                else if (start.getTime() === end.getTime()) {
                    this.takeError('開始日期與結束日期不可同一天!!')
                    return false
                } else if (start.getTime() > end.getTime()) {
                    this.takeError('結束日期需晚於開始日期!!')
                    return false
                } else if (((end.getTime() - start.getTime()) / 86400000) > 39) {
                    this.takeError('間隔日期請勿大於40天')
                    return false
                }

                return true
            }
        }
    }
</script>

<style scoped>

</style>