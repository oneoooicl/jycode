<template>
    <div class="header">
        <div class="header_left">
            <Icon type="ios-bonfire" />
            LOGO
        </div>

        <div class="header_right">
            <div class="search">
                <Icon type="md-search" />
                <input type="text" placeholder="快速查找订单ID/厂家名/客户名">
            </div>
            <div>
                <Icon type="md-log-out" />
                登出
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    @import "../style/less/_header.less";
</style>
