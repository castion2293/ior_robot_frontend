<template>
    <v-app>
        <loader v-if="loading"></loader>

      <!--<h1>{{ items }}</h1>-->

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-card color="red lighten-2" class="white--text">
                <v-card-title primary-title>
                    <div class="headline"><strong>ALARM 歷史列表</strong></div>
                </v-card-title>
            </v-card>
            <v-card class="white">
                <v-card-title>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3 offset-md9>
                            <v-text-field
                                    append-icon="search"
                                    label="Search"
                                    single-line
                                    hide-details
                                    v-model="search"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-card-title>
                <v-container
                        fluid
                        style="min-height: 0;"
                        grid-list-lg
                >
                    <v-data-table
                        v-bind:headers="headers"
                        v-bind:items="items"
                        v-bind:search="search"
                        v-model="selected"
                        item-key="id"
                        select-all
                        class="elevation-1"
                >
                    <template slot="headerCell" slot-scope="props">
                        <v-tooltip bottom>
                            <span slot="activator">
                              {{ props.header.text }}
                            </span>
                            <span>
                              {{ props.header.text }}
                            </span>
                        </v-tooltip>
                    </template>

                    <template slot="items" slot-scope="props">
                        <td>
                            <v-checkbox
                                    primary
                                    hide-details
                                    v-model="props.selected"
                            ></v-checkbox>
                        </td>
                        <td style="cursor:pointer;" @click="alarmDetailed(props.item.id, props.item.code)">
                            {{ props.item.my_name }}
                        </td>
                        <td class="text-xs-right">{{ props.item.code }}</td>
                        <td class="text-xs-right">{{ props.item.date.toLocaleDateString() }}</td>
                        <td class="text-xs-right">{{ props.item.time }}</td>
                        <td class="text-xs-right">{{ props.item.id }}</td>
                    </template>
                </v-data-table>
                </v-container>
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
        name: "alarm-history",
        props: ['product_id'],
        components: {
            drawer,
            loader
        },
        data () {
            return {
                search: '',
                selected: [],
                headers: [
                    {
                        text: 'AlARM NAME',
                        align: 'left',
                        sortable: false,

                    },
                    { text: 'AlARM CODE'},
                    { text: 'ALARM DATE'},
                    { text: 'ALARM TIME'},
                    { text: 'ALARM ID'},
                ],
                // items: [
                //     {
                //         value: false,
                //         id: '88274',
                //         code: '008-016',
                //         date: new Date('2018-02-29'),
                //         time: '14:14:30',
                //         my_name: 'emergency1'
                //     },
                //     {
                //         value: false,
                //         id: '88273',
                //         code: '008-014',
                //         date: new Date('2018-01-29'),
                //         time: '14:14:30',
                //         my_name: 'emergency2'
                //     },
                //     {
                //         value: false,
                //         id: '88275',
                //         code: '008-015',
                //         date: new Date('2018-02-14'),
                //         time: '14:14:33',
                //         my_name: 'emergency1'
                //     },
                // ]
            }
        },
        computed: {
            ...mapGetters([
                'alarms',
                'loading',

            ]),
            items () {
                return  _.map(this.alarms, alarm =>{
                    return {
                        value: false,
                        my_name: alarm.ALARM_NAME,
                        code: alarm.ALARM_CODE,
                        date: new Date(alarm.ALARM_DATE),
                        time: alarm.ALARM_TIME,
                        id: alarm.id
                    }
                })
            }
        },
        mounted () {
            this.$store.dispatch('getAlarms', this.product_id)
        },
        methods: {
            alarmDetailed (id, code) {
                this.$router.push(`/dashboard/products/alarm/alarmDetailed/${id}/${code}`)
            }
        }
    }
</script>

<style scoped>

</style>
