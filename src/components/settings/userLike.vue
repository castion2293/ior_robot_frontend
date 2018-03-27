<template>
    <v-app>
        <loader v-if="loading"></loader>
        <sucessSnackbar></sucessSnackbar>
        <failureSnackbar></failureSnackbar>

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
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN1</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN1">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN2</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN2">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN3</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN3">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN4</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN4">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN5</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN5">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN6</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN6">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN7</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN7">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DIN8</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DIN8">
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
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT1</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT1">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT2</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT2">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT3</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT3">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT4</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT4">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT5</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT5">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT6</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT6">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT7</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT7">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">DOUT8</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.DOUT8">
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
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN1</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN1">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN2</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN2">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN3</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN3">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN4</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN4">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN5</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN5">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN6</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN6">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN7</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN7">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HIN8</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HIN8">
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
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT1</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT1">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT2</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT2">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT3</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT3">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT4</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT4">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT5</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT5">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT6</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT6">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT7</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT7">
                                </v-flex>
                                <v-flex xs4>
                                    <p class="body-1 text-xs-center pt-3">HOUT8</p>
                                </v-flex>
                                <v-flex xs8 color="white" class="pt-3">
                                    <input type="text" class="w3-input w3-border" v-model="customer.HOUT8">
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
    import drawer from '../drawer'
    import loader from '../loader'
    import sucessSnackbar from '../successSnackbar'
    import failureSnackbar from '../failureSnackbar'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "user-like",
        data () {
            return {
                customer: ''
            }
        },
        props: ['product_id'],
        components: {
            drawer,
            loader,
            sucessSnackbar,
            failureSnackbar
        },
        computed: {
            ...mapGetters([
                'loading',
                'productCustomerSetting'
            ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)
            this.$store.dispatch('getProductCustomerSetting', this.product_id)

            setTimeout(() => {
                this.customer = this.productCustomerSetting
            }, 2000)

        },
        methods: {

        }
    }
</script>

<style scoped>
    .w3-input {
        padding:8px;
        display:block;
        border:none;
        border-bottom:1px solid #ccc;
        width:100%;
        background-color: white;
    }
    .w3-border {
        border:1px solid #ccc !important
    }
</style>