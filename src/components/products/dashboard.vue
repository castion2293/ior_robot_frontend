<template>
    <v-app>
        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="product in products" :key="product.ID">
                    <v-card color="blue lighten-1" ripple class="white--text" style="cursor:pointer;" :to="`/dashboard/products/status/runStatus/${product.ID}`">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex xs7>
                                    <div>
                                        <div class="headline">{{ product.name }}</div>
                                        <div class="subheading mt-5">MODE: {{ product.MODE }}</div>
                                        <div class="subheading">STATUS: {{ product.STATUS }}</div>
                                    </div>
                                </v-flex>
                                <v-flex xs5>
                                    <v-card-media
                                            :src="product.photo"
                                            height="150px"
                                            contain
                                    ></v-card-media>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'
    import { mapGetters } from 'vuex'

    export default {
        name: "dashboard",
        components: {
            drawer
        },
        data () {
            return {
                myTimer: null,
            }
        },
        computed: {
            ...mapGetters([
                'all_su_status',
            ]),
            products () {
                return this.all_su_status
            }
        },
        methods: {

        },
        mounted () {
            this.$store.dispatch('getAllSUStatus')

            // this.myTimer = setInterval(
            //     function() {
            //         this.$store.dispatch('getAllSUStatus')
            //         this.$store.dispatch('getAllTotalStatus')
            //     }.bind(this), 3000)
        },
        beforeDestroy () {
            clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>