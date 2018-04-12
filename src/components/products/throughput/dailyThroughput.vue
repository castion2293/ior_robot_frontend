<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
                mt-3
        >
            <v-layout row wrap>
                <v-flex md6 sm12 xs12>
                    <v-card class="white--text">
                        <v-card-title primary-title class="teal accent-3" >
                            <div class="headline"><strong>本日產能 ({{ today }})</strong></div>
                        </v-card-title>
                        <v-card-text class="white">
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >

                                <v-layout row wrap>
                                    <v-flex md8 offset-md1 sm9 offset-sm1 xs12>
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
                                                    label="請選擇日期"
                                                    v-model="date"
                                                    prepend-icon="event"
                                                    readonly
                                            ></v-text-field>
                                            <v-date-picker
                                                    :first-day-of-week="0"
                                                    locale="zh-cn"
                                                    v-model="date"
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
                                        <v-btn color="primary" @click="setDate">送出</v-btn>
                                    </v-flex>
                                </v-layout>

                                <v-divider></v-divider>

                                <v-card-title>
                                    <span class="headline grey--text text--darken-2"><strong>良品:</strong></span>
                                </v-card-title>
                                <v-card-text>
                                    <h1 class="text-xs-center light-blue--text text-darken-1" style="font-size:12em;">
                                        <strong v-if="Daily_Throughput.OK_Throughput">{{ Daily_Throughput.OK_Throughput }}</strong>
                                        <strong v-else>0</strong>
                                    </h1>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-title>
                                    <p class="headline grey--text text--darken-2"><strong>不良品:</strong></p>
                                    <v-spacer></v-spacer>
                                    <p class="text-xs-center headline red--text text--darken-1">
                                        <strong v-if="Daily_Throughput.NG_Throughput">{{ Daily_Throughput.NG_Throughput }}</strong>
                                        <strong v-else>0</strong>
                                    </p>
                                </v-card-title>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md6 sm12 xs12>
                    <v-card class="white--text">
                        <v-card-title primary-title class="orange accent-2" >
                            <div class="headline"><strong>本日產能比例圖</strong></div>
                        </v-card-title>
                        <v-card-text class="white">
                            <dailyThroughputPieChart></dailyThroughputPieChart>
                            <v-divider></v-divider>
                            <v-card-title>
                                <p class="headline grey--text text--darken-2"><strong>本日良率: </strong></p>
                                <v-spacer></v-spacer>
                                <p class="headline grey--text text--darken-2">
                                    <strong v-if="Daily_Throughput.rate">{{ Daily_Throughput.rate }} %</strong>
                                    <strong v-else>0 %</strong>
                                </p>
                            </v-card-title>
                        </v-card-text>
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
    import dailyThroughputPieChart from '../charts/desktop/dailyThroughputPieChart'

    export default {
        name: "dailyThroughput",
        props: ['product_id'],
        data () {
            return {
                today: '',
                date: null,
                menu: false,
                modal: false
            }
        },
        components: {
            drawer,
            loader,
            dailyThroughputPieChart
        },
        computed: {
            ...mapGetters([
                'loading',
                'Daily_Throughput'
            ]),
        },
        mounted () {
            let date = new Date()
            this.today = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`
            this.date = this.today

            let payload = {
                product_id: this.product_id,
                today: this.today
            }

            this.$store.dispatch('getDailyThroughput', payload)
        },
        methods: {
            setDate () {
                this.today = this.date

                let payload = {
                    product_id: this.product_id,
                    today: this.today
                }

                this.$store.dispatch('getDailyThroughput', payload)

                Event.fire('dailyThroughput');
            }
        }
    }
</script>

<style scoped>

</style>