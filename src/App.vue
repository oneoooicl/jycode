<template>
  <div id="app">    
    <Layout>
        <Layout>
          <Sider hide-trigger width="55px">
            <myNav @toTab="toTab" :Light="light" @showFirstInfo="showFirstInfo"></myNav>
          </Sider>
          <Content>
            <myHeader></myHeader>
            <myTab :list="list" @winData="winData"></myTab>
          </Content>
        </Layout>
        <Footer>
          <myFooter :Light="light"></myFooter>
        </Footer>
    </Layout>
    <!-- window -->
    <div class="window">
      <myWindow v-for="(items, key) in windows" :key="key" :Light="light" :Title="items.title" :Width="items.width" :Height="items.height" :Link="items.link" :Up="items.up" :Show="items.show" :Keys="key" :Dataset="items.dataset" @upIndex="upIndex" @winClose="winClose"></myWindow>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/Header.vue';
import myFooter from '@/components/Footer.vue';
import myNav from '@/components/Nav.vue';
import myTab from '@/components/Tab.vue';

import myWindow from '@/components/Window.vue';

export default {
  components: {myHeader, myFooter, myNav, myTab, myWindow},
  name: 'App',
  data () {
        return {
          light: false,
          list: [],

          windows:[
            {title:"修改密码", width:"500", height:"300", link:"winSetPsd", up:80, show:true, dataset:null},
            {title:"前台消息", width:"290", height:"300", link:"winFirstInfo", up:80, show:false, dataset:null},
          ]
        }
    },
    methods: {
        toTab:function(e){
          this.list = e;
        },

        // window层级
        upIndex:function(e){
          for(let i = 0; i < this.windows.length; i++){
            this.windows[i].up = 80;
          }
          this.windows[e].up = 81;
        },
        // window 关闭
        winClose:function(e){
          this.windows[e].show = false;
        },

        // 开启前台消息
        showFirstInfo:function(){
          this.windows[1].show = true;
        },

        // 接受data
        winData:function(e){
          this.windows.push({
            title: "对比数据",
            width: 200,
            height: 300,
            link: "winInfos",
            up: "80",
            show: true,
            dataset:e
          });
          console.log(e)
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
