<template>
  <div id="app">    
    <Layout>
        <Layout>
          <Sider hide-trigger width="55px">
            <myNav @toTab="toTab"></myNav>
          </Sider>
          <Content>
            <myHeader></myHeader>
            <myTab :list="list"></myTab>
          </Content>
        </Layout>
        <Footer>
          <myFooter></myFooter>
        </Footer>
    </Layout>
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue';
import myFooter from '@/components/Footer.vue';
import myNav from '@/components/Nav.vue';
import myTab from '@/components/Tab.vue';

export default {
  components: {myHeader, myFooter, myNav, myTab},
  name: 'App',
  data () {
        return {
            list:[],
        }
    },
    methods: {
        toTab:function(e){
          this.list = e;
        }
    },
}
</script>

<style lang="less">
  @import './style/style.less';
</style>

<style lang="less" scoped>
  @import "./style/index.less";
</style>
