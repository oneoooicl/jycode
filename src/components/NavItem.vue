<template>
    <div class="navitem" @load="show($event)" :class="Light?'light':''">
        <div v-for="(items, key) in dataset" :key="key" @click="onTab(items);onclick">
            <Icon :type="items.icon" />
            <label>{{items.name}}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: ["dataset", "Light"],
    data(){
        return {

        }
    },
    methods:{
        show(e){
            
        },

        // 冒泡
        onclick:function(event){
            event.stopPropagation();
        },

        // on Tab
        onTab:function(e){
            e.timestamp = new Date().getTime();
            this.$emit('toTab', e);
        }
    },
}
</script>

<style lang="less" scoped>
    @import '../style/less/_navitem.less';
</style>