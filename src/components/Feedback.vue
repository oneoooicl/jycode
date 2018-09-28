<template>
    <div class="feedback" :class="!Light ? 'dark' : ''">
        <span @click.stop="close">
            <Icon type="md-close" />
        </span>
        
        <div>
            <Icon type="logo-freebsd-devil" />
            <h2>意见反馈</h2>
            <p>您的建议会发送到我的邮箱里</p>
        </div>
        <div>
            <Input type="textarea" :rows="2" placeholder="请输入您的建议" />
            <Button type="primary">发送</Button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["Light"],
    data() {
        return {
            
        }
    },
    methods:{
        close:function(){
            this.$emit('closeFeedback');
        }
    },
    created:function(){

    }
}
</script>

<style scoped>
    .feedback{
        position: absolute;
        bottom: 30px;
        right: 0px;
        width: 320px;
        height: 180px;
        background-color: #fff;
        box-shadow: 0 0 10px #e5e5e5;
        transition: all 0.3s linear;
        padding: 20px 30px;
    }

    .feedback.dark{
        background-color: #333;
        box-shadow: 0 0 10px #666;
    }

    .feedback .ivu-icon{
        font-size: 50px;
        color: #a7a7a7;
        transform: rotateY(180deg);
        float: left;
    }

    .feedback.dark .ivu-icon{
        color: #ddd;
    }

    .feedback h2, .feedback p {
        color: #424242;
        float: left;
        line-height: 25px;
        margin-left: 20px;
    }

    .feedback.dark h2, .feedback.dark p{
        color: #ddd;
    }

    .feedback p{
        display: block;
        font-size: 12px;
    }
    .feedback .ivu-btn{
        margin-top: 10px;
        width: 100%;
        border-radius: 0;
    }

    .feedback .ivu-icon-md-close{
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 18px;
    }

    .feedback.dark .ivu-btn-primary{
        background-color: #535353;
        border: none 0;
    }    
</style>
<style>
    .feedback .ivu-input{
        margin-top: 10px;
        border-radius: 0px;
        font-size: 12px;
    }
    .feedback.dark .ivu-input{
        background-color: #454545;
        border: 1px solid #666;
        color: #fff;
    }
</style>
