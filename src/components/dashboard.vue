<template>
    <v-app>
        <h1>Dashboard</h1>
        <v-navigation-drawer
                :mini-variant="miniVariant"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                v-show="userIsAuthenticated"
        >
            <v-list>
                <v-list-tile
                        value="true"
                        v-for="(item, i) in items"
                        :key="i"
                >
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data ()  {
            return {
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
            }
        },
        computed: {
            ...mapGetters([
                'user',
                'drawer',
                'miniVariant'
            ]),
            userIsAuthenticated () {
                return this.user !== null && this.user !== undefined
            }
        },
    }
</script>

<style scoped>

</style>