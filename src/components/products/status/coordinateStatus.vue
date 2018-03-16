<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm4 md4>
                    <v-card color="pink lighten-1" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>Joint 座標</strong></div>
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
                                    <p class="subheading text-xs-center">1st</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[0] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">2ed</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[1] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">3rd</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[2] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">4th</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[3] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">5th</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[4] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">6th</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[5] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">7st</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[6] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">8st</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[7] }}</p>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm4 md4>
                    <v-card color="green accent-3" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>World 座標</strong></div>
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
                                    <p class="subheading text-xs-center">X</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[0] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Y</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[1] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Z</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[2] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">A</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[3] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">B</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[4] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">C</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[5] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[6] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[7] }}</p>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-flex>
                <v-flex xs12 sm4 md4>
                    <v-card color="orange lighten-1" class="white--text">
                        <v-card-title primary-title>
                            <div class="headline"><strong>Work 座標</strong></div>
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
                                    <p class="subheading text-xs-center">X</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[0] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Y</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[1] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Z</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[2] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">A</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[3] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">B</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[4] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">C</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[5] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[6] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[7] }}</p>
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
        name: "coordinate-status",
        props: ['product_id'],
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'coordinate',
                'loading'
            ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)
            this.$store.dispatch('getCoordinate', this.product_id)
        }
    }
</script>

<style scoped>

</style>