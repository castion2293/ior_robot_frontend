<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm6 md6>
                    <v-card class="grey lighten-2">
                        <v-card color="pink lighten-1" class="white--text">
                            <v-card-title>
                                <div class="subheading"><strong>綜合輸入</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-card-text>
                            <v-tabs v-model="active1">
                                <v-tabs-bar class="grey darken-2" dark>
                                    <v-tabs-item
                                            key="tab-input-001"
                                            href="#tab-input-001"
                                            ripple
                                    >
                                        001
                                    </v-tabs-item>
                                    <v-tabs-item
                                            key="tab-input-101"
                                            href="#tab-input-101"
                                            ripple
                                    >
                                        101
                                    </v-tabs-item>
                                    <v-tabs-item
                                            key="tab-input-201"
                                            href="#tab-input-201"
                                            ripple
                                    >
                                        201
                                    </v-tabs-item>
                                    <v-tabs-slider color="yellow"></v-tabs-slider>
                                </v-tabs-bar>

                                <v-tabs-items>
                                    <v-tabs-content
                                            key="tab-input-001"
                                            id="tab-input-001"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_1_16" :key="`input_${index + 1}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 1 }}</div>
                                                        <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 1 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_17_32" :key="`input_${index + 17}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 17 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 17 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_33_48" :key="`input_${index + 33}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 33 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 33 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_49_64" :key="`input_${index + 49}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 49 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 49 }}</div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-tabs-content>
                                    <v-tabs-content
                                            key="tab-input-101"
                                            id="tab-input-101"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_101_116" :key="`input_${index + 101}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 101 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 101 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_117_132" :key="`input_${index + 117}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 117 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 117 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_133_148" :key="`input_${index + 133}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 133 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 133 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_149_164" :key="`input_${index + 149}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 149 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 149 }}</div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-tabs-content>
                                    <v-tabs-content
                                            key="tab-input-201"
                                            id="tab-input-201"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_201_216" :key="`input_${index + 201}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 201 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 201 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_217_232" :key="`input_${index + 217}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 217 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 217 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_233_248" :key="`input_${index + 233}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 233 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 233 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DIN_249_264" :key="`input_${index + 249}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 249 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 249 }}</div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-tabs-content>
                                </v-tabs-items>
                            </v-tabs>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm6 md6>
                    <v-card class="grey lighten-2">
                        <v-card color="amber lighten-1" class="white--text">
                            <v-card-title>
                                <div class="subheading"><strong>綜合輸出</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-card-text>
                            <v-tabs v-model="active2">
                                <v-tabs-bar class="grey darken-2" dark>
                                    <v-tabs-item
                                            key="tab-output-001"
                                            href="#tab-output-001"
                                            ripple
                                    >
                                        001
                                    </v-tabs-item>
                                    <v-tabs-item
                                            key="tab-output-101"
                                            href="#tab-output-101"
                                            ripple
                                    >
                                        101
                                    </v-tabs-item>
                                    <v-tabs-item
                                            key="tab-output-201"
                                            href="#tab-output-201"
                                            ripple
                                    >
                                        201
                                    </v-tabs-item>
                                    <v-tabs-slider color="yellow"></v-tabs-slider>
                                </v-tabs-bar>

                                <v-tabs-items>
                                    <v-tabs-content
                                            key="tab-output-001"
                                            id="tab-output-001"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex xs2 v-for="(output, index) in product.DOUT_1_16" :key="`output_${index + 1}`">
                                                        <div v-if="output" class="light-blue darken-1 white--text text-xs-center">{{ index + 1 }}</div>
                                                        <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 1 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(output, index) in product.DOUT_17_32" :key="`output_${index + 17}`">
                                                        <div v-if="output" class="light-blue darken-1 white--text text-xs-center">{{ index + 17 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 17 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(output, index) in product.DOUT_33_48" :key="`output_${index +33}`">
                                                        <div v-if="output" class="light-blue darken-1 white--text text-xs-center">{{ index + 33 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 33 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(output, index) in product.DOUT_49_64" :key="`output_${index + 49}`">
                                                        <div v-if="output" class="light-blue darken-1 white--text text-xs-center">{{ index + 49 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 49 }}</div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-tabs-content>
                                    <v-tabs-content
                                            key="tab-output-101"
                                            id="tab-output-101"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_101_116" :key="`output_${index + 101}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 101 }}</div>
                                                        <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 101 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_117_132" :key="`output_${index + 117}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 117 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 117 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_133_148" :key="`output_${index + 133}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 133 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 133 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_149_164" :key="`output_${index + 149}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 149 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 149 }}</div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-tabs-content>
                                    <v-tabs-content
                                            key="tab-output-201"
                                            id="tab-output-201"
                                    >
                                        <v-card flat>
                                            <v-card-text>
                                                <v-layout row wrap>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_201_216" :key="`output_${index + 201}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 201 }}</div>
                                                        <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 201 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_217_232" :key="`output_${index + 217}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 217 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 217 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_233_248" :key="`output_${index + 233}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 233 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 233 }}</div>
                                                    </v-flex>
                                                    <v-flex xs2 v-for="(input, index) in product.DOUT_249_264" :key="`output_${index + 249}`">
                                                        <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 249 }}</div>
                                                        <div v-else class="grey darken-1 white--text text-xs-center">{{ index + 249 }}</div>
                                                    </v-flex>
                                                </v-layout>
                                            </v-card-text>
                                        </v-card>
                                    </v-tabs-content>
                                </v-tabs-items>
                            </v-tabs>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "io-status",
        props: ['product_id'],
        data () {
            return {
                myTimer: null,
                count: 0,
                active1: null,
                active2: null,
            }
        },
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
            this.$store.dispatch('getSingleTotalStatus', this.product_id)

            this.myTimer = setInterval(
                function() {
                    this.$store.dispatch('getSingleTotalStatus', this.product_id)
                }.bind(this), 1000)
        },
        beforeDestroy () {
            clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>
