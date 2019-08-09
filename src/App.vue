<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:25:32
 * @LastEditTime: 2019-08-09 20:08:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <Header />
    <!-- <router-view></router-view> -->
    <div class="theme_details_container">
      <router-view name="main"></router-view>
      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  data: function() {
    return {};
  },
  components: {
    Header,
  }
};
</script>

<style scoped>
#app {
  height: 100%;
  background-color: #dddddd;
  min-height:100vh;
}
.theme_details_container {
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>
