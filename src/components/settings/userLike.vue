<template>
    <v-app>
        <loader v-if="loading"></loader>

        <h1>User Like Setting</h1>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'
    import loader from '../loader'

    export default {
        name: "user-like",
        components: {
            drawer,
            loader
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)
        }
    }
</script>

<style scoped>

</style>