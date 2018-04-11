<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm6 md6>
                    <v-card color="teal lighten-1" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>綜合資料</strong></div>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs6 class="text-xs-center">
                                    <span class="subheading text-xs-center">SERVO</span>
                                    <v-btn v-if="total.SERVO" fab dark small color="green lighten-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs6 class="text-xs-center">
                                    <span class="subheading text-xs-center">EMG</span>
                                    <v-btn v-if="total.EMG" fab dark small color="red darken-2"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs3 class="mt-3">
                                    <p class="subheading text-xs-center">COORD</p>
                                </v-flex>
                                <v-flex xs9 class="mt-3">
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ total.COORDINATE }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">RATE</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ total.RATE }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">MODE</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ total.MODE }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">HOLD</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ total.FREEHOLD }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">LINE</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ total.EXE_LINE }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">TASK</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ total.EXE_TASK }}</p>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm6 md6>
                    <v-card color="green lighten-1" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>資料狀態</strong></div>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">TYPE</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.name }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">SERIAL</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.ID }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">MODE</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="body-2 grey darken-4 green--text text-darken-4 text-xs-center">{{ su.MODE }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">OVRD</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.OVRD }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">LSPEED</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.LSPEED }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">MACHI</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.MACHINE }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">STATUS</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.STATUS }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">FILE</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ su.FILE }}</p>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
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

    export default {
        name: "run-status",
        props: ['product_id'],
        data () {
            return {
                myTimer: null,
                su: '',
                total: ''
            }
        },
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'single_su_status',
                'single_total_status',
                'coordinate',
                'loading'
            ])
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            this.$store.dispatch('getSingleSUStatue', this.product_id)
            this.$store.dispatch('getSingleTotalStatus', this.product_id)

            let channel = this.$pusher.subscribe('dynamoDB');

            channel.bind('SU', SU_data => {
                this.refreshSU(SU_data)
            });

            channel.bind('Total', (Total_data) => {
                this.refreshTotal(Total_data)
            });

            setTimeout(() => {
                this.su = this.single_su_status
                this.total = this.single_total_status
            }, 3000)
        },
        methods: {
            refreshSU (data) {
                this.su.MODE = data.MODE
                this.su.LSPEED = data.LSPEED
                this.su.OVRD = data.OVRD
                this.su.FILE = data.FILE
                this.su.MACHINE = data.MACHINE
                this.su.STATUS = data.STATUS
            },
            refreshTotal (data) {
                this.total = data
            }
        },
        beforeDestroy () {
            clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>
