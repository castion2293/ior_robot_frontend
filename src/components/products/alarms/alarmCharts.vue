<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                fluid
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
                        <alarmsLineChart :product_id="this.product_id"></alarmsLineChart>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 md6 class="mt-2">
                    <v-card class="grey lighten-4">
                        <v-card color="amber darken-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>個別警報</strong></div>
                            </v-card-title>
                        </v-card>
                        <alarmsBarChart></alarmsBarChart>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm12 md6 class="mt-2">
                    <v-card class="grey lighten-4">
                        <v-card color="green lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>警報比例圖</strong></div>
                            </v-card-title>
                        </v-card>
                        <alarmsPieChart></alarmsPieChart>
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
    import alarmsLineChart from '../charts/alarmsLineChart'
    import alarmsBarChart from '../charts/alarmsBarChart'
    import alarmsPieChart from '../charts/alarmsPieChart'

    export default {
        name: "alarm-charts",
        props: ['product_id'],
        components: {
            drawer,
            loader,
            alarmsLineChart,
            alarmsBarChart,
            alarmsPieChart
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
