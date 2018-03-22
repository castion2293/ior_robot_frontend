<template>
    <v-snackbar
            :bottom="y === 'bottom'"
            :right="x === 'right'"
            :multi-line="mode === 'multi-line'"
            :vertical="mode === 'vertical'"
            v-model="tick"
            color="red darken-1"
    >
        <v-icon dark>update</v-icon>
        <v-spacer></v-spacer>
        <strong>資料更新失敗</strong>
    </v-snackbar>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "failureSnackbar",
        data () {
            return {
                //snackbar: true,
                y: 'bottom',
                x: 'right',
                mode: '',
                // timeout: 6000,
            }
        },
        computed: {
            ...mapGetters([
                'failureSnackbar'
            ]),
            tick: {
                get () {
                    return this.failureSnackbar
                },
                set () {

                }
            }
        }
    }
</script>

<style scoped>

</style>