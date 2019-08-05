<template>
  <div class="container">
      <img src="../assets/cnodejs_light.svg" alt="picture">
      <ul >
          <li><a href="#">首页</a></li>
          <li><a href="#">新手入门</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">关于</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">登录</a></li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.container {
    width:100%;
    height: 50px;
    background-color: #3D3D3D;
    position: relative;
}
ul {
    position:absolute;
    height:50px;
    top:0;
    right:14%;
    margin:0;
    padding: 0;
    line-height: 50px;

}
li {
    list-style: none;
    display:inline-block;
    padding: 0 15px;
}
a {
    text-decoration: none;
    color: #ccc;
    font-size: 13px;
}
img {
    width:6%;
    height: 100%;
    margin-left:13%;
}

</style>
