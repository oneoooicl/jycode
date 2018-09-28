<template>
    <div>
        <div v-for="(item, key) in arr" :key="key">
            <label>{{item}}</label>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        Dataset: { default: {}}
    },
    data(){
        return {
            arr: [],
        }
    },
    created:function(){
        let arr = [];
        for (var i in this.Dataset) {
            arr.push(this.Dataset[i]); 
        }
        this.arr = arr;
    }
}
</script>

<style>

</style>
