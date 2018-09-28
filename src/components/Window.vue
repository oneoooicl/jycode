<template>
    <div v-if="Show" class="this-window" :class="Light ? 'light' : 'dark'" :style="{top:top + 'px',left:left + 'px',zIndex:Up + 80}">
        <div class="this-window_header" @mousedown="moveStart($event)" @mousemove="moveIn($event)" @mouseup="moveStop($event)" >
            <label v-html="Title"></label>
            <Icon type="md-close" @click="window_close()" />
            <Icon :type="min?'md-browsers':'md-remove'" @click="onMin()" />
        </div>

        <div class="this-window_content" v-if="!min" :style="{width:Width + 'px',height:Height + 'px'}">
            <router-view :name="Link" :Dataset="Dataset"></router-view>
        </div>
    </div>
</template>

<script>
// @window_close
export default {
    props:{
        Show: { default: true},             // 主体显示
        Up: { default: 0},                  // 层级
        Keys: { default: 0},                 // key
        Light: { default: false},           // 页面风格
        Title: { default: "快速添加"},       // 标题
        Width: { default: 300},             // 宽度
        Height: { default: 300},            // 高度
        Link: { default: ''},                 // 链接
        Dataset: { default: {}}
    },
    data(){
        return {
            // init
            min: false, // 最小化
            // move
            move: false, // 是否可拖动
            pagex : null,
            pagey : null,
            top: 150,
            left: 100,
        }
    },
    methods:{
        onMin(){
            this.min = this.min ? false : true;
        },
        window_close(){
            this.$emit("winClose",this.Keys);            
        },

        // move
        moveStart(e){
            this.$emit("upIndex",this.Keys);
            this.move = true;
            this.pagex = e.pageX;
            this.pagey = e.pageY;
        },
        moveIn(e){
            if(this.move){
                if(e.pageX < this.pagex){
                    this.left = (this.left - (this.pagex - e.pageX));
                    this.pagex = e.pageX;
                }else if(e.pageX > this.pagex){
                    this.left = (this.left + (e.pageX - this.pagex));
                    this.pagex = e.pageX;
                }

                if(e.pageY < this.pagey){
                    this.top = (this.top - (this.pagey - e.pageY));
                    this.pagey = e.pageY;
                }else if(e.pageY > this.pagey){
                    this.top = (this.top + (e.pageY - this.pagey));
                    this.pagey = e.pageY;
                }
            }
        },
        moveStop(e){
            this.move = false;
            this.pagex = null;
            this.pagey = null;
        },
    },
    created:function(){
        window.addEventListener('mouseup', this.moveStop);
        window.addEventListener('mousemove', this.moveIn);
    }
}
</script>

<style lang="less">
    @brcolor_dark:#424242;
    @bgcolor_dark:#535353;
    @bgcolor_h_dark:#424242;
    @brcolor_h_dark:#383838;
    @focolor_dark:#f0f0f0;
    @focolor_dark_dis:#a0a0a0;
    @iconcolor_dark:#ddd;
    @inputcolor_dark:#454545;
    @inputbrcolor_dark:#666666;

    @brcolor_light:rgba(255, 255, 255, 0.5);
    @bgcolor_light:#f5f5f5;
    @bgcolor_h_light:rgba(255, 255, 255, 0.5);
    @brcolor_h_light:#e5e5e5;
    @focolor_light:#333333;
    @focolor_light_dis:#616161;
    @iconcolor_light:#666666;
    @inputcolor_light:#ffffff;
    @inputbrcolor_light:#eee;

    // all
    .this-window, .this-window label, .this-window input{
        font-size: 12px;
    }
    .this-window .ivu-icon-md-close, .this-window .ivu-icon-md-remove, .this-window .ivu-icon-md-browsers{
        display: block;
        width: 30px;
        text-align: center;
    }
    .this-window .ivu-icon-md-close:hover, .this-window .ivu-icon-md-remove:hover, .this-window .ivu-icon-md-browsers:hover{
        background-color: rgba(119, 119, 119, 0.2);
    }
    .this-window_content{
        overflow-y: auto;
        padding: 10px;
        min-width: 200px;
    }
    .this-window .this-window_footer .ivu-icon-ios-arrow-down{
        float: right;
        margin-top: 4px;
        line-height: 9px;
        transform: rotateZ(-45deg);
        cursor: se-resize;
    }
    // all_dark
    .this-window.dark input{
        background-color: @inputcolor_dark;
        border: 1px solid @inputbrcolor_dark;
    }
    .this-window.dark, .this-window.dark label, .this-window.dark input{
        color: @focolor_dark;
    }
    .this-window.dark button, .this-window.dark .dis, .this-window.dark .ivu-icon-md-close, .this-window.dark .ivu-icon-md-remove, .this-window.dark .ivu-icon-md-browsers{
        color: @focolor_dark_dis;
        cursor: pointer;
    }
    .this-window.dark button:hover, .this-window.dark .dis:hover, .this-window.dark .ivu-icon-md-close:hover, .this-window.dark .ivu-icon-md-remove:hover, .this-window.dark .ivu-icon-md-browsers:hover{
        color: @focolor_dark;
    }
    // all_light
    .this-window.light input{
        background-color: @inputcolor_light;
        border: 1px solid @inputbrcolor_light;
    }
    .this-window.light, .this-window.light label, .this-window.light input{
        color: @focolor_light;
    }
    .this-window.light button, .this-window.light .dis, .this-window.light .ivu-icon-md-close, .this-window.light .ivu-icon-md-remove, .this-window.light .ivu-icon-md-browsers{
        color: @focolor_light_dis;
        cursor: pointer;
    }
    .this-window.light button:hover, .this-window.light .dis:hover, .this-window.light .ivu-icon-md-close:hover, .this-window.light .ivu-icon-md-remove:hover, .this-window.light .ivu-icon-md-browsers:hover{
        color: @focolor_light;
    }

    // body
    .this-window{
        position: fixed;
        box-shadow: 0 0 10px #666666;
    }

    .this-window.dark{
        border: 2px solid @brcolor_dark;
    }

    .this-window.light{
        border: 2px solid @brcolor_light;
    }
    // header
    .this-window .this-window_header{
        padding-left: 10px;
        line-height: 30px;
        height: 30px;
        width: 100%;
        letter-spacing:1px;
    }
    .this-window .this-window_header, .this-window .this-window_header label{
        cursor: move;
    }
    .this-window .this-window_header .ivu-icon{
        float: right;
        line-height: 30px;
    }
    
    .this-window.dark .this-window_header{
        background-color: @bgcolor_h_dark;
        border-bottom: 1px solid @brcolor_h_dark;
    }

    .this-window.light .this-window_header{
        background-color: @bgcolor_h_light;
        border-bottom: 1px solid @brcolor_h_light;
    }
    // content
    .this-window.dark .this-window_content{
        background-color: @bgcolor_dark;
    }

    .this-window.light .this-window_content{
        background-color: @bgcolor_light;
    }
</style>
