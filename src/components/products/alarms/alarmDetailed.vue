<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                style="min-height: 0;"
                grid-list-lg
        >
            <v-card class="white">
                <v-card color="green lighten-2" class="white--text">
                    <v-card-title primary-title>
                        <div class="headline hidden-xs-only"><strong>ALARM 解決方案 ({{ alarm.ALARM_CODE }})</strong></div>
                        <div class="subheading hidden-sm-and-up"><strong>ALARM 解決方案 ({{ alarm.ALARM_CODE }})</strong></div>
                    </v-card-title>
                </v-card>
                <v-card height="400px">
                    <div class="headline text-xs-center pa-5 hidden-xs-only" style="overflow-y: scroll; height:300px;">
                        <strong class="grey--text text--darken-1">{{ e1 }}</strong>
                    </div>
                    <div class="subheading text-xs-center pa-5 hidden-sm-and-up" style="overflow-y: scroll; height:300px;">
                        <strong class="grey--text text--darken-1">{{ e1 }}</strong>
                    </div>
                    <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent">
                        <v-btn flat color="green lighten-2" :value="description">
                            <span><strong>內容</strong></span>
                            <v-icon>assignment</v-icon>
                        </v-btn>
                        <v-btn flat color="green lighten-2" :value="cause">
                            <span><strong>原因</strong></span>
                            <v-icon>bug_report</v-icon>
                        </v-btn>
                        <v-btn flat color="green lighten-2" :value="remedy">
                            <span><strong>對策</strong></span>
                            <v-icon>vpn_key</v-icon>
                        </v-btn>
                        <v-btn flat color="green lighten-2" :value="remarks">
                            <span><strong>備註</strong></span>
                            <v-icon>card_membership</v-icon>
                        </v-btn>
                    </v-bottom-nav>
                </v-card>
            </v-card>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "alarm-detailed",
        props: ['id', 'code'],
        data () {
            return {
                e1: '',
            }
        },
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'alarm',
                'loading',
            ]),
            description () {
                return '內容描述:' + this.alarm.description
            },
            cause () {
                return '導致原因: ' + this.alarm.cause
            },
            remedy () {
                return '處理方式: ' + this.alarm.remedy
            },
            remarks () {
                return '備註: ' + this.alarm.remarks
            },
            // e1 () {
            //   return this.description
            // }
        },
        mounted () {
            let payload = {
                id: this.id,
                code: this.code
            }

            this.$store.dispatch('getAlarm', payload)

            this.e1 = '選擇內容、原因及對策'
        }
    }
</script>

<style scoped>

</style>
