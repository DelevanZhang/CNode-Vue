<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:18:47
 * @LastEditTime: 2019-08-10 15:15:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="navbar">
    <ul>
      <li class="navbar">
        <router-link :to="{name:'postList',params:{}}">
          <span>全部</span>
        </router-link>
        <router-link :to="{path:'/good',query:{tab:'good'}}">
          <span>精华</span>
        </router-link>
        <router-link :to="{path:'/good',query:{tab:'share'}}">
          <span>分享</span>
        </router-link>
        <router-link :to="{path:'/good',query:{tab:'ask'}}">
          <span>回答</span>
        </router-link>
        <router-link :to="{path:'/good',query:{tab:'job'}}">
          <span>招聘</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
}
.navbar span {
  padding: 0 13px;
  color: #80bd01;
  font-size: 14px;
}
</style>
