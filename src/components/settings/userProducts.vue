<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-card v-for="group in reset_groups" :key="group" class="mt-5">
                <v-card-title primary-title>
                    <div class="headline"><strong>{{ group }}</strong></div>
                </v-card-title>
                <v-card-text class="grey lighten-4">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4
                                v-for="product in reset_products"
                                :key="product.ID"
                                v-if="product.group === group"
                        >
                            <div @click="">
                                <v-card color="blue lighten-1" ripple class="white--text" style="cursor:pointer;">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-flex xs7>
                                                <div>
                                                    <div class="headline">{{ product.name }}</div>
                                                    <div class="subheading mt-5"><strong>分類: {{ product.group }}</strong></div>
                                                    <div class="subheading"><strong>產品序號: {{ product.product_id }}</strong></div>
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
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>

        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'
    import loader from '../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "user-product",
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'reset_products',
                'reset_groups',
                'loading'
            ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            this.$store.dispatch('getResetProducts')
        }
    }
</script>

<style scoped>

</style>