<template>

    <div class="index form">
        Index.vue
    </div>
    
</template>

<script>

export default {
    data () {
        return {
            list:[]
        }
    },
    created () {
        // this.getData()
    },

    methods:{
        // getData (){
        //     this.$api.get('topics', null, r => {
        //         this.list = r.data
        //     })
        // }
    }
}
</script>

<style>
    .article_list {margin: auto;}
</style>
