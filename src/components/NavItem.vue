<template>
    <div class="navitem" @load="show($event)">
        <div v-for="(items, key) in dataset" :key="key" @click="onclick">
            <router-link :to="items.url">
                <Icon :type="items.icon" />
                <label>{{items.name}}</label>
            </router-link>  
        </div>
    </div>
</template>

<script>
export default {
    props: ["dataset"],
    data(){
        return {

        }
    },
    methods:{
        show(e){
            
        },

        onclick:function(event){
            event.stopPropagation();
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../style/less/_navitem.less';
</style>