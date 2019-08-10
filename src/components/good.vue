<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 09:51:06
 * @LastEditTime: 2019-08-10 11:21:27
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="goodContainer">
    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" />
    </div>
    <div class="good" v-else>
      <ul>
        <li v-for="item in post" :key="item.id">
          <img :src="item.author.avatar_url" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      post: [],
      tab: this.$route.params.tab
    };
  },
  methods: {
    getData: function() {
      console.log(
        "TCL: data -> this.$route.params.tab",
        this.$route.params.tab
      );
      this.axios
        .get(`https://cnodejs.org/api/v1/topics?tab=good`, {
          params: {
            // tab: this.tab,
            limit: 5
          }
        })
        .then(res => {
          this.loading = false;
          this.post = res.data.data;
        })
        .catch(err => {
          console.log("TCL: err", err);
        });
    }
  },
  beforeMount: function() {
    console.log("TCL: beforeMount", "beforeMount");
    this.getData();
  },
  watch: {
    $route(to, from) {
      this.getData();
    }
  }
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
}
li > img {
  width: 30px;
  height: 30px;
}
</style>
