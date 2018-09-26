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
            <label>
                <Icon class="logo" type="logo-freebsd-devil" />
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            error: 10,
            warning: 5,
            sum: 22,
            username: "admin",
            usertype: 1,
            dateset: "2018-9-26"
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../style/less/_footer.less";
</style>