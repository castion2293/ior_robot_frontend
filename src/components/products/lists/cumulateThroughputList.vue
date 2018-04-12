<template>
    <v-app>
        <v-card-title>
            <form :action="`${host}/cumulatethroughput/export/pdf`" method="post" enctype="multipart/form-data">
                <input type="hidden" name="product_id" :value="product_id">
                <input type="hidden" name="interval" :value="`${startDate}/${endDate}`">
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
            <form :action="`${host}/cumulatethroughput/export/excel`" method="post" enctype="multipart/form-data">
                <input type="hidden" name="product_id" :value="product_id">
                <input type="hidden" name="interval" :value="`${startDate}/${endDate}`">
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
                    <td style="cursor:pointer;">
                        {{ props.item.date.toLocaleDateString() }}
                    </td>
                    <td>{{ props.item.ok }}</td>
                    <td>{{ props.item.ng }}</td>
                </template>
            </v-data-table>
        </v-container>
    </v-app>
</template>

<script>
    import { mapGetters} from 'vuex'

    export default {
        name: "cumulateThroughputList",
        props: ['product_id', 'startDate', 'endDate'],
        data () {
            return {
                search: '',
                selected: [],
                headers: [
                    { text: '日期', align: 'left', sortable: false },
                    { text: 'OK品', align: 'left', sortable: false },
                    { text: 'NG品', align: 'left', sortable: false },
                ],
                row_per_page: [10, 25, 50, { text: "All", value: -1 }],
                myOrder: 'desc',
                e: 'latest',
                host: host
            }
        },
        computed: {
            ...mapGetters([
                'Cumulate_Throughput',
                'user'
            ]),
            items () {
                let date_ok = _.map(this.Cumulate_Throughput.items_ok, item => {
                    return item.date
                })

                let date_ng = _.map(this.Cumulate_Throughput.items_ng, item => {
                    return item.date
                })

                let dates = _.union(date_ok, date_ng)

                let throughput_group =  _.map(dates, date =>{
                    return {
                        value: false,
                        date: new Date(date),
                        ok: this.findOKNumber(this.Cumulate_Throughput.items_ok, date),
                        ng: this.findNGNumber(this.Cumulate_Throughput.items_ng, date),
                    }
                })

                return this.order(throughput_group)
            },
            token () {
                return 'Bearer ' + localStorage.getItem('token')
            }
        },
        methods: {
            order (group) {
                if (this.myOrder === 'desc') {
                    return _.orderBy(group, ['date'], ['desc'])
                }
                return _.orderBy(group, ['date'], ['asc'])
            },
            findOKNumber (items, date) {
                let foo = _.find(items, function (ok) {
                    return ok.date === date
                })

                if (Boolean(foo)) {
                    return foo.OK_Throughput
                } else {
                    return 0
                }
            },
            findNGNumber (items, date) {
                let foo = _.find(this.Cumulate_Throughput.items_ng, function (ng) {
                    return ng.date === date
                })

                if (Boolean(foo)) {
                    return foo.NG_Throughput
                } else {
                    return 0
                }
            },
        },
    }
</script>

<style scoped>

</style>