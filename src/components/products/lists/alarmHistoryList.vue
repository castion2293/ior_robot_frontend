<template>
    <v-app>
        <!--<v-card-title>-->
        <!--<v-layout row wrap>-->
        <!--<v-flex xs12 sm6 md3 offset-md9>-->
        <!--<v-text-field-->
        <!--append-icon="search"-->
        <!--label="Search"-->
        <!--single-line-->
        <!--hide-details-->
        <!--v-model="search"-->
        <!--&gt;</v-text-field>-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <!--</v-card-title>-->
        <v-card-title>
            <!--<v-layout row wrap>-->
            <!--<v-flex xs12 sm6 md3 offset-md9>-->
            <form :action="`${host}/alarm/export/pdf`" method="post" enctype="multipart/form-data">
                <!--<input type="hidden" name="csrfToken" :value="token">-->
                <!--<input type="hidden" name="Authorization" :value="token">-->
                <!--<input type="hidden" name="Accept" value="application/json">-->
                <input type="hidden" name="product_id" :value="product_id">
                <input type="hidden" name="user_id" :value="user.id">
                <v-btn
                        color="blue-grey"
                        class="white--text"
                        type="submit"
                >
                    PDF
                    <v-icon right dark>picture_as_pdf</v-icon>
                </v-btn>
            </form>
            <form :action="`${host}/alarm/export/excel`" method="post" enctype="multipart/form-data">
                <!--<input type="hidden" name="csrfToken" :value="token">-->
                <!--<input type="hidden" name="Authorization" :value="token">-->
                <!--<input type="hidden" name="Accept" value="application/json">-->
                <input type="hidden" name="product_id" :value="product_id">
                <input type="hidden" name="user_id" :value="user.id">
                <v-btn
                        color="success"
                        class="white--text"
                        type="submit"
                >
                    EXCEL
                    <v-icon right dark>explicit</v-icon>
                </v-btn>
            </form>

            <v-spacer></v-spacer>
            <v-btn-toggle v-model="e">
                <v-btn flat value="latest" @click="myOrder = 'desc'">
                    <span class="grey--text text--darken-1"><strong>排序: 最近~最久</strong></span>
                </v-btn>
                <v-btn flat value="oldest" @click="myOrder = 'asc'">
                    <span class="grey--text text--darken-1"><strong>排序: 最久~最近</strong></span>
                </v-btn>
            </v-btn-toggle>
            <!--</v-flex>-->
            <!--</v-layout>-->
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
                    :rows-per-page-items="row_per_page"
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
    </v-app>
</template>

<script>
    import { mapGetters} from 'vuex'

    export default {
        name: "alarmHistoryList",
        props: ['product_id'],
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
                    { text: 'AlARM CODE', sortable: false },
                    { text: 'ALARM DATE', sortable: false },
                    { text: 'ALARM TIME', sortable: false },
                    { text: 'ALARM ID', sortable: false },
                ],
                row_per_page: [10, 25, 50, { text: "All", value: -1 }],
                myOrder: 'desc',
                e: 'latest',
                host: host
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
                'user'
            ]),
            items () {
                let alarm_group =  _.map(this.alarms, alarm =>{
                    return {
                        value: false,
                        my_name: alarm.ALARM_NAME,
                        code: alarm.ALARM_CODE,
                        date: new Date(alarm.ALARM_DATE),
                        time: alarm.ALARM_TIME,
                        id: alarm.id
                    }
                })

                return this.order(alarm_group)
            },
            // token () {
            //     return 'Bearer ' + localStorage.getItem('token')
            // }
        },
        methods: {
            alarmDetailed (id, code) {
                this.$router.push(`/dashboard/products/alarm/alarmDetailed/${id}/${code}`)
            },
            order (group) {
                if (this.myOrder === 'desc') {
                    return _.orderBy(group, ['date', 'time'], ['desc', 'desc'])
                }
                return _.orderBy(group, ['date', 'time'], ['asc', 'asc'])

            },
        },
    }
</script>

<style scoped>

</style>