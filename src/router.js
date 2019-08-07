import Vue from 'vue'
import Router from 'vue-router'
import PostLists from './components/PostLists'
import Airticle from './components/Airticle'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'post_list',
      component: PostLists,
    },
    {
      path:'/airticle/:useId',
      name:'airticle',
      component:Airticle
    }
  ]
})
