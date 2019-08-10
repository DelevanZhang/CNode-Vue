<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 09:24:39
 * @LastEditTime: 2019-08-10 16:26:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="usrContainer">
    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" alt />
    </div>
    <div class="user" v-else>
      <div class="user-top">
        <div class="title"></div>
        <div class="info">
          <img :src="userInfoData.avatar_url" />
          <span>{{userInfoData.loginname}}</span>
        </div>
        <div class="integral">{{userInfoData.score}}积分</div>
        <div class="registe">注册时间{{userInfoData.create_at|getTimeDiff}}</div>
      </div>
      <div class="recent_topics">
        <div class="recent_topics_title">最近创建的话题</div>
        <ul>
          <li v-for="topic in userInfoData.recent_topics" :key="topic.id">
            <router-link
              :to="{name:'airticle',params:{useId:topic.id,loginname:topic.author.loginname}}"
            >{{topic.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="recent_topics">
        <div class="recent_topics_title">最近参与的话题</div>
        <ul>
          <li v-for="reply in userInfoData.recent_replies" :key="reply.id">
            <router-link
              :to="{name:'airticle',params:{useId:reply.id,loginname:reply.author.loginname}}"
            >{{reply.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfoData: {},
      loading: true
    };
  },
  beforeMount: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`)
        .then(res => {
          this.loading = false;
          this.userInfoData = res.data.data;
        })
        .catch(err => {
          console.log("TCL: err", err);
        });
    }
  },
  watch:{
    '$route'(to,from){
      this.getData()
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
}
.user-top {
  background-color: #ffffff;
}
.user {
  width: 1096px;
  margin: 18px 0 0;
}
.title {
  height: 42px;
  background-color: #f6f6f6;
}
.info {
  display: flex;
  align-items: center;
  padding: 12px;
}
.info > img {
  width: 40px;
  height: 40px;
}
.info > span {
  font-size: 14px;
  color: #778087;
}
.integral {
  padding: 0 12px;
  font-size: 14px;
  color: #333333;
}
.registe {
  padding: 12px;
  font-size: 14px;
  color: #ababab;
}
/* 最近创建的话题开始 */
.recent_topics {
  margin-top: 12px;
  background-color: #ffffff;
}
.recent_topics_title {
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #333333;
  padding: 0 12px;
  background-color: #f6f6f6;
}
.recent_topics > ul > li {
  list-style: none;
  padding: 12px;
  font-size: 14px;
}
/* 最近创建的话题结束 */
</style>
