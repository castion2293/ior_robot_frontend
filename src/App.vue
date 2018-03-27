<template>
  <v-app>
    <v-toolbar
      app
      color="blue lighten-3"
      dark
      :clipped-left="clipped"
      fixed
    >
      <v-toolbar-side-icon v-show="userIsAuthenticated" @click.stop="toggleDraw"></v-toolbar-side-icon>
      <v-btn icon v-show="userIsAuthenticated" @click.stop="toggleMiniVariant" class="hidden-xs-only">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title><strong>羅博特科技</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-show="!userIsAuthenticated"  class="hidden-xs-only">
        <v-btn flat @click="dialog = !dialog">
          <v-icon left dark>exit_to_app</v-icon>
          <b class="subheading"><strong>登入</strong></b>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-title v-show="userIsAuthenticated" class="">
          <v-list-tile-avatar class="mr-1">
              <img :src="user.photo" />
          </v-list-tile-avatar>
          <span class="hidden-xs-only">{{ user.name }}</span>
          <v-menu offset-y class="hidden-xs-only">
              <v-btn icon slot="activator" dark>
                  <v-icon>keyboard_arrow_down</v-icon>
              </v-btn>
              <v-list>`
                  <v-list-tile @click="" to="/dashboard/settings/userBasic">
                      <v-icon class="mr-3" color="blue lighten-3">person</v-icon>
                      <v-list-tile-title class="mr-3"><strong>基本設定</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
              <v-list>
                  <v-list-tile @click="" to="/dashboard/settings/userProducts">
                      <v-icon class="mr-3" color="blue lighten-3">kitchen</v-icon>
                      <v-list-tile-title class="mr-3"><strong>產品設定</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
              <v-list>
                  <v-list-tile @click="" to="/dashboard/settings/userNotication">
                      <v-icon class="mr-3" color="blue lighten-3">notifications</v-icon>
                      <v-list-tile-title class="mr-3"><strong>警報設定</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
              <v-list>
                  <v-list-tile @click="" to="/dashboard/settings/userLikes">
                      <v-icon class="mr-3" color="blue lighten-3">card_giftcard</v-icon>
                      <v-list-tile-title class="mr-3"><strong>喜好設定</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
              <v-list>
                  <v-list-tile @click="logout">
                      <v-icon class="mr-3" color="blue lighten-3">keyboard_tab</v-icon>
                      <v-list-tile-title class="mr-3"><strong>登出</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
          </v-menu>
      </v-toolbar-title>

      <v-menu bottom left class="hidden-sm-and-up">
        <v-btn icon slot="activator" dark>
            <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile v-show="!userIsAuthenticated" @click="dialog = !dialog">
                <v-icon class="mr-3" color="blue lighten-3">exit_to_app</v-icon>
                <v-list-tile-title class="mr-3 grey--text text--darken-1"><strong>登入</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="" class="pt-1 pb-1">
                <v-icon class="mr-4" color="blue lighten-3">person</v-icon>
                <v-list-tile-title class="grey--text text--darken-1"><strong>基本設定</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="" class="pt-1 pb-1">
                <v-icon class="mr-4" color="blue lighten-3">notifications</v-icon>
                <v-list-tile-title class="grey--text text--darken-1"><strong>警報設定</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="" class="pt-1 pb-1">
                <v-icon class="mr-4" color="blue lighten-3">card_giftcard</v-icon>
                <v-list-tile-title class="grey--text text--darken-1"><strong>喜好設定</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="logout" class="pt-1 pb-1">
                <v-icon class="mr-4" color="blue lighten-3">keyboard_tab</v-icon>
                <v-list-tile-title class="grey--text text--darken-1"><strong>登出</strong></v-list-tile-title>
            </v-list-tile>
        </v-list>
      </v-menu>


      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
            <v-card-media
                    class="white--text"
                    height="200px"
                    src="https://s3-ap-northeast-1.amazonaws.com/iot-robot-front-pics/web_pics/iot_model.jpg"
            >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline"><strong>使用者登入</strong></span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-media>
          <!--<v-card-title>-->
            <!--<span class="headline text-xs-center"><strong>使用者登入</strong></span>-->
          <!--</v-card-title>-->
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="電子郵件" required v-model="email"></v-text-field>
                </v-flex>
              </v-layout>
              <v-flex xs12>
                <v-text-field label="密碼" type="password" required v-model="password"></v-text-field>
              </v-flex>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false"><strong>取消</strong></v-btn>
            <v-btn color="blue darken-1" flat @click.native="login"><strong>登入</strong></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="errorMessage" persistent max-width="500px">
        <v-card>
            <v-alert color="error" icon="warning" value="true">
                {{ error }}
            </v-alert>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" flat @click.native="dismissError">
                    <v-icon>cancel</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

      <v-footer height="auto" class="blue lighten-3">
          <v-container
                  fluid
                  style="min-height: 0;"
                  grid-list-lg
          >
              <v-layout row wrap>
                  <v-flex xs11 offset-xs1 class="mt-5 mb-3">
                      <span class="display-1 white--text hidden-xs-only">
                          羅博特科技有限公司 Robotech Co.,Ltd.
                      </span>
                      <span class="headline white--text hidden-sm-and-up">
                          羅博特科技有限公司 Robotech Co.,Ltd.
                      </span>
                  </v-flex>

                  <v-flex xs12 sm12 md4>
                      <v-list class="transparent" dark>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">phone</v-icon>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                  <v-list-tile-title>
                                      <span class="hidden-xs-only">總公司聯絡電話:</span> 04-2358 2929 （代表號）
                                  </v-list-tile-title>
                              </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">place</v-icon>
                              </v-list-tile-action>

                              <p class="pt-3">台中巿407西屯區工業區一路98巷7弄60號</p>

                          </v-list-tile>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">email</v-icon>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                  <v-list-tile-title>service@robot-tech.com.tw</v-list-tile-title>
                              </v-list-tile-content>
                          </v-list-tile>
                      </v-list>
                  </v-flex>
                  <v-flex xs12 sm12 md4>
                      <v-list class="transparent" dark>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">place</v-icon>
                              </v-list-tile-action>

                              <p class="pt-3">南辦事處/訓練中心：台南巿新巿區中華路49號</p>

                          </v-list-tile>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">place</v-icon>
                              </v-list-tile-action>

                              <p class="pt-3">遠東科技大學自動化控制系A24系統監控研究室</p>

                          </v-list-tile>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">phone</v-icon>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                  <v-list-tile-title><span class="hidden-xs-only">南區營業電話 ：</span> 06-355 1958</v-list-tile-title>
                              </v-list-tile-content>
                          </v-list-tile>
                      </v-list>
                  </v-flex>
                  <v-flex xs12 sm12 md4>
                      <v-list class="transparent" dark>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">place</v-icon>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                  <v-list-tile-title><span class="hidden-xs-only">北區聯絡處：</span> 艾博特科技服務股份有限公司</v-list-tile-title>
                              </v-list-tile-content>
                          </v-list-tile>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">place</v-icon>
                              </v-list-tile-action>

                              <p class="pt-3">台北市10456中山區長安東路二段52號3樓</p>

                          </v-list-tile>
                          <v-list-tile>
                              <v-list-tile-action>
                                  <v-icon class="white--text">phone</v-icon>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                  <v-list-tile-title><span class="hidden-xs-only">北區聯絡電話 :</span> 02-2521-6731</v-list-tile-title>
                              </v-list-tile-content>
                          </v-list-tile>
                      </v-list>
                  </v-flex>

                  <v-flex xs12 py-3 text-xs-center white--text class="mt-2">
                      <strong>Copyright © 2018 Robotech. All Rights Reserved</strong>
                  </v-flex>
              </v-layout>
          </v-container>
      </v-footer>

  </v-app>
</template>

<script>
import { mapGetters, mapMutations, mapActions  } from 'vuex'

export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
      rightDrawer: false,
      dialog: false,
      email: '',
      password: '',
    }
  },
  name: 'App',
  mounted ()  {
      this.$store.dispatch('checkUserStatus')
  },
  computed: {
      ...mapGetters([
          'user',
          'miniVariant',
          'error'
      ]),
      userIsAuthenticated () {
          return this.user.token !== null && this.user.token !== 'undefined' && this.user.token !== ''
      },
      errorMessage () {
          return this.error !== null && this.error !== 'undefined'
      },
  },
  methods: {
      ...mapMutations([
          'toggleDrawer',
          'toggleminiVariant'
      ]),
      ...mapActions([
          'signUserIn',
          'signUserOut',
          'clearError'
      ]),
      login () {
          let data = {
              email: this.email,
              password: this.password
          }

          this.signUserIn(data)

          this.dialog = !this.dialog
      },
      logout () {
          this.signUserOut()
      },
      toggleDraw () {
          this.toggleDrawer()
      },
      toggleMiniVariant () {
          this.toggleminiVariant()
      },
      dismissError () {
          this.clearError()
      },
  }
}
</script>