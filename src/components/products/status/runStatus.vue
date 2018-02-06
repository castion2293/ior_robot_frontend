<template>
    <v-app>
        <h1>Running Status</h1>
        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'

    export default {
        name: "run-status",
        components: {
            drawer
        },
        mounted () {
            //this.$store.dispatch('getSUStatus')
        }
    }
</script>

<style scoped>

</style>