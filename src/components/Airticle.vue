<template>
  <div class="airtic_container">
    <div class="main">
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
      <div class="content" v-html="airtic_data.content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      airtic_data: {}
    };
  },
  methods: {
    getAirticleData: function() {
      this.axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.useId}`)
        .then(res => {
        console.log("TCL: res", res)
          if (res.status == 200) {
            this.airtic_data = res.data.data;
          }
        })
        .catch(err => {});
    }
  },
  beforeMount: function() {
    this.getAirticleData();
  }
};
</script>

<style>
@import url('../assets/github-markdown.css');
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  list-style:none;
} */
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
}
.main {
  width: 1094px;
  /* height: 100vh; */
  background-color: white;
  margin-top: 16px;
  border: 1px solid pink;
}
.header {
  height: 88px;
  padding-left:16px;
  border:1px solid #E2E2E2;
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
  margin-left:4px;
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
  color:#838383;
  align-items: center;
}
.content {
  padding:0 10px;
}
</style>
