<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:16:49
 * @LastEditTime: 2019-08-09 20:06:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="page">
    <div class="border">
      <button @click="changeBtn" id="homePage">首页</button>
      <button @click="changeBtn">上一页</button>
      <button
        v-for="(page,index) in pageList"
        :key="index"
        @click="changeBtn(index)"
        :class="{
          currentPage:currentIndex == index
      }"
      >{{page}}</button>
      <button @click="changeBtn">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageList: [1, 2, 3, 4, 5],
      currentIndex: 0
    };
  },
  methods: {
    changeBtn: function(index) {
      if (typeof index != "number") {
        switch (index.target.innerText) {
          case "首页":
            this.pageList = [1, 2, 3, 4, 5];
            this.changeBtn(0); //这里是index 所以从0开始
            break;
          case "上一页":
            this.changeBtn(this.currentIndex - 1);
            break;
          case "下一页":
            this.changeBtn(this.currentIndex + 1);
            break;
        }
        return;
      } else {
        if (index < 0) {
          index = 0;
        }
        if (index === 4) {
          index -= 1;
          this.pageList.shift(); //删除第一个数组
          this.pageList.splice(4, 0, this.pageList[3] + 1); //在最后面添加一个元素
        } else if (index === 0 && this.pageList[index] > 1) {
          index += 1;
          this.pageList.splice(4, 1); //删除数组末尾的元素
          this.pageList.unshift(this.pageList[0] - 1);
        }
      }

      this.currentIndex = index;
      this.$emit('handlePage',this.pageList[index])
    }
  }
};
</script>

<style scoped>
.page {
  background-color: #ffffff;
}
.border {
  width: 1380px;
  height: 42px;
  box-sizing: border-box;
  border: 1px solid #888888;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 10px;
}
button {
  margin: 0 5px;
  padding: 0;
  border: 1px solid #ddd;
  outline: none;
  width: 54px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 3px;
  color: #778087;
}
.currentPage {
  background-color: #1f1b1b;
}
</style>
