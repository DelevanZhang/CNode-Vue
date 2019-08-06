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
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.filter('getTimeDiff',function(value){
  var oldDate = new Date(value)
  var newDate = new Date()
  var diffDate = (newDate - oldDate)/1000
  if(parseInt(diffDate)< 60){
    return parseInt(diffDate)+` 秒前`
  } else if(diffDate >60 && diffDate<3600){
    return parseInt(diffDate/60) +` 分钟前`
  }
  else if(diffDate >3600 && diffDate<3600*24){
    return parseInt(diffDate/(3600))+` 小时前`
  }else if(diffDate >3600*24 && diffDate<3600*24*30){
    return parseInt(diffDate/(3600*24))+` 天前`
  }
  else if(diffDate >3600*24*30 && diffDate<3600*24*30*12){
    return parseInt(diffDate/(3600*24*30))+` 月前`
  }
  else if(diffDate >3600*24*30*12){
    return parseInt(diffDate/(3600*24*30*12))+` 年前`
  }
})