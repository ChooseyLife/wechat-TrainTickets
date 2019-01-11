import Vue from 'vue'
import Router from 'vue-router'

import index from '../view/index'
import stationsView from '../components/stationsView/index'

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
          path: '/index/:id',
          component: stationsView
        }
      ]
    }
  ]
})
