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
              <v-list>
                  <v-list-tile @click="">
                      <v-icon class="mr-3" color="blue lighten-3">person</v-icon>
                      <v-list-tile-title class="mr-3"><strong>基本設定</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
              <v-list>
                  <v-list-tile @click="">
                      <v-icon class="mr-3" color="blue lighten-3">notifications</v-icon>
                      <v-list-tile-title class="mr-3"><strong>警報設定</strong></v-list-tile-title>
                  </v-list-tile>
              </v-list>
              <v-list>
                  <v-list-tile @click="">
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
                <v-list-tile-title class="mr-3"><strong>登入</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="">
                <v-icon class="mr-4" color="blue lighten-3">person</v-icon>
                <v-list-tile-title><strong>基本設定</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="">
                <v-icon class="mr-4" color="blue lighten-3">notifications</v-icon>
                <v-list-tile-title><strong>警報設定</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="">
                <v-icon class="mr-4" color="blue lighten-3">card_giftcard</v-icon>
                <v-list-tile-title><strong>喜好設定</strong></v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-show="userIsAuthenticated" @click="logout">
                <v-icon class="mr-4" color="blue lighten-3">keyboard_tab</v-icon>
                <v-list-tile-title><strong>登出</strong></v-list-tile-title>
            </v-list-tile>
        </v-list>
      </v-menu>


      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline text-xs-center"><strong>使用者登入</strong></span>
          </v-card-title>
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
            <v-btn color="blue darken-1" flat @click.native="dialog = false">取消</v-btn>
            <v-btn color="blue darken-1" flat @click.native="login">登入</v-btn>
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
    <!--<v-navigation-drawer-->
      <!--temporary-->
      <!--:right="right"-->
      <!--v-model="rightDrawer"-->
      <!--fixed-->
      <!--app-->
    <!--&gt;-->
      <!--<v-list>-->
        <!--<v-list-tile @click="right = !right">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>compare_arrows</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<v-footer :fixed="fixed" app>-->
      <!--<v-layout row wrap align-center>-->
        <!--<v-flex xs12>-->
          <!--<div class="white&#45;&#45;text ml-3">-->
            <!--Made with-->
            <!--<v-icon class="red&#45;&#45;text">favorite</v-icon>-->
            <!--by <a class="white&#45;&#45;text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>-->
            <!--and <a class="white&#45;&#45;text" href="https://github.com/vwxyzjn">Costa Huang</a>-->
          <!--</div>-->
        <!--</v-flex>-->
      <!--</v-layout>-->
    <!--</v-footer>-->
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
      }
  }
}
</script>