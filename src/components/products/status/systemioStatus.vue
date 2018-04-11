<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
          style="min-height: 0;"
          grid-list-lg
        >
            <v-layout row wrap>
              <v-flex x12 sm12 md6>
                <v-card class="grey lighten-2">
                  <v-card color="red lighten-1" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline"><strong>System Input</strong></div>
                    </v-card-title>
                  </v-card>
                  <v-card-text>
                    <v-container
                      fluid
                      style="min-height: 0;"
                      grid-list-lg
                    >
                      <v-layout row wrap>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[0]" class="light-blue darken-1 white--text text-xs-center">STROBE</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">STROBE</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[1]" class="light-blue darken-1 white--text text-xs-center">PRG_RST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">PRG_RST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[2]" class="light-blue darken-1 white--text text-xs-center">STP_RST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">STP_RST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[3]" class="light-blue darken-1 white--text text-xs-center">CYC_RST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">CYC_RST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[4]" class="light-blue darken-1 white--text text-xs-center">DO_RST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">DO_RST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[5]" class="light-blue darken-1 white--text text-xs-center">ALM_RST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">ALM_RST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[6]" class="light-blue darken-1 white--text text-xs-center">RUN</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">RUN</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[7]" class="light-blue darken-1 white--text text-xs-center">SVON</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">SVON</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[8]" class="light-blue darken-1 white--text text-xs-center">STOP</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">STOP</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[9]" class="light-blue darken-1 white--text text-xs-center">CYCLE</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">CYCLE</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[10]" class="light-blue darken-1 white--text text-xs-center">LOW_SPD</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">LOW_SPD</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[11]" class="light-blue darken-1 white--text text-xs-center">BREAK</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">BREAK</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DIN_249_264[12]" class="light-blue darken-1 white--text text-xs-center">SVOFF</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">SVOFF</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

                <v-card class="grey lighten-2 mt-3">
                  <v-card color="amber darken-1" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline"><strong>DIN 1~16</strong></div>
                    </v-card-title>
                  </v-card>
                  <v-card-text>
                    <v-container
                      fluid
                      style="min-height: 0;"
                      grid-list-lg
                    >
                      <v-layout row wrap>
                        <v-flex xs3 sm2 md2 v-for="(input, index) in total.DIN_1_16" :key="`input_${index + 1}`">
                          <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 1 }}</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 1 }}</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

                <v-card class="grey lighten-2 mt-3">
                  <v-card color="blue darken-1" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline"><strong>Hand Input</strong></div>
                    </v-card-title>
                  </v-card>
                  <v-card-text>
                    <v-container
                      fluid
                      style="min-height: 0;"
                      grid-list-lg
                    >
                      <v-layout row wrap>
                        <v-flex xs3 sm2 md2 v-for="(input, index) in hand_input" :key="`hand_input_${index + 201}`">
                          <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 201 }}</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 201 }}</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

              </v-flex>

              <v-flex x12 sm12 md6>
                <v-card class="grey lighten-2">
                  <v-card color="orange lighten-1" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline"><strong>System Output</strong></div>
                    </v-card-title>
                  </v-card>
                  <v-card-text>
                    <v-container
                      fluid
                      style="min-height: 0;"
                      grid-list-lg
                    >
                      <v-layout row wrap>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[0]" class="light-blue darken-1 white--text text-xs-center">EMG_ST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">EMG_ST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[1]" class="light-blue darken-1 white--text text-xs-center">SV_RDY</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">SV_RDY</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[2]" class="light-blue darken-1 white--text text-xs-center">ARK</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">ARK</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[3]" class="light-blue darken-1 white--text text-xs-center">TEACH</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">TEACH</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[4]" class="light-blue darken-1 white--text text-xs-center">INT</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">INT</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[5]" class="light-blue darken-1 white--text text-xs-center">SIG</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">SIG</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[6]" class="light-blue darken-1 white--text text-xs-center">232C</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">232C</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[7]" class="light-blue darken-1 white--text text-xs-center">ETHER</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">ETHER</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[8]" class="light-blue darken-1 white--text text-xs-center">STS_RDY</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">STS_RDY</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[9]" class="light-blue darken-1 white--text text-xs-center">AUT_RUN</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">AUT_RUN</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[10]" class="light-blue darken-1 white--text text-xs-center">CYC_END</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">CYC_END</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[11]" class="light-blue darken-1 white--text text-xs-center">LOW_ST</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">LOW_ST</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[12]" class="light-blue darken-1 white--text text-xs-center">BT_ALM</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">BT_ALM</div>
                        </v-flex>
                        <v-flex xs4 sm3 md3>
                          <div v-if="total.DOUT_249_264[13]" class="light-blue darken-1 white--text text-xs-center">ALARM</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">ALARM</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

                <v-card class="grey lighten-2 mt-3">
                  <v-card color="green lighten-1" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline"><strong>DOUT 1~16</strong></div>
                    </v-card-title>
                  </v-card>
                  <v-card-text>
                    <v-container
                      fluid
                      style="min-height: 0;"
                      grid-list-lg
                    >
                      <v-layout row wrap>
                        <v-flex xs3 sm2 md2 v-for="(output, index) in total.DOUT_1_16" :key="`output_${index + 1}`">
                          <div v-if="output" class="light-blue darken-1 white--text text-xs-center">{{ index + 1 }}</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 1 }}</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

                <v-card class="grey lighten-2 mt-3">
                  <v-card color="teal lighten-1" class="white--text">
                    <v-card-title primary-title>
                      <div class="headline"><strong>Hand Output</strong></div>
                    </v-card-title>
                  </v-card>
                  <v-card-text>
                    <v-container
                      fluid
                      style="min-height: 0;"
                      grid-list-lg
                    >
                      <v-layout row wrap>
                        <v-flex xs3 sm2 md2 v-for="(input, index) in hand_output" :key="`hand_output_${index + 201}`">
                          <div v-if="input" class="light-blue darken-1 white--text text-xs-center">{{ index + 201 }}</div>
                          <div v-else class="grey darken-1  white--text text-xs-center">{{ index + 201 }}</div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>

              </v-flex>
            </v-layout>
        </v-container>

        <drawer></drawer>
    </v-app>
</template>

<script>
    import drawer from '../../drawer'
    import loader from '../../loader'
    import { mapGetters } from 'vuex'

    export default {
        name: "systemio-status",
        props: ['product_id'],
        data () {
            return {
                total: {
                    DIN_1_16: [''],
                    DIN_201_216: [''],
                    DIN_249_264: [''],
                    DOUT_1_16: [''],
                    DOUT_201_216: [''],
                    DOUT_249_264: ['']
                },
                hand_input: {

                },
                hand_output: {

                }
            }
        },
        components: {
          drawer,
          loader
        },
        computed: {
          ...mapGetters([
            'single_total_status',
            'loading'
          ]),
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            this.$store.dispatch('getSingleTotalStatus', this.product_id)

            let channel = this.$pusher.subscribe('dynamoDB');

            channel.bind('Total', (Total_data) => {
                this.refreshTotal(Total_data)
            });

            setTimeout(() => {
                this.total = this.single_total_status
                this.hand_input = this.single_total_status.DIN_201_216.slice(0, 7)
                this.hand_output = this.single_total_status.DOUT_201_216.slice(0, 7)
            }, 3000)
        },
        methods: {
            refreshTotal (data) {
                this.total = data
                this.hand_input = data.DIN_201_216.slice(0, 7)
                this.hand_output = data.DOUT_201_216.slice(0, 7)
            }
        },
        beforeDestroy () {
          clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>
