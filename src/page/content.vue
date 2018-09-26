<template>
    <div class="content">
        123
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            dat:{}
        };
    },
    created() {
        // this.getData();
    },
    methods: {
        // getData() {
        //     this.$api.get("topic/" + this.id, null, r => {
        //         this.dat = r.data;
        //     });
        // }
    }
};
</script>

<style>

</style>
