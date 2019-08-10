<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 09:51:06
 * @LastEditTime: 2019-08-10 16:27:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="tabContainer">
    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" />
    </div>
    <div class="tab" v-else>
      <NavBar :tab="this.tab"></NavBar>
      <ul>
        <li v-for="item in post" :key="item.id">
          <img :src="item.author.avatar_url" />
          <div class="count">
            <div class="statistics">
              <span class="reply_count">{{item.reply_count}}</span>
              <span class="count_sepertor">/</span>
              <span class="visit_count">{{item.visit_count}}</span>
            </div>
          </div>
          <span class="tab_class">{{item|getAirticleStates}}</span>
          <router-link :to="{name:'airticle',params:{useId:item.id,loginname:item.author.loginname}}" class="link_to_airticle">
            <div class="content">{{item.title}}</div>
          </router-link>
          <span class="date">{{item.last_reply_at|getTimeDiff}}</span>
        </li>
      </ul>
      <PagingDevice @handlePage="changPage"></PagingDevice>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import PagingDevice from "./PagingDevice";
export default {
  data() {
    return {
      loading: true,
      post: [],
      page: 1,
      tab:this.$route.query.tab
    };
  },
  components: {
    NavBar: NavBar,
    PagingDevice: PagingDevice
  },
  methods: {
    getData: function() {
      this.axios
        .get(`https://cnodejs.org/api/v1/topics`, {
          params: {
            tab: this.$route.query.tab,
            limit: 16,
            page: this.page
          }
        })
        .then(res => {
          this.loading = false;
          this.post = res.data.data;
        })
        .catch(err => {
          console.log("TCL: err", err);
        });
    },
    changPage: function(value) {
      this.page = value;
      this.getData();
    }
  },
  beforeMount: function() {
    this.getData();
  },
  watch: {
    $route(to, from) {
      this.getData();
      this.tab = this.$route.query.tab
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
}
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
}
.tabContainer {
  width: 1400px;
  background-color: #ffffff;
}
li {
  list-style: none;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  position: relative;
}
li > img {
  width: 30px;
  height: 30px;
  margin-left: 12px;
}
.statistics {
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
span.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

span.visit_count {
  color: #b4b4b4;
  font-size: 12px;
}
span.count_sepertor {
  font-size: 10px;
}
div.content {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
span.tab_class {
  background: #80bd01;
  padding: 2px 4px;
  color: #fff;
  font-size: 12px;
}
span.date {
  position: absolute;
  right: 10px;
}
span.date {
  height: 30px;
  line-height: 30px;
  position: absolute;
  right: 16px;
  color: #778087;
  font-size: 12px;
}
.link_to_airticle {
  text-decoration: none;
}
.link_to_airticle:link {
  color: #333333;
}
.link_to_airticle:visited {
  color: #888888;
}
.link_to_airticle:hover {
  text-decoration: underline;
  /* color:#888; */
}
.link_to_airticle:active {
  color: red;
}
</style>
