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
                            <div class="headline"><strong>本日產能 ({{ OK_Throughput.DATE }})</strong></div>
                        </v-card-title>
                        <v-card-text class="white">
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-card-title>
                                    <span class="headline grey--text text--darken-2"><strong>OK品:</strong></span>
                                </v-card-title>
                                <v-card-text>
                                    <h1 class="text-xs-center light-blue--text text-darken-1" style="font-size:12em;">
                                        <strong>{{ OK_Throughput.NUMBER }}</strong>
                                    </h1>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-title>
                                    <p class="headline grey--text text--darken-2"><strong>NG品:</strong></p>
                                    <v-spacer></v-spacer>
                                    <p class="text-xs-center headline red--text text--darken-1"><strong>{{ NG_Throughput.NUMBER }}</strong></p>
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
                                <p class="headline grey--text text--darken-2"><strong>{{ rate }} %</strong></p>
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
        components: {
            drawer,
            loader,
            dailyThroughputPieChart
        },
        computed: {
            ...mapGetters([
                'loading',
                'OK_Throughput',
                'NG_Throughput'
            ]),
            rate () {
                let OK_NUMBER = parseFloat(this.OK_Throughput.NUMBER)
                let NG_NUMBER = parseFloat(this.NG_Throughput.NUMBER)

                return ((OK_NUMBER / (OK_NUMBER + NG_NUMBER)) * 100).toFixed(1)
            }
        },
        mounted () {
            let date = new Date()

            let payload = {
                product_id: this.product_id,
                today: `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`
            }

            this.$store.dispatch('getOKThroughputForToday', payload)
            this.$store.dispatch('getNGThroughputForToday', payload)


        }
    }
</script>

<style scoped>

</style>