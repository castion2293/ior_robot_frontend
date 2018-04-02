<template>
    <v-app>
        <v-card-title>
            <form :action="`${host}/monthlythroughput/export/pdf`" method="post" enctype="multipart/form-data">
                <input type="hidden" name="product_id" :value="product_id">
                <input type="hidden" name="monthly" :value="month">
                <v-btn
                        color="blue-grey"
                        class="white--text"
                        type="submit"
                >
                    PDF
                    <v-icon right dark>picture_as_pdf</v-icon>
                </v-btn>
            </form>
            <form :action="`${host}/monthlythroughput/export/excel`" method="post" enctype="multipart/form-data">
                <input type="hidden" name="product_id" :value="product_id">
                <input type="hidden" name="monthly" :value="month">
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
                    <td class="text-xs-right">{{ props.item.ok }}</td>
                    <td class="text-xs-right">{{ props.item.ng }}</td>
                    <td class="text-xs-right">{{ props.item.product_id }}</td>
                </template>
            </v-data-table>
        </v-container>
    </v-app>
</template>

<script>
    import { mapGetters} from 'vuex'

    export default {
        name: "monthlyThroughputList",
        props: ['product_id', 'month'],
        data () {
            return {
                search: '',
                selected: [],
                headers: [
                    {
                        text: '日期',
                        align: 'left',
                        sortable: false,

                    },
                    { text: 'OK品', sortable: false },
                    { text: 'NG品', sortable: false },
                    { text: '產品編號', sortable: false },
                ],
                row_per_page: [10, 25, 50, { text: "All", value: -1 }],
                myOrder: 'desc',
                e: 'latest',
                host: host
            }
        },
        computed: {
            ...mapGetters([
                'Monthly_Throughput',
            ]),
            items () {
                let throughput_group =  _.map(this.Monthly_Throughput.items, throughput =>{
                    return {
                        value: false,
                        date: new Date(throughput.date),
                        ok: throughput.OK_Throughput,
                        ng: throughput.NG_Throughput,
                        product_id: throughput.product_id
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
        },
    }
</script>

<style scoped>

</style>