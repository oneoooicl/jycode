<template>
    <div class="nav">
        <div v-for="item in list" :key="item.name">
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {name:"", icon:""},
                {name:"", icon:""},
                {name:"", icon:""},
                {name:"", icon:""},
                {name:"", icon:""}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .nav{
        display: block;
        width: 55px;
        height: 100%;
        background-color: #333;
    }
</style>