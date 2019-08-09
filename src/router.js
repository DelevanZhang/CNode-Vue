/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:25:32
 * @LastEditTime: 2019-08-09 14:27:49
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import PostLists from './components/PostLists'
import Airticle from './components/Airticle'
import SlideBAr from './components/SlideBar.vue'
import UserInfo from './components/UserInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name:'postList',
      components: {
        main:PostLists,
      }
    },
    {
      path:'/user/:loginname',
      name:'user',
      components:{
        main:UserInfo,
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