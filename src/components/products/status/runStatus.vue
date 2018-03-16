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
                                    <v-btn v-if="product.total.SERVO" fab dark small color="green lighten-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs6 class="text-xs-center">
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
                </v-flex>
            </v-layout>
        </v-container>

        <!--<v-container-->
                <!--fluid-->
                <!--style="min-height: 0;"-->
                <!--grid-list-lg-->
        <!--&gt;-->
            <!--<v-layout row wrap>-->
                <!--<v-flex xs12 sm12 md4>-->
                    <!--<v-tabs fixed centered>-->
                        <!--<v-card color="teal lighten-1" class="white&#45;&#45;text">-->
                            <!--<v-card-title primary-title>-->
                                <!--<div class="headline"><strong>ROBOT 狀態</strong></div>-->
                            <!--</v-card-title>-->
                        <!--</v-card>-->
                        <!--<v-tabs-bar color="teal lighten-1" dark>-->
                            <!--<v-tabs-slider color="yellow"></v-tabs-slider>-->
                            <!--<v-tabs-item :href="'#tab-1-1'">綜合資料</v-tabs-item>-->
                            <!--<v-tabs-item :href="'#tab-1-2'">資料狀態</v-tabs-item>-->
                        <!--</v-tabs-bar>-->
                        <!--<v-tabs-items>-->
                            <!--<v-tabs-content :id="'tab-1-1'">-->
                                <!--<v-card-text class="grey lighten-2">-->
                                    <!--<v-container-->
                                            <!--fluid-->
                                            <!--style="min-height: 0;"-->
                                            <!--grid-list-lg-->
                                    <!--&gt;-->
                                        <!--<v-layout row wrap>-->
                                            <!--<v-flex xs6 class="text-xs-center">-->
                                                <!--<span class="subheading text-xs-center">SERVO</span>-->
                                                <!--<v-btn v-if="product.total.SERVO" fab dark small color="green lighten-1"></v-btn>-->
                                                <!--<v-btn v-else fab dark small color="grey lighten-1"></v-btn>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs6 class="text-xs-center">-->
                                                <!--<span class="subheading text-xs-center">EMG</span>-->
                                                <!--<v-btn v-if="product.total.EMG" fab dark small color="red darken-2"></v-btn>-->
                                                <!--<v-btn v-else fab dark small color="grey lighten-1"></v-btn>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3 class="mt-3">-->
                                                <!--<p class="subheading text-xs-center">COORD</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9 class="mt-3">-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.total.COORDINATE }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">RATE</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.total.RATE }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">MODE</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.total.MODE }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">HOLD</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.total.FREEHOLD }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">LINE</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.total.EXE_LINE }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">TASK</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.total.EXE_TASK }}</p>-->
                                            <!--</v-flex>-->
                                        <!--</v-layout>-->
                                    <!--</v-container>-->
                                <!--</v-card-text>-->
                            <!--</v-tabs-content>-->
                            <!--<v-tabs-content :id="'tab-1-2'">-->
                                <!--<v-card-text class="grey lighten-2">-->
                                    <!--<v-container-->
                                            <!--fluid-->
                                            <!--style="min-height: 0;"-->
                                            <!--grid-list-lg-->
                                    <!--&gt;-->
                                        <!--<v-layout row wrap>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">TYPE</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.name }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">SERIAL</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.ID }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">MODE</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="body-2 grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.MODE }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">OVRD</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.OVRD }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">LSPEED</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.LSPEED }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">MACHI</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.MACHINE }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">STATUS</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.STATUS }}</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs3>-->
                                                <!--<p class="subheading text-xs-center">FILE</p>-->
                                            <!--</v-flex>-->
                                            <!--<v-flex xs9>-->
                                                <!--<p class="subheading grey darken-4 green&#45;&#45;text text-darken-4 text-xs-center">{{ product.su.FILE }}</p>-->
                                            <!--</v-flex>-->
                                        <!--</v-layout>-->
                                    <!--</v-container>-->
                                <!--</v-card-text>-->
                            <!--</v-tabs-content>-->
                        <!--</v-tabs-items>-->
                    <!--</v-tabs>-->
                <!--</v-flex>-->
            <!--</v-layout>-->
        <!--</v-container>-->

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
            ]),
            product () {
                return {
                    su: this.single_su_status,
                    total: this.single_total_status
                }
            }
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            this.$store.dispatch('getSingleSUStatue', this.product_id)
            this.$store.dispatch('getSingleTotalStatus', this.product_id)

            // this.myTimer = setInterval(
            //     function() {
            //         this.$store.dispatch('getSingleSUStatue', this.product_id)
            //         this.$store.dispatch('getSingleTotalStatus', this.product_id)
            //         this.$store.dispatch('getCoordinate', this.product_id)
            //     }.bind(this), intervel)
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
