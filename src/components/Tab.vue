<template>
    <div class="tab">
        <Tabs type="card" closable @on-tab-remove="handleTabRemove" :value="index" :before-remove="beforeRemove">
            <TabPane v-for="(items, key) in dataset" :key="key" :label="items.name" :icon="items.icon" :name="items.url">
                <router-view :name="items.url"></router-view>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    props: ["list"],
    data () {
        return {
            dataset:[],
            index:""
        }
    },
    methods: {
        beforeRemove:function(index){
            // return new Promise(function(resolve, reject) {});
        },

        handleTabRemove (name) {
            for(let i = 0; i < this.dataset.length; i++){
                if(this.dataset[i].url == name){
                    this.dataset.splice(i, 1);
                    console.log(this.dataset);
                    break;
                }
            }
        },

        onTab:function(){
            console.log(this.dataset)
        },

        showTab:function(){
            console.log("show");
        }
    },
    watch:{
        list:{
            handler:function(){
                let name = this.list.url;
                for(var item of this.dataset){
                    if(item.url == name){
                        this.showTab();
                        return;
                    }
                }
                this.dataset.push(this.list);
                this.index = name;
            },
            deep: true,
            // immediate:true
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../style/less/_tab.less';
</style>

<style lang="less">
    .tab > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-top: 1px solid #808080;
        background-color: #fafafa;
        border-radius: 0;
        background: #fff;
        color:#808080;
    }
    .tab > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
        background-color: #fff;
        color: #3399ff;
    }
    .tab > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }

    .tab .ivu-tabs-bar{
        margin-bottom:0px;
    }

    .ivu-tabs.ivu-tabs-card, .ivu-tabs-content.ivu-tabs-content-animated{
        height: 100%;
    }
</style>
