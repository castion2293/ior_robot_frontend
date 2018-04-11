<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
        >
            <v-card color="green lighten-2" class="white--text">
                <v-card-title primary-title>
                    <div class="headline"><strong>維修時程表</strong></div>
                </v-card-title>
                <v-card-text class="white">
                    <v-container
                            fluid
                            style="min-height: 0;"
                            grid-list-lg
                    >
                        <v-stepper v-model="e6" vertical>
                            <v-stepper-step step="1" :complete="e6 > 1">
                                三個月檢查
                                <small>運轉時數(1200小時)</small>
                            </v-stepper-step>
                            <v-stepper-content step="1">
                                <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click.native="e6 = 2"><strong>繼續</strong></v-btn>
                            </v-stepper-content>
                            <v-stepper-step step="2" v-bind:complete="e6 > 2">
                                六個月檢查
                                <small>運轉時數(2400小時)</small>
                            </v-stepper-step>
                            <v-stepper-content step="2">
                                <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click.native="e6 = 3"><strong>繼續</strong></v-btn>
                            </v-stepper-content>
                            <v-stepper-step step="3" v-bind:complete="e6 > 3">
                                九個月檢查
                                <small>運轉時數(3600小時)</small>
                            </v-stepper-step>
                            <v-stepper-content step="3">
                                <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click.native="e6 = 4"><strong>繼續</strong></v-btn>
                            </v-stepper-content>
                            <v-stepper-step step="4">
                                一年檢查
                                <small>運轉時數(4800小時)</small>
                            </v-stepper-step>
                            <v-stepper-content step="4">
                                <v-card color="grey lighten-3" class="mb-5" height="200px"></v-card>
                                <v-btn color="primary" @click.native="e6 = 1"><strong>繼續</strong></v-btn>
                            </v-stepper-content>
                        </v-stepper>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "schedule",
        props: ['product_id'],
        data () {
            return {
                e6: 1
            }
        },
        components: {
            drawer,
            loader,
        },
        computed: {
            ...mapGetters([
                'loading',
            ]),
        }
    }
</script>

<style scoped>

</style>