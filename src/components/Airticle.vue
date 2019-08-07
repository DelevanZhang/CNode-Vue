<template>
  <div class="airtic_container">
    <div class="airtic_main">
      <div class="main_title_container">
        <span class="main_title">{{airtic_data.title}}</span>
        <ul>
          <li>发布于</li>
          <li>作者</li>
          <li>浏览</li>
          <li>来自</li>
        </ul>
      </div>
    </div>
    <div class="airtic_reply"></div>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
.airtic_container {
  width: 100%;
  height: 100vh;
  background-color: #e1e1e1;
  border:1px solid transparent;
}
.main_title_container {
  width: 1096px;
  height: 84px;
  margin-top:12px;
   border:1px solid transparent;
}
.main_title {
  font-size: 22px;
  color: #333333;
  font-weight: bold;
  margin-top:22px;
}
.airtic_main {
  width: 1400px;
  background-color: #ffffff;
  margin: auto;
}
ul {
  display: flex;
  margin-bottom:-20px;
}
li {
  list-style: none;
  margin: 0 2px;
}
</style>
