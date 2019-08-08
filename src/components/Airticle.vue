<template>
  <div class="airtic_container">
    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" />
    </div>
    <div class="main" v-else>
      <div class="header">
        <div class="title">
          <span class="state">{{airtic_data|getAirticleStates}}</span>
          <span class="title_content">{{airtic_data.title}}</span>
        </div>
        <div class="detail">
          <div class="dot"></div>
          <span>发布于{{airtic_data.create_at|getTimeDiff}}</span>
          <div class="dot"></div>
          <span>作者 {{airtic_data.author.loginname}}</span>
          <div class="dot"></div>
          <span>{{airtic_data.visit_count}} 次浏览</span>
          <div class="dot"></div>
          <span>来自 {{airtic_data|getAirticleStates}}</span>
        </div>
      </div>
      <div class="markdown-body" v-html="airtic_data.content"></div>
      <div class="reply_comment">
        <div class="reply_count">
          <span v-if="replies.length>0">{{replies.length}} 回复</span>
        </div>
        <ul class="reply_content_ul">
          <li v-for="(item,index) in airtic_data.replies" :key="item.id" class="reply_content">
            <div class="reply_content_top">
              <img :src="item.author.avatar_url" class="img_photo" />
              <span>{{item.author.loginname}}</span>
              <span>{{index+1}}楼</span>
              <div class="dot"></div>
              <span>{{item.create_at|getTimeDiff}}</span>
              <div class="like_right" v-if="item.ups.length>0">
                <img src="../assets/like.svg" class="img_like" />
                <span class="like_count">{{item.ups.length}}</span>
              </div>
            </div>

            <div v-html="item.content" class="reply_content_bottom"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      airtic_data: {},
      loading: true
    };
  },
  methods: {
    getAirticleData: function() {
      this.axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.useId}`)
        .then(res => {
          if (res.status === 200) {
            this.loading = false;
            this.airtic_data = res.data.data;
            this.replies = res.data.data.replies;
          }
        })
        .catch(err => {
        });
    }
  },
  beforeMount: function() {
    this.getAirticleData();
  }
};
</script>

<style>
* {
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  text-decoration: none;
  box-sizing: border-box;
}
@import url("../assets/github-markdown-css.css");

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  display: inline-block;
  background-color: #797979;
  margin: 0 4px;
}
.airtic_container {
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  width: 1094px;
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
  width: 1094px;
  background-color: #dddddd;
  margin-top: 16px;
}
.header {
  height: 88px;
  padding-left: 16px;
  border: 1px solid #e2e2e2;
  background-color: white;
}
.title {
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.state {
  padding: 4px;
  font-size: 12px;
  background: #80bd01;
  color: #fff;
  margin-left: 4px;
}
.title_content {
  height: 32px;
  font-size: 22px;
  color: #333333;
  font-weight: 700;
  margin-left: 10px;
}
.detail {
  height: 20px;
  font-size: 12px;
  margin-top: 8px;
  display: flex;
  color: #838383;
  align-items: center;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1094px;
  margin: 0 auto;
  padding: 0 10px;
  border: 1px solid #e2e2e2;
  background-color: white;
}
/* 回复css开始 */
.reply_comment {
  width: 1094px;
  margin-top: 12px;
  background-color: #f6f6f6;
  margin-bottom: 20px;
  color: #444444;
  font-size: 14px;
}
.reply_count > span {
  height: 40px;
  border: 1px solid #f0f0f0;
  background-color: #f6f6f6;
}
.reply_count > span {
  margin-left: 10px;
  line-height: 40px;
}
.reply_content_ul {
  padding: 0;
  margin: 0;
}
.reply_content {
  border: 1px solid #f0f0f0;
  list-style: none;
  background-color: #ffffff;
}
.reply_content_top {
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 10px;
  position: relative;
}
.reply_content_top > .img_photo {
  width: 30px;
  height: 30px;
}
.like_right {
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
}
.like_right > .img_like {
  width: 14px;
  height: 15px;
  margin-right: 4px;
}
.reply_content_top > span {
  font-size: 12px;
  color: #0088cc;
  margin-left: 4px;
}
.like_right > .like_count {
  color: #808080;
  font-size: 15px;
}
.reply_content_top > .dot {
  background-color: #005580;
}
.reply_content_bottom {
  color: #333333;
  font-size: 15px;
  margin: 0 60px 0;
}
/* 回复css结束 */
</style>
