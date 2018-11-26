import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import stations from '../components/stations/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/stations',
      component: stations
    }
  ]
})
