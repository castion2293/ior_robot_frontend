<template>
    <v-app>
        <h1>I/O Status</h1>
        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'

    export default {
        name: "io-status",
        components: {
            drawer
        }
    }
</script>

<style scoped>

</style>