<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
        >
            <v-card color="red lighten-2" class="white--text">
                <v-card-title primary-title>
                    <div class="headline"><strong>ALARM 歷史列表</strong></div>
                </v-card-title>
            </v-card>
            <v-card class="white">
                <alarmHistoryList :product_id="product_id"></alarmHistoryList>
            </v-card>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import { mapGetters} from 'vuex'
    import drawer from '../../drawer'
    import loader from '../../loader'
    import alarmHistoryList from '../lists/alarmHistoryList'

    export default {
        name: "alarm-history",
        props: ['product_id'],
        components: {
            drawer,
            loader,
            alarmHistoryList
        },
        computed: {
            ...mapGetters([
                'loading',
            ])
        },
        mounted () {
            this.$store.dispatch('getAlarms', this.product_id)
        },
    }
</script>

<style scoped>

</style>
