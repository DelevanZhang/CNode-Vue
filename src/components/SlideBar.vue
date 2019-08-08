<template>
  <div class="container">
    <div class="main">
      <div class="author">
        <span>作者</span>
      </div>
      <div class="img_name">
        <img src="post.avatar_url" />
        <span></span>
      </div>
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
.main {
  width: 294px;
  border: 1px solid red;
  margin: 16px 0 0 16px;
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
}
.img_name {
}
.img_name > img {
  border: 1px solid red;
  width: 48px;
  height: 48px;
}
</style>
