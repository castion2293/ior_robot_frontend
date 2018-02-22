<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex x12 sm12 md12>
                    <v-card class="grey lighten-4">
                        <v-card color="red lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>警報趨勢圖</strong></div>
                            </v-card-title>
                        </v-card>
                        <alarmsLineChart :product_id="this.product_id"></alarmsLineChart>
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

    export default {
        name: "alarm-charts",
        props: ['product_id'],
        components: {
            drawer,
            loader,
            alarmsLineChart
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
