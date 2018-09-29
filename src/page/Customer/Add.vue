<template>
    <div class="customerAdd form">
        <Table border size="small" ref="selection" :columns="col" :data="dataset"></Table>
        <Button icon="md-add" @click="addrow">添加一行数据</Button>
    </div>
</template>

<script>
export default {
    data (){
        return {
            col:[
                {
                    title: '操作',
                    key: 'action',
                    width: 60,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'md-close'
                                },
                                style: {
                                    marginRight: '8px',
                                    cursor: "pointer",
                                    fontSize: "18px"
                                },
                                on: {
                                    click: (e) => {
                                        this.dataset.splice(index, 1);
                                    }
                                }
                            }),
                        ]);
                    }
                },
                {
                    title: '客户名',
                    key: 'name',
                    render:(h,params) => {
                        
                        return h('Input',{
                            props:{
                                placeholder: "客户名：",
                                value:params.row.name,
                            },
                            nativeOn:{
                                input: (e) => {
                                    params.row.name = event.target.value;
                                    this.dataset[params.index] = params.row;
                                },                            
                                keyup: (e) =>{
                                    if(e.keyCode == 13) {this.addrow(params.index)};
                                }
                            }
                        })
                    }
                },
                {
                    title: '电话',
                    key: 'tel',
                    render:(h,params) => {
                        
                        return h('Input',{
                            props:{
                                placeholder: "电话：",
                                value:params.row.tel,
                            },
                            nativeOn:{
                                input: (e) => {
                                    params.row.tel = event.target.value;
                                    this.dataset[params.index] = params.row;
                                },                            
                                keyup: (e) =>{
                                    if(e.keyCode == 13) {this.addrow(params.index)};
                                }
                            }
                        })
                    }
                },
                {
                    title: '备用电话',
                    key: 'standby',
                    render:(h,params) => {
                        
                        return h('Input',{
                            props:{
                                placeholder: "备用电话：",
                                value:params.row.standby,
                            },
                            nativeOn:{
                                input: (e) => {
                                    params.row.standby = event.target.value;
                                    this.dataset[params.index] = params.row;
                                },                              
                                keyup: (e) =>{
                                    if(e.keyCode == 13) {this.addrow(params.index)};
                                }
                            }
                        })
                    }
                },
                {
                    title: '邮箱',
                    key: 'email',
                    render:(h,params) => {
                        
                        return h('Input',{
                            props:{
                                placeholder: "邮箱：",
                                value:params.row.email,
                            },
                            nativeOn:{
                                input: (e) => {
                                    params.row.email = event.target.value;
                                    this.dataset[params.index] = params.row;
                                },                             
                                keyup: (e) =>{
                                    if(e.keyCode == 13) {this.addrow(params.index)};
                                }
                            }
                        })
                    }
                },
                {
                    title: '地址',
                    key: 'address',
                    render:(h,params) => {
                        
                        return h('Input',{
                            props:{
                                placeholder: "地址：",
                                value:params.row.address,
                            },
                            nativeOn:{
                                input: (e) => {
                                    params.row.address = event.target.value;
                                    this.dataset[params.index] = params.row;
                                },  
                                keyup: (e) =>{
                                    if(e.keyCode == 13) {this.addrow(params.index)};
                                }
                            }
                        })
                    }
                },
            ],
            dataset:[
                {name:"", tel:"", standby:"", email:"", address:""}
            ]
        }
    },
    methods:{
        addrow:function(i){
            if(!isNaN(i)){
                if(this.dataset[i+1] != undefined){
                    return;
                }
            }
            this.dataset.push({name:"", tel:"", standby:"", email:"", address:""});
        }
    }
}
</script>

<style lang="less">
    table .ivu-input{
        border-radius: 0px;
        border: 1px dashed #e5e5e5;
    }

    table td .ivu-icon:hover{
        color :red;
        box-shadow: none;
    }

    .add_box{
        width: 100%;
        height: 30px;
        background-color: #f8f8f9;
        border: 1px solid #dcdee2;
        border-top: 0 none;
        display: flex;
        align-items: center;
        padding-left: 15px;
    }
</style>
