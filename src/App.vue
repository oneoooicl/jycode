<template>
  <div id="app">    
    <Layout>
        <Header>
          <myHeader></myHeader>
        </Header>
        <Layout>
            <Sider hide-trigger width="55px">
              <myNav></myNav>
            </Sider>
            <Content>
              <router-view/>
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

export default {
  components: {myHeader, myFooter, myNav},
  name: 'App'
}
</script>

<style lang="less">
  @import './style/style.less';
</style>

<style lang="less" scoped>
  @import "./style/index.less";
</style>
