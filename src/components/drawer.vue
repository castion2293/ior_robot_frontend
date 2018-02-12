<template>
    <v-app>
        <v-navigation-drawer
                :mini-variant="miniVariant"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                v-show="userIsAuthenticated"
        >

            <v-card>
                <v-card-text>
                    <v-select
                            v-bind:items="products"
                            v-model="drawer_product.name"
                            label="產品選擇"
                            item-text="name"
                            item-value="name"
                            chips
                            auto
                            max-height="auto"
                            autocomplete
                            append-icon="playlist_play"
                            hide-details
                            @input="changeProduct(drawer_product.name)"
                    >
                        <template slot="selection" slot-scope="data">
                            <v-chip
                                    @input="data.parent.selectItem(data.item)"
                                    :selected="data.selected"
                                    class="chip--select-multi"
                                    :key="JSON.stringify(data.item)"
                            >
                                <v-avatar>
                                    <img :src="data.item.avatar">
                                </v-avatar>
                                {{ data.item.name }}
                            </v-chip>
                        </template>
                        <template slot="item" slot-scope="data">
                            <template v-if="typeof data.item !== 'object'">
                                <v-list-tile-content v-text="data.item"></v-list-tile-content>
                            </template>
                            <template v-else>
                                <v-list-tile-avatar>
                                    <img v-bind:src="data.item.avatar"/>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </template>
                        </template>
                    </v-select>
                </v-card-text>
            </v-card>

            <v-card class="pb-3">
                <v-card-media :src="drawer_product.avatar" height="200px" contain>
                </v-card-media>
            </v-card>

            <v-list light>
                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">lightbulb_outline</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="blue--text text--darken-1"><b>手臂狀態</b></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile ripple @click="" :to="`/dashboard/products/status/runStatus/${drawer_product.product_id}`">
                        <v-list-tile-content>
                            <v-list-tile-title><b>運轉狀態</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile ripple @click="" :to="`/dashboard/products/status/ioStatus/${drawer_product.product_id}`">
                        <v-list-tile-content>
                            <v-list-tile-title><b>I/O狀態</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title><b>稼動率</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">notifications</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="blue--text text--darken-1"><b>警報異常</b></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile ripple @click="" router to="/dashboard/products/alarm/alarmHistory">
                        <v-list-tile-content>
                            <v-list-tile-title><b>異常列表</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title><b>異常圖表</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">equalizer</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="blue--text text--darken-1"><b>產能統計</b></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">build</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="blue--text text--darken-1"><b>保養維護</b></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>

                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">settings</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="blue--text text--darken-1"><b>資料設定</b></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title><b>基本設定</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title><b>產品設定</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title><b>警報設定</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile ripple @click="">
                        <v-list-tile-content>
                            <v-list-tile-title><b>喜好設定</b></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>

                <v-list-group>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">local_phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title class="blue--text text--darken-1"><b>關於我們</b></v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-icon color="blue darken-1">keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "drawer",
        data ()  {
            return {
                // products: [
                //     { header: 'Group 1'},
                //     { name: 'TV800', group: 'Group 2', avatar: 'https://s3-ap-northeast-1.amazonaws.com/iot-robot-front-pics/product_pics/tv800-243x300.png' },
                //     { divider: true },
                //     { header: 'Group 2'},
                //     { name: 'THL300', group: 'Group 1', avatar: 'https://s3-ap-northeast-1.amazonaws.com/iot-robot-front-pics/product_pics/300-254x300.png' },
                //     { divider: true },
                // ],
            }
        },
        computed: {
            ...mapGetters([
                'user',
                'drawer',
                'miniVariant',
                'drawer_products',
                'drawer_product'
            ]),
            userIsAuthenticated () {
                return this.user !== null && this.user !== undefined
            },
            products () {
                return this.drawer_products
            },
        },
        mounted () {
            let product = this.$store.getters.drawer_product.name;

            if (product == null || product === 'undefined' || product === '') {
                this.$store.dispatch('getDrawerProducts')
            }
        },
        methods: {
            ...mapActions([
                'reloadDrawerProducts',
            ]),
            changeProduct (product_name) {
                this.reloadDrawerProducts(product_name)
            },
        }
    }
</script>

<style scoped>

</style>