import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclik from 'fastclick'

import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastclik.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
