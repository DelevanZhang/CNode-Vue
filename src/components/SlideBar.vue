<template>
  <div class="container">
    <div class="main_author">
      <div class="author">
        <span>作者</span>
      </div>
      <div class="img_name">
        <img :src="post.avatar_url"/>
        <span>{{post.loginname}}</span>
      </div>
      <div class="integral">积分:{{post.score}}</div>
    </div>
    <div class="main_recent_replies" >
      <div class="recent_topics_title">最近创建的话题</div>
      <ul>
        <li v-for="topic in post.recent_topics" :key="topic.id">
          <router-link
            :to="{name:'airticle',params:{useId:topic.id,loginname:topic.author.loginname}}"
          >{{topic.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="main_recent_replies">
      <div class="recent_topics_title">最近创建的回复</div>
      <ul>
        <li v-for="reply in post.recent_replies" :key="reply.id">
          <router-link
            :to="{name:'airticle',params:{useId:reply.id,loginname:reply.author.loginname}}"
          >{{reply.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      post: {}
    };
  },
  beforeMount: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      this.axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginName}`)
        .then(res => {
          this.post = res.data.data;
          console.log("TCL: res.data.data", res.data.data);
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
.container {
  width: 294px;
  margin: 16px 0 0 16px;
  background-color: #FFFFFF;
}
.author {
  height: 40px;
  background-color: #f6f6f6;
  font-size: 13px;
  color: #444444;
}
.author > span {
  line-height: 40px;
  margin: 0 12px 0;
  font-size: 13px;
  color: #444444;
}
.img_name {
  display: flex;
  align-items: center;
  padding: 10px;
}
.img_name > img {
  width: 48px;
  height: 48px;
}
.integral {
  font-size: 14px;
  color: #333333;
  padding: 10px;
}
.main_recent_replies {
  color:#778087;
  font-size:14px;
}

.main_recent_replies > ul >li {
  list-style:none;
  padding: 5px 10px;
}
.recent_topics_title {
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  color: #333333;
  background-color: #f6f6f6;
  padding:0 10px;
}
</style>
