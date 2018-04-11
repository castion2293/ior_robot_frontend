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
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[0] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">2ed</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[1] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">3rd</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[2] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">4th</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[3] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">5th</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[4] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">6th</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[5] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">7st</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[6] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">8st</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.JOINT[7] }}</p>
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
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[0] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Y</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[1] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Z</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[2] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">A</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[3] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">B</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[4] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">C</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[5] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[6] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[7] }}</p>
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
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORK[0] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Y</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORK[1] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">Z</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORK[2] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">A</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORK[3] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">B</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORK[4] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center">C</p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORK[5] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[6] }}</p>
                                </v-flex>
                                <v-flex xs3>
                                    <p class="subheading text-xs-center"></p>
                                </v-flex>
                                <v-flex xs9>
                                    <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ cor.WORLD[7] }}</p>
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
        data () {
            return {
                cor: {
                    JOINT: [''],
                    WORLD: [''],
                    WORK: ['']
                }
            }
        },
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

            let channel = this.$pusher.subscribe('dynamoDB');

            channel.bind('COR', (Cor_data) => {
                this.refreshCoordinate(Cor_data)
            });

            setTimeout(() => {
                this.cor = this.coordinate
            }, 3000)
        },
        methods: {
            refreshCoordinate (data) {
                this.cor = data
            }
        }
    }
</script>

<style scoped>

</style>