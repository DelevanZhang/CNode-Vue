import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')

/**
 * @description: 通过时间戳返回距离现在多少时间
 * @param {type} 
 * @return: 
 */
Vue.filter('getTimeDiff', function (value) {
  var oldDate = new Date(value)
  var newDate = new Date()
  var diffDate = (newDate - oldDate) / 1000
  if (parseInt(diffDate) < 60) {
    return parseInt(diffDate) + ` 秒前`
  } else if (diffDate > 60 && diffDate < 3600) {
    return parseInt(diffDate / 60) + ` 分钟前`
  } else if (diffDate > 3600 && diffDate < 3600 * 24) {
    return parseInt(diffDate / (3600)) + ` 小时前`
  } else if (diffDate > 3600 * 24 && diffDate < 3600 * 24 * 30) {
    return parseInt(diffDate / (3600 * 24)) + ` 天前`
  } else if (diffDate > 3600 * 24 * 30 && diffDate < 3600 * 24 * 30 * 12) {
    return parseInt(diffDate / (3600 * 24 * 30)) + ` 月前`
  } else if (diffDate > 3600 * 24 * 30 * 12) {
    return parseInt(diffDate / (3600 * 24 * 30 * 12)) + ` 年前`
  }
})

Vue.filter('getAirticleStates', function (value) {
  if (value.top === true) {
    return '置顶'
  } else if (value.good === true) {
    return '精华'
  } else if (value.tab === 'ask') {
    return '问答'
  } else if (value.tab === 'share') {
    return '分享'
  } else {
    return '招聘'
  }
})