<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 13:52:13
 * @LastEditTime: 2019-08-10 16:15:43
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" />
    </div>
    <div class="main" v-else>
      <Navbar :tab="this.tab"></Navbar>
      <ul>
        <li v-for="item in mainData" :key="item.id">
          <router-link :to="{name:'user',params:{loginname:item.author.loginname}}">
            <img :src="item.author.avatar_url" />
          </router-link>
          <div class="statistics">
            <span class="reply_count">{{item.reply_count}}</span>
            <span class="count_sepertor">/</span>
            <span class="visit_count">{{item.visit_count}}</span>
          </div>
          <div class="airticleState">
            <span
              :class="{ 'top': item.top === true,good: item.good === true, ask:item.tab ==='ask',share: item.tab === 'share', 
              job:(item.tab != 'ask' && item.tab != 'share')}"
            >{{item | getAirticleStates}}</span>
          </div>
          <router-link
            :to="{name:'airticle',params:{useId:item.id,loginname:item.author.loginname}}"
            class="link_to_airticle"
          >
            <div class="title">{{item.title}}</div>
          </router-link>
          <div class="last_reply_at">{{item.last_reply_at | getTimeDiff}}</div>
        </li>
      </ul>
      <PagingDevice @handlePage="jumpPage"></PagingDevice>
    </div>
  </div>
</template>

<script>
import PagingDevice from "./PagingDevice";
import Navbar from "./NavBar";
export default {
  data() {
    return {
      mainData: [],
      loading: true,
      page: 1,
      tab:'all'
    };
  },
  components: {
    PagingDevice,
    Navbar: Navbar
  },
  beforeMount: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var url = `https://cnodejs.org/api/v1/topics`;
      this.axios
        .get(url, { params: { limit: 16, page: this.page } })
        .then(res => {
          this.mainData = res.data.data;
          this.loading = false;
        })
        .catch(err => {});
    },
    jumpPage: function(value) {
      this.page = value + 1;
      this.getData();
    }
  },
  watch:{
    '$route'(to,from){
      this.tab='all'
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background-color: #e1e1e1;
}
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
}
.main {
  width: 1400px;
  background-color: #f5f5f5;
  margin: 0 auto;
}
li {
  list-style: none;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  position: relative;
}

img {
  width: 30px;
  height: 30px;
  margin-left: 12px;
}
.statistics {
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
span.reply_count {
  font-size: 14px;
  color: #9e78c0;
}
span.visit_count {
  font-size: 12px;
  color: #b4b4b4;
}
span.count_sepertor {
  font-size: 10px;
}
div.airticleState {
  height: 30px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
span.share,
span.ask {
  background-color: #e5e5e5;
  padding: 2px 4px;
  font-size: 12px;
  color: #999999;
}

span.good,
span.top,
span.job {
  background-color: #80bd01;
  padding: 2px 4px;
  font-size: 12px;
  color: white;
}

div.title {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
div.last_reply_at {
  height: 30px;
  line-height: 30px;
  position: absolute;
  right: 16px;
  color: #778087;
  font-size: 12px;
}
.link_to_airticle {
  text-decoration: none;
}
.link_to_airticle:link {
  color: #333333;
}
.link_to_airticle:visited {
  color: #888888;
}
.link_to_airticle:hover {
  text-decoration: underline;
  /* color:#888; */
}
.link_to_airticle:active {
  color: red;
}
</style>
