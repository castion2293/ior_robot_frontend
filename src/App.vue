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
      <v-btn icon v-show="userIsAuthenticated" @click.stop="toggleMiniVariant">
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
      <v-toolbar-items v-show="userIsAuthenticated"  class="hidden-xs-only">
        <v-btn flat @click="logout">
          <v-icon left dark>keyboard_backspace</v-icon>
          <b class="subheading"><strong>登出</strong></b>
        </v-btn>
      </v-toolbar-items>


      <v-btn icon class="hidden-sm-and-up">
        <v-icon>more_vert</v-icon>
      </v-btn>

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
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="login">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <!--<v-btn icon @click.stop="rightDrawer = !rightDrawer">-->
        <!--<v-icon>menu</v-icon>-->
      <!--</v-btn>-->
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
import { mapGetters, mapMutations } from 'vuex'

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
      password: ''
    }
  },
  name: 'App',
  mounted () {

  },
  computed: {
      ...mapGetters([
          'user',
          'miniVariant'
      ]),
      userIsAuthenticated () {
          return this.user !== null && this.user !== undefined
      }
  },
  methods: {
      ...mapMutations([
          'signUserIn',
          'signUserOut',
          'toggleDrawer',
          'toggleminiVariant'
      ]),
      login () {
          let data = {
              email: this.email,
              password: this.password
          }

          this.signUserIn(data)

          this.dialog = !this.dialog

          this.$router.push('/dashboard')
      },
      logout () {
          this.signUserOut()

          this.$router.push('/')

          this.drawer = false
      },
      toggleDraw () {
          this.toggleDrawer()
      },
      toggleMiniVariant () {
          this.toggleminiVariant()
      }
  }
}
</script>