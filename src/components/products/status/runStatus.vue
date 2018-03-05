<template>
    <v-app>
        <loader v-if="loading"></loader>

        <v-container
                fluid
                style="min-height: 0;"
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12 sm12 md4>
                    <v-tabs fixed centered>
                        <v-card color="teal lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>ROBOT 狀態</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-tabs-bar color="teal lighten-1" dark>
                            <v-tabs-slider color="yellow"></v-tabs-slider>
                            <v-tabs-item :href="'#tab-1-1'">綜合資料</v-tabs-item>
                            <v-tabs-item :href="'#tab-1-2'">資料狀態</v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-items>
                            <v-tabs-content :id="'tab-1-1'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs6 class="text-xs-center">
                                                <span class="subheading text-xs-center">SERVO</span>
                                                <v-btn v-if="product.total.SERVO" fab dark small color="green lighten-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs6 class="text-xs-center">
                                                <span class="subheading text-xs-center">EMG</span>
                                                <v-btn v-if="product.total.EMG" fab dark small color="red darken-2"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3 class="mt-3">
                                                <p class="subheading text-xs-center">COORD</p>
                                            </v-flex>
                                            <v-flex xs9 class="mt-3">
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.COORDINATE }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">RATE</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.RATE }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">MODE</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.MODE }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">HOLD</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.FREEHOLD }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">LINE</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.EXE_LINE }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">TASK</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.total.EXE_TASK }}</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                            <v-tabs-content :id="'tab-1-2'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">TYPE</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.name }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">SERIAL</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.ID }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">MODE</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="body-2 grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.MODE }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">OVRD</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.OVRD }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">LSPEED</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.LSPEED }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">MACHI</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.MACHINE }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">STATUS</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.STATUS }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">FILE</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ product.su.FILE }}</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                        </v-tabs-items>
                    </v-tabs>
                </v-flex>

                <v-flex xs12 sm12 md4>
                    <v-tabs fixed centered>
                        <v-card color="pink lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>ROBOT 座標</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-tabs-bar color="pink lighten-1" dark>
                            <v-tabs-slider color="yellow"></v-tabs-slider>
                            <v-tabs-item :href="'#tab-2-1'">JOINT</v-tabs-item>
                            <v-tabs-item :href="'#tab-2-2'">WORLD</v-tabs-item>
                            <v-tabs-item :href="'#tab-2-3'">WORK</v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-items>
                            <v-tabs-content :id="'tab-2-1'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">1st</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[0] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">2ed</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[1] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">3rd</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[2] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">4th</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[3] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">5th</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[4] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">6th</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[5] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">7st</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[6] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">8st</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.JOINT[7] }}</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                        </v-tabs-items>
                        <v-tabs-items>
                            <v-tabs-content :id="'tab-2-2'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">X</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[0] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">Y</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[1] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">Z</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[2] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">A</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[3] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">B</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[4] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">C</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[5] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center"></p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[6] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center"></p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[7] }}</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                        </v-tabs-items>
                        <v-tabs-items>
                            <v-tabs-content :id="'tab-2-3'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">X</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[0] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">Y</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[1] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">Z</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[2] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">A</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[3] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">B</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[4] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center">C</p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORK[5] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center"></p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[6] }}</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="subheading text-xs-center"></p>
                                            </v-flex>
                                            <v-flex xs9>
                                                <p class="subheading grey darken-4 green--text text-darken-4 text-xs-center">{{ coordinate.WORLD[7] }}</p>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                        </v-tabs-items>
                    </v-tabs>
                </v-flex>

                <v-flex xs12 sm12 md4>
                    <v-tabs fixed centered>
                        <v-card color="amber lighten-1" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline"><strong>ROBOT I/O</strong></div>
                            </v-card-title>
                        </v-card>
                        <v-tabs-bar color="amber lighten-1" dark>
                            <v-tabs-slider color="yellow"></v-tabs-slider>
                            <v-tabs-item :href="'#tab-3-1'">INPUT/OUTPUT</v-tabs-item>
                            <v-tabs-item :href="'#tab-3-2'">HAND</v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-items>
                            <v-tabs-content :id="'tab-3-1'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">感測檢知1</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[0]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">觸發訊號1</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[0]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">感測檢知2</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[1]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">觸發訊號2</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[1]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">感測檢知3</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[2]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">觸發訊號3</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[2]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DIN4</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[3]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DOUT4</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[3]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DIN5</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[4]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DOUT5</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[4]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DIN6</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[5]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DOUT6</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[5]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DIN7</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[6]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DOUT7</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[6]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DIN8</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_1_16[7]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">DOUT8</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_1_16[7]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                            <v-tabs-content :id="'tab-3-2'">
                                <v-card-text class="grey lighten-2">
                                    <v-container
                                            fluid
                                            style="min-height: 0;"
                                            grid-list-lg
                                    >
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">感測檢知4</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[0]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">氣壓缸1</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[0]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">感測檢知5</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[1]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">氣壓缸2</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[1]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HIN3</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[2]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HOUT3</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[2]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HIN4</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[3]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HOUT4</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[3]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HIN5</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[4]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HOUT5</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[4]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HIN6</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[5]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HOUT6</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[5]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HIN7</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[6]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HOUT7</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[6]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HIN8</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DIN_201_216[7]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                            <v-flex xs3>
                                                <p class="body-1 text-xs-center pt-3">HOUT8</p>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-btn v-if="product.total.DOUT_201_216[7]" fab dark small color="light-blue darken-1"></v-btn>
                                                <v-btn v-else fab dark small color="grey lighten-1"></v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-tabs-content>
                        </v-tabs-items>
                    </v-tabs>
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
        name: "run-status",
        props: ['product_id'],
        data () {
            return {
                myTimer: null,
            }
        },
        components: {
            drawer,
            loader
        },
        computed: {
            ...mapGetters([
                'single_su_status',
                'single_total_status',
                'coordinate',
                'loading'
            ]),
            product () {
                return {
                    su: this.single_su_status,
                    total: this.single_total_status
                }
            }
        },
        mounted () {
            this.$store.dispatch('takeLoading', true)

            this.$store.dispatch('getSingleSUStatue', this.product_id)
            this.$store.dispatch('getSingleTotalStatus', this.product_id)
            this.$store.dispatch('getCoordinate', this.product_id)

            this.myTimer = setInterval(
                function() {
                    this.$store.dispatch('getSingleSUStatue', this.product_id)
                    this.$store.dispatch('getSingleTotalStatus', this.product_id)
                    this.$store.dispatch('getCoordinate', this.product_id)
                }.bind(this), intervel)
        },
        methods: {

        },
        beforeDestroy () {
            clearInterval(this.myTimer)
        }
    }
</script>

<style scoped>

</style>
