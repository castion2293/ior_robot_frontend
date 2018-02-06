<template>
    <v-app>
        <h1>Alarm History</h1>
        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'

    export default {
        name: "alarm-history",
        components: {
            drawer
        }
    }
</script>

<style scoped>

</style>