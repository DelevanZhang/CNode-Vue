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
        <router-link :to="{name:'postList'}">
          <span :class="{tab:this.tab=='all'}">全部</span>
        </router-link>
        <router-link :to="{name:'good',query:{tab:'good'}}">
          <span :class="{tab:this.tab=='good'}">精华</span>
        </router-link>
        <router-link :to="{name:'good',query:{tab:'share'}}">
          <span :class="{tab:this.tab=='share'}">分享</span>
        </router-link>
        <router-link :to="{name:'good',query:{tab:'ask'}}">
          <span :class="{tab:this.tab=='ask'}">回答</span>
        </router-link>
        <router-link :to="{name:'good',query:{tab:'job'}}">
          <span :class="{tab:this.tab=='job'}">招聘</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tab"],
  data() {
    return {};
  },
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
span {
  padding: 4px;
  margin: 0 10px;
  color: #80bd01;
  font-size: 14px;
}
span:hover{
  color:#005580;
}

.tab {
  color: #ffffff;
  background-color: #80bd01;
}
</style>
