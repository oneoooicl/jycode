<template>
    <div class="footer">
        <div class="left">
            <label>
                <Icon type="md-information-circle" />
                今日订单 {{sum}}
            </label>
            <label>
                <Icon type="md-warning" />
                未完成订单 {{warning}}
            </label>
            <label>
                <Icon type="md-close-circle" />
                货源紧张 {{error}}
            </label>
        </div>

        <div class="right">
            <label>
                {{username}}
            </label>
            <label>
                {{usertype==1?"超级管理员":"管理员"}}
            </label>
            <label>
                系统时间 {{dateset}}
            </label>
            <label @click="openFeeback()">
                <Icon class="logo" type="logo-freebsd-devil" />
                <myFeedback v-if="feedback" @closeFeedback="closeFeedback()"></myFeedback>
            </label>
        </div>
    </div>
</template>

<script>
import myFeedback from './Feedback.vue';
export default {
    components: {myFeedback},
    data(){
        return {
            error: 10,
            warning: 5,
            sum: 22,
            username: "admin",
            usertype: 1,
            dateset: "2018-9-26",

            feedback:false
        }
    },
    methods:{
        openFeeback:function(){
            this.feedback = this.feedback == true ? false : true;
        },

        closeFeedback:function(){
            this.feedback = false;
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../style/less/_footer.less";
</style>