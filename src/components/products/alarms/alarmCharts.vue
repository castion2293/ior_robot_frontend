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
                                <div class="headline"><strong>警報趨勢圖 ({{startDate}} ~ {{endDate}})</strong></div>
                            </v-card-title>
                        </v-card>

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
                                <v-btn color="primary" @click="setAlarmDate">送出</v-btn>
                            </v-flex>
                        </v-layout>

                        <v-divider></v-divider>

                        <alarmsLineChart class="hidden-xs-only"></alarmsLineChart>
                        <alarms-line-chart-mobile class="hidden-sm-and-up"></alarms-line-chart-mobile>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 md6 class="mt-2">
                    <v-card class="grey lighten-4">
                        <v-card color="amber darken-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>個別警報 ({{startDate}} ~ {{endDate}})</strong></div>
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
                                <div class="headline"><strong>警報比例圖 ({{startDate}} ~ {{endDate}})</strong></div>
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
    import { mapGetters, mapActions } from 'vuex'
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
                startDate: this.findDate(13),
                endDate: this.findDate(0),
                menu_start: '',
                menu_end: '',
                set_start_date: '',
                set_end_date: ''
            }
        },
        computed: {
            ...mapGetters([
                'loading',
            ]),
        },
        mounted () {
            let payload = {
                product_id: this.product_id,
                start_date: this.startDate,
                end_date: this.endDate
            }

            this.$store.dispatch('alarmChatSetting', payload)
        },
        methods: {
            ...mapActions([
                'takeError'
            ]),
            findDate (subDay) {
                let date = new Date(new Date().getTime() - 86400000 * subDay)

                return `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`
            },
            setAlarmDate () {
                if (this.validation(new Date(this.set_start_date), new Date(this.set_end_date))) {
                    this.startDate = this.set_start_date
                    this.endDate = this.set_end_date

                    let payload = {
                        product_id: this.product_id,
                        start_date: this.startDate,
                        end_date: this.endDate
                    }

                    this.$store.dispatch('alarmChatSetting', payload)

                    Event.fire('alarmChart')
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
