<template>
    <v-app>
        <loader v-if="loading"></loader>
        <h1>{{ alarms }}</h1>
        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "alarm-history",
        props: ['product_id'],
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'alarms',
                'loading'
            ]),
        },
        mounted () {
            this.$store.dispatch('getAlarms', this.product_id)
        }
    }
</script>

<style scoped>

</style>
