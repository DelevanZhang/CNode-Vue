<template>
  <div class="container">
    <div class="main">
      <ul>
        <li class="navbar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>回答</span>
          <span>招聘</span>
          <span>客户端测试</span>
        </li>
        <li v-for="item in mainData" :key="item.id">
          <img :src="item.author.avatar_url" />
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
          <router-link :to="{name:'airticle',params:{useId:item.id}}" class="link_to_airticle">
            <div class="title">{{item.title}}</div>
          </router-link>
          <div class="last_reply_at">{{item.last_reply_at | getTimeDiff}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainData: []
    };
  },
  beforeMount: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var url = "https://cnodejs.org/api/v1/topics";
      this.axios
        .get(url, {
          params: {}
        })
        .then(res => {
          this.mainData = res.data.data;
          var date = res.data.data[0].last_reply_at;
          var f = new Date(date).getTime();
        })
        .catch(err => {});
    }
  },
  computed: {}
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
.main {
  width: 1400px;
  height: 100%;
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

.navbar > span {
  padding: 0 13px;
  color: #80bd01;
  font-size: 14px;
}
img {
  width: 30px;
  height: 30px;
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
.link_to_airticle:link{
  color:#333333;
}
.link_to_airticle:visited {
  color:#888888;
}
.link_to_airticle:hover {
  text-decoration:underline;
  /* color:#888; */
}
.link_to_airticle:active {
  color:red;
}
</style>
