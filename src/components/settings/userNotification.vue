<template>
    <v-app>
        <loader v-if="loading"></loader>
        <sucessSnackbar></sucessSnackbar>
        <failureSnackbar></failureSnackbar>

        <v-container
                text-xs-center
                style="min-height: 0;"
                grid-list-lg
                class="mt-3"
        >
            <v-layout row wrap>
                <v-flex xs12 sm12 md6 offset-md3>
                    <v-card dark color="red lighten-2">
                        <v-card-title primary-title class="pt-1 pb-0">
                            <div class="headline"><strong>警報設定</strong></div>
                            <v-spacer></v-spacer>
                            <v-layout row wrap>
                                <v-flex xs8 sm4 offset-sm4>
                                    <div class="headline pt-3"><strong>啟動</strong></div>
                                </v-flex>
                                <v-flex xs4>
                                    <v-switch :label="(alarm.enable)?`ON`:`OFF`" v-model="alarm.enable" class="pt-3 mb-0" @change="enableChange"></v-switch>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                    </v-card>
                    <v-card-text class="grey lighten-2">
                        <v-container
                                fluid
                                style="min-height: 0;"
                                grid-list-lg
                        >
                            <v-layout row wrap>
                                <v-flex xs9 sm10>
                                    <div class="subheading pt-3 grey--text text--darken-2"><strong>Level 8 (警報發生即斷電停止)</strong></div>
                                </v-flex>
                                <v-flex xs3 sm2>
                                    <v-switch :label="(alarm.level_8)?`ON`:`OFF`" v-model="alarm.level_8" class="pt-3 mb-0" ></v-switch>
                                </v-flex>
                                <v-flex xs9 sm10>
                                    <div class="subheading pt-3 grey--text text--darken-2"><strong>Level 4 (警報發生即停止運作)</strong></div>
                                </v-flex>
                                <v-flex xs3 sm2>
                                    <v-switch :label="(alarm.level_4)?`ON`:`OFF`" v-model="alarm.level_4" class="pt-3 mb-0" ></v-switch>
                                </v-flex>
                                <v-flex xs9 sm10>
                                    <div class="subheading pt-3 grey--text text--darken-2"><strong>Level 2 (程式錯誤時發生)</strong></div>
                                </v-flex>
                                <v-flex xs3 sm2>
                                    <v-switch :label="(alarm.level_2)?`ON`:`OFF`" v-model="alarm.level_2" class="pt-3 mb-0" ></v-switch>
                                </v-flex>
                                <v-flex xs9 sm10>
                                    <div class="subheading pt-3 grey--text text--darken-2"><strong>Level 1 (警報發生不停止運作 只顯示錯誤訊息)</strong></div>
                                </v-flex>
                                <v-flex xs3 sm2>
                                    <v-switch :label="(alarm.level_1)?`ON`:`OFF`" v-model="alarm.level_1" class="pt-3 mb-0" ></v-switch>
                                </v-flex>
                            </v-layout>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        @click.prevent="resetAlarm"
                                        color="primary"
                                >
                                    確認
                                </v-btn>
                            </v-card-actions>
                        </v-container>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>



        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../drawer'
    import loader from '../loader'
    import sucessSnackbar from '../successSnackbar'
    import failureSnackbar from '../failureSnackbar'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "user-notication",
        data () {
            return {
                alarm: ''
            }
        },
        components: {
            drawer,
            loader,
            sucessSnackbar,
            failureSnackbar
        },
        computed: {
            ...mapGetters([
                'loading',
                'alarmSetting',
            ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)
            this.$store.dispatch('getAlarmSetting', true)

            setTimeout(() => {
                this.alarm = this.alarmSetting
            }, 2000)
        },
        methods: {
            ...mapActions([
                'resetAlarmSetting'
            ]),
            enableChange () {
                this.alarm.level_1 = this.alarm.enable
                this.alarm.level_2 = this.alarm.enable
                this.alarm.level_4 = this.alarm.enable
                this.alarm.level_8= this.alarm.enable
            },
            resetAlarm () {
                this.resetAlarmSetting(this.alarm)
            }
        }
    }
</script>

<style scoped>

</style>