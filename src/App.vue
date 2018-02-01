<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      color="blue lighten-3"
      dark
      :clipped-left="clipped"
      fixed
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped" class="hidden-xs-only">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title><strong>羅博特科技</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left dark>exit_to_app</v-icon>
          <b class="subheading"><strong>登入</strong></b>
        </v-btn>
      </v-toolbar-items>
      <v-btn icon class="hidden-sm-and-up">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <!--<v-btn icon @click.stop="rightDrawer = !rightDrawer">-->
        <!--<v-icon>menu</v-icon>-->
      <!--</v-btn>-->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  name: 'App'
}
</script>