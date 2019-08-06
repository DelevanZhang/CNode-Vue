<template>
  <div id="app">
    <Header/>
    <PostLists/>
  </div>
</template>
<script>
import Header from './components/Header'
import PostLists from './components/PostLists'
export default {
    data:function(){
      return {

      }
    },
    components:{
      Header,
      PostLists,
    }
}
</script>

<style scoped>
  
</style>
