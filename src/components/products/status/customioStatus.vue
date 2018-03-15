<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm6 md3>
                    <v-card color="teal accent-3" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>Input</strong></div>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">感測檢知1</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">感測檢知2</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">感測檢知3</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DIN4</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DIN5</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DIN6</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DIN7</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DIN8</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[7]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-card color="teal lighten-2" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>Output</strong></div>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">觸發訊號1</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">觸發訊號2</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">觸發訊號3</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DOUT4</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DOUT5</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DOUT6</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DOUT7</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">DOUT8</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[7]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-card color="cyan accent-4" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>Hand Input</strong></div>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">感測檢知4</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">感測檢知5</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HIN3</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HIN4</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HIN5</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HIN6</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HIN7</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HIN8</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[7]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm6 md3>
                    <v-card color="orange lighten-1" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>Hand Output</strong></div>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">氣壓缸1</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">氣壓缸2</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HOUT3</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HOUT4</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HOUT5</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HOUT6</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HOUT7</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">HOUT8</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[7]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
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
        name: "customio-status",
        props: ['product_id'],
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'single_total_status',
                'loading'
            ]),
            product () {
                return this.single_total_status
            }
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)
            this.$store.dispatch('getSingleTotalStatus', this.product_id)
        }
    }
</script>

<style scoped>

</style>