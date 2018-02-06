<template>
    <v-app>
        <h1>Dashboard</h1>
        <drawer></drawer>
    </v-app>
</template>

<script>
    // import { mapGetters } from 'vuex'
    import drawer from './drawer'

    export default {
        components: {
            drawer
        }
    }
</script>

<style scoped>

</style>