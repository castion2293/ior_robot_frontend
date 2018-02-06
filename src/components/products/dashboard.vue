<template>
    <v-app>
        <h1>dashboard</h1>
        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'

    export default {
        name: "dashboard",
        components: {
            drawer
        },
        data () {
            return {
                myTimer: null
            }
        },
        mounted () {
            this.$store.dispatch('getAllSUStatus')
            this.$store.dispatch('getAllTotalStatus')

            this.myTimer = setInterval(
                function() {
                    this.$store.dispatch('getAllSUStatus')
                    this.$store.dispatch('getAllTotalStatus')
                }.bind(this), 3000)
        },
        beforeDestroy () {
            clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>