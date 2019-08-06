<template>
  <div class="container">
    <div class="main">
      <ul>
        <li v-for="item in mainData" :key="item.id">
          <img :src="item.author.avatar_url" />
          <div class="statistics">
            <span class="reply_count">{{item.reply_count}}</span>
            <span class="count_sepertor">/</span>
            <span class="visit_count">{{item.visit_count}}</span>
          </div>
          <div class="airticleState">
            <span v-if="item.top" class="top">置顶</span>
            <span v-else-if="item.good" class="good">精华</span>
            <span v-else-if="item.tab=='ask'" class="ask">问答</span>
            <span v-else class="share">分享</span>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="last_reply_at">{{item.last_reply_at}}</div>
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
          console.log("TCL: this.mainData", this.mainData)
          var date = res.data.data[0].last_reply_at
          console.log("TCL: date", date)
          var f = new Date(date).getTime()
          console.log("TCL: f", f)
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
  margin-left:10px;
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
  margin-left:10px;
}
span.top,
span.good {
  background-color: #80bd01;
  padding: 2px 4px;
  font-size: 12px;
  color: white;
}
span.share,
span.ask {
  background-color: #e5e5e5;
  padding: 2px 4px;
  font-size: 12px;
  color: #999999;
}
div.title {
  height:30px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-left:10px;
}
div.last_reply_at {
  height:30px;
  line-height: 30px;
  position:absolute;
  right:16px;
  color:#778087;
  font-size:12px;
}
</style>
