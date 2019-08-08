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
import PostLists from "./components/PostLists";
import Airticle from "./components/Airticle";
import slideBar from "./components/SlideBar";
export default {
  data: function() {
    return {};
  },
  components: {
    Header,
    PostLists,
    Airticle,
    slideBar
  }
};
</script>

<style scoped>
.theme_details_container {
  background-color: #dddddd;
  display: flex;
  justify-content: center;
}
</style>
