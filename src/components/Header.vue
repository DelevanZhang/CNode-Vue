<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 10:25:32
 * @LastEditTime: 2019-08-09 14:22:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Header">
    <div class="container">
      <img src="../assets/cnodejs_light.svg" alt="picture" />
      <ul>
        <li>
          <router-link :to="{name:'postList',params:{}}">
            <a href="#">首页</a>
          </router-link>
        </li>
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <a href="#">登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.Header {
  width: 100%;
  height: 50px;
  background-color: #3d3d3d;
}

.Header > .container {
  max-width: 1400px;
  position: relative;
  height: 100%;
  margin: 0 auto;
}
ul {
  position: absolute;
  height: 50px;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  line-height: 50px;
}
li {
  list-style: none;
  display: inline-block;
  padding: 0 15px;
}
a {
  text-decoration: none;
  color: #ccc;
  font-size: 13px;
}
img {
  width: 120px;
  height: 100%;
}
</style>
