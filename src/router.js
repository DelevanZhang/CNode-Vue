import Vue from 'vue'
import Router from 'vue-router'
import PostLists from './components/PostLists'
import Airticle from './components/Airticle'
import SlideBAr from './components/SlideBar.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      components: {
        main:PostLists,
      }
    },
    {
      name: 'airticle',
      path: '/airticle/:useId&name=:loginName',
      components: {
        main: Airticle,
        slidebar: SlideBAr
      }
    }
  ]
})