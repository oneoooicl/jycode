<template>
    <div class="customerIndex form">

        <!-- ButtonGroup -->
        <div class="buttonGroup">
            <div class="btng_left">
                <Input placeholder="请输入客户名" style="width: auto" />
                <Button type="primary" class="search"><Icon type="md-search" />搜索</Button>
                <Button type="success"><Icon type="md-add" />添加</Button>
                <Button type="error"><Icon type="md-trash" />批量停止营业</Button>
            </div>
            <div class="btng_right">
                <Button class="excel" type="success" @click="exportData()"><Icon type="md-grid" />导出至EXCLE</Button>
            </div>
        </div>

        <!-- Grid -->
        <div class="Grid">
            <Table border @on-selection-change="check" size="small" ref="selection" :columns="col" :data="dataset"></Table>
            <Page :total="total" :current="current" :page-size="pageSize" show-total show-elevator />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // page
            total: 100,     // 总条数
            current: 1,     // 当前页
            pageSize: 20,   // 每页数量

            col: [      // 列值
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '客户名',
                    key: 'name'
                },
                {
                    title: '电话',
                    key: 'tel'
                },
                {
                    title: '备用电话',
                    key: 'standby'
                },
                {
                    title: '邮箱',
                    key: 'email'
                },
                {
                    title: '地址',
                    key: 'address'
                },
                {
                        title: '编辑 修改政策 停业',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('icon', {
                                    props: {
                                        type: 'md-create'
                                    },
                                    style: {
                                        marginRight: '8px',
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                        }
                                    }
                                }),
                                h('Icon', {
                                    props: {
                                        type: 'md-paper'
                                    },
                                    style: {
                                        marginRight: '8px',
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    },
                                    on: {
                                        click: () => {
                                            // this.remove(params.index)
                                        }
                                    }
                                }),
                                h('Icon', {
                                    props: {
                                        type: 'md-trash'
                                    },
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    },
                                    on: {
                                        click: () => {
                                            // this.remove(params.index)
                                        }
                                    }
                                })
                            ]);
                        }
                    }
            ],
            dataset:[       // 数据
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************"},
            ],

            checkdata:[    // 选中数据

            ]
        }
    },

    methods:{
        check:function(e){
            this.checkdata = e;
        },

        exportData () {
            this.$refs.selection.exportCsv({
                filename: '客户表',
                columns: this.col.filter((col, index) => index),
                data: this.dataset.filter((data, index) => index)
            });
        }   
    }
}
</script>

<style scoped>

</style>

