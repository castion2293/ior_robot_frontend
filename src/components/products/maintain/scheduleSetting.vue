<template>
    <v-app>
        <loader v-if="loading"></loader>

        <h1>schedule setting {{ product_id }}</h1>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'

    export default {
        name: "schedule setting",
        props: ['product_id'],
        components: {
            drawer,
            loader,
        },
    }
</script>

<style scoped>

</style>