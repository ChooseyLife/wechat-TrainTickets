import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './assets/stylus/index.styl'
import 'amfe-flexible/index.min'
// Vue.config.productionTip = false

fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
