<template>
    <v-snackbar
            :bottom="y === 'bottom'"
            :right="x === 'right'"
            :multi-line="mode === 'multi-line'"
            :vertical="mode === 'vertical'"
            v-model="tick"
            color="green accent-3"
    >
        <v-icon dark>update</v-icon>
        <v-spacer></v-spacer>
        <strong>資料更新成功</strong>
    </v-snackbar>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "successSnackbar",
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
                'successSnackbar'
            ]),
            tick: {
                get () {
                    return this.successSnackbar
                },
                set () {

                }
            }
        }
    }
</script>

<style scoped>

</style>