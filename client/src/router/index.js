import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import stationsList from '../components/stationsList/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: ':id',
          component: stationsList
        }
      ]
    }
  ]
})
