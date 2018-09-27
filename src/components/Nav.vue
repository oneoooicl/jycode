<template>
    <div class="nav">
        <div v-for="homeitem in home" :key="homeitem.url" @click="toTab(homeitem)">
            <Icon :type="homeitem.icon" />
            <p>{{homeitem.name}}</p>
        </div>
        <div v-for="(item, key) in list" :key="key" @click="onShowItem(key)">
            <Icon :type="item.icon" />
            <p>{{item.name}}</p>
            <myNavItem v-if="item.active" :dataset="item.items" @toTab="toTab"></myNavItem>
        </div>
        <div class="info">
            <Icon type="md-chatbubbles" />
            <sub class="sub">5</sub>
            <p>消息</p>
        </div>
        <div class="setting">
            <Icon type="md-settings" />
            <p>设置</p>
        </div>
    </div>
</template>

<script>
import myNavItem from './NavItem.vue';
export default {
    components: {myNavItem},
    data(){
        return {
            itemindex: null,
            home:[
                {name:"开始页", icon:"md-bulb", url:"index" }
            ],
            list: [
                {name:"客户库", active:false, icon:"md-contacts", items:[
                    {name:"客户列表", icon:"md-list", url:"customerIndex" },
                    {name:"添加客户", icon:"md-add", url:"customerAdd" },
                    {name:"客户回收站", icon:"md-trash", url:"customerRecycle" },
                ]},
                {name:"厂家库", active:false, icon:"md-plane", items:[
                    {name:"厂家列表", icon:"md-list", url:"" },
                    {name:"添加厂家", icon:"md-add", url:"" },
                    {name:"厂家回收站", icon:"md-trash", url:"" },
                ]},
                {name:"产品库", active:false, icon:"md-cube", items:[
                    {name:"产品列表", icon:"md-list", url:"" },
                    {name:"添加产品", icon:"md-add", url:"" },
                    {name:"产品回收站", icon:"md-trash", url:"" },
                    {name:"类别管理", icon:"logo-buffer", url:"" },
                    {name:"单位管理", icon:"logo-buffer", url:"" },
                ]},
                {name:"订单", active:false, icon:"ios-clipboard", items:[
                    {name:"未完成订单", icon:"md-bicycle", url:"" },
                    {name:"销售", icon:"md-arrow-round-up", url:"" },
                    {name:"进货", icon:"md-arrow-round-down", url:"" },
                ]},
                {name:"账务统计", active:false, icon:"ios-book", items:[
                    {name:"全部账单", icon:"ios-paper", url:"" },
                    {name:"统计评测", icon:"md-pie", url:"" },
                ]},
                {name:"员工管理", active:false, icon:"ios-contacts", items:[
                    {name:"员工列表", icon:"md-list", url:"" },
                    {name:"添加员工", icon:"md-add", url:"" },
                    {name:"员工复职", icon:"md-trash", url:"" },
                ]},
                {name:"主页管理", active:false, icon:"md-home", items:[
                    {name:"公告", icon:"md-megaphone", url:"" },
                    {name:"联系信息", icon:"md-pin", url:"" },
                    {name:"公司简介", icon:"md-browsers", url:"" },
                    {name:"宣传活动", icon:"md-bowtie", url:"" },
                ]},
            ],
        }
    },
    methods:{
        onShowItem(e) {
            if(this.list[e].active){
                this.list[e].active = false;
            }else{
                for(let i = 0; i < this.list.length; i++){
                    this.list[i].active = false;
                }
                this.list[e].active = true;
            }
        },
        toTab:function(e){
            this.$emit('toTab', e);
        }
    },
    created:function(){
        this.toTab(this.home[0]);
    },
}
</script>

<style lang="less" scoped>
    @import '../style/less/_nav.less';
</style>