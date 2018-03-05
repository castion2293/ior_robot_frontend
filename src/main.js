// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import { store } from './store'
import lodash from 'lodash'
import Chart from 'chart.js'

window.axios = axios;

// axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM1ZWFmZDNiYjY3NGY2NGNiNmNiZWU1NDdjMTBkMmUxMGU5MWNjMGZkYzkzZTRhNGQxYTRkODMwZmQzYWExNTFkZTQxMDQ4ZTM5MTNhNTg4In0.eyJhdWQiOiIxIiwianRpIjoiYzVlYWZkM2JiNjc0ZjY0Y2I2Y2JlZTU0N2MxMGQyZTEwZTkxY2MwZmRjOTNlNGE0ZDFhNGQ4MzBmZDNhYTE1MWRlNDEwNDhlMzkxM2E1ODgiLCJpYXQiOjE1MTczODI3ODEsIm5iZiI6MTUxNzM4Mjc4MSwiZXhwIjoxNTQ4OTE4NzgxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mMXzd_-CE-A02DgJdzUgBTyMRix32Fm3A9jDFJd-mygEEc4NVJAT3l03Kr7WH1yJwRhZjJjCSvxX_zjSZenXDfUqN-8PfyJ1YpT91385c12zxYF2uUsRAy6k2F6ON40gsnUc1aTibog5cidpTpc-aihusRK6HljjQbMl3GWgW7QzoVLTG8y2T5LVuEv5U1l3KeyY7bTXk1Zbi61aSc9mU-nFBmH2MF95MmfZ6ah6hZGZYVpDBq-W8mnDUw6TxUn0i4ek-egyAV_eh9PJe7R_v66mK7v8J8fhJsk-UuUM2bMQ1D85WqZwHTLqaYToz5gkF-7YSzopkkC_hi7PniRhqNdi8mQ3x43R2As7mWNJYkOdaLzKFen-jkx7qk5U8vd7pY23MytxwpncbnYYFcEAigkkBymXlXHveEE83iRe5KUYOgPTXh55THYpJmpO4lncxdakfOjoUdv3ANZltm2MfiwI6xNoKutvxdLU7uAUE3SKaB8z7lWgt4u8YtS_tk6hp2l-68hQ73dFxMSKQ4X0rWdDC4oXtnt62TCtTN2p4QXoI6KdqLZiu2Cpixp-3gu1BXXxFAd-fkQM08oTbI59w_IADcMjDLp2pAZKf1-_wRjqvutyB84Ro7ZRGxQbLwceIX2BpvjfB43A9MeY_Z3BYInMHdU6OveeOZ16E-EML2M'
// axios.defaults.headers.common['Accept'] = 'application/json'

window.host = 'http://54.178.200.229/api'
//window.host = 'http://localhost:8000/api'

window.intervel = 1000

Vue.use(Vuetify, { theme: {
  primary: '#64b5f6',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#ee44aa',
  success: '#4CAF50',
  warning: '#FFC107'
}})

window._ = lodash

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
