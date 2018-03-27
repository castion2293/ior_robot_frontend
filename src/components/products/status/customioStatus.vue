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
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN1 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN2 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN3 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN4 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN5 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN6 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN7 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_1_16[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DIN8 }}</p>
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
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT1 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT2 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT3 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT4 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT5 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT6 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT7 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_1_16[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.DOUT8 }}</p>
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
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN1 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN2 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN3 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN4 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN5 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN6 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN7 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DIN_201_216[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HIN8 }}</p>
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
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT1 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[0]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT2 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[1]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT3 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[2]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT4 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[3]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT5 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[4]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT6 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[5]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT7 }}</p>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn v-if="product.DOUT_201_216[6]" fab dark small color="light-blue darken-1"></v-btn>
                                    <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                </v-flex>
                                <v-flex xs8>
                                    <p class="body-1 text-xs-center pt-3">{{ productCustomerSetting.HOUT8 }}</p>
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
                'loading',
                'productCustomerSetting'
            ]),
            product () {
                return this.single_total_status
            }
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)
            this.$store.dispatch('getSingleTotalStatus', this.product_id)
            this.$store.dispatch('getProductCustomerSetting', this.product_id)
        }
    }
</script>

<style scoped>

</style>