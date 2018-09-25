<template>
  <div id="app">    
    <!-- <myHeader></myHeader> -->
    <div class="nav">
      <myNav></myNav>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue';
import myNav from '@/components/Nav.vue';

export default {
  components: {myHeader, myNav},
  name: 'App'
}
</script>

<style lang="less">
  @import './style/style.less';
</style>

<style lang="less" scoped>
  @import "./style/index.less";
</style>
