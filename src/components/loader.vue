<template>
    <div>
        <v-progress-circular indeterminate v-bind:size="50" color="primary"></v-progress-circular>
    </div>
</template>

<script>
    export default {
        name: "loader"
    }
</script>

<style lang="stylus" scoped>
    div
        text-align: center
        padding-top:10%;
        height: 100%

    .progress-circular
      margin: 1rem
</style>