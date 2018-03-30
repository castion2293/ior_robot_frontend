<template>
    <v-app>
        <loader v-if="loading"></loader>

        <h1>Cumulate</h1>

        <drawer></drawer>
    </v-app>

</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'

    export default {
        name: "CumulateThroughput",
        props: ['product_id'],
        components: {
            drawer,
            loader
        },
    }
</script>

<style scoped>

</style>