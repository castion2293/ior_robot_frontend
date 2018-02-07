<template>
    <v-app>
        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                    <v-card class="grey lighten-2">
                        <v-card color="green lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>手臂資料狀態</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-card-text>
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
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.name }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">SERIAL</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.ID }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">MODE</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="body-2 grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.MODE }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">OVRD</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.OVRD }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">LSPEED</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.LSPEED }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">MACHI</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.MACHINE }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">STATUS</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.STATUS }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">FILE</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.FILE }}</p>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm6 md3>
                    <v-card class="grey lighten-2">
                        <v-card color="teal lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>手臂綜合資料</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-card-text>
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-layout row wrap>
                                    <v-flex xs6>
                                        <span class="subheading text-xs-center">SERVO</span>
                                        <v-btn v-if="product.total.SERVO" fab dark small color="green lighten-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs6>
                                        <span class="subheading text-xs-center">EMG</span>
                                        <v-btn v-if="product.total.EMG" fab dark small color="red darken-2"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3 class="mt-3">
                                        <p class="subheading text-xs-center">COORD</p>
                                    </v-flex>
                                    <v-flex xs9 class="mt-3">
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.COORDINATE }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">RATE</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.RATE }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">MODE</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.MODE }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">HOLD</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.FREEHOLD }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">LINE</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.EXE_LINE }}</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="subheading text-xs-center">TASK</p>
                                    </v-flex>
                                    <v-flex xs9>
                                        <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.EXE_TASK }}</p>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm6 md3>
                    <v-card class="grey lighten-2">
                        <v-card color="pink lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>系統輸入</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-card-text>
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-layout row wrap>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">STROBE</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[0]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">PRG_RST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[1]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">STP_RST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[2]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">CYC_RST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[3]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">DO_RST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[4]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">ALM_RST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[5]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">RUN</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[6]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">SVON</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[7]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">STOP</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[8]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">CYCLE</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[9]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">LOW_SPD</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[10]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">BREAK</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[11]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">SVOFF</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DIN_249_264[12]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm6 md3>
                    <v-card class="grey lighten-2">
                        <v-card color="amber lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>系統輸出</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-card-text>
                            <v-container
                                    fluid
                                    style="min-height: 0;"
                                    grid-list-lg
                            >
                                <v-layout row wrap>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">EMG_ST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[0]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">SV_RDY</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[1]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">ARK</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[2]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">TEACH</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[3]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">INT</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[4]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">SIG</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[5]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">232C</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[6]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">ETHER</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[7]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">STS_RDY</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[8]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">AUT_RUN</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[9]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">CYC_END</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[10]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">LOW_ST</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[11]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">BT_ALM</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[12]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>
                                    <v-flex xs3>
                                        <p class="body-1 text-xs-center pt-3">ALARM</p>
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-btn v-if="product.total.DOUT_249_264[13]" fab dark small color="light-blue darken-1"></v-btn>
                                        <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                    </v-flex>

                                </v-layout>
                            </v-container>
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
    import { mapGetters } from 'vuex'

    export default {
        name: "run-status",
        props: ['product_id'],
        data () {
            return {
                myTimer: null,
            }
        },
        components: {
            drawer
        },
        computed: {
            ...mapGetters([
                'single_su_status',
                'single_total_status'
            ]),
            product () {
                return {
                    su: this.single_su_status,
                    total: this.single_total_status
                }
            }
        },
        mounted () {
            this.$store.dispatch('getSingleSUStatue', this.product_id)
            this.$store.dispatch('getSingleTotalStatus', this.product_id)

            // this.myTimer = setInterval(
            //     function() {
            //         this.$store.dispatch('getSingleSUStatue', this.product_id)
            //         this.$store.dispatch('getSingleTotalStatus', this.product_id)
            //     }.bind(this), 2000)
        },
        methods: {

        },
        beforeDestroy () {
            clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>