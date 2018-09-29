<template>
    <div class="customerIndex form">

        <!-- ButtonGroup -->
        <div class="buttonGroup">
            <div class="btng_left">
                <Select v-model="searchVal" style="width:90px;margin-right:-5px;border:0 none;">
                    <Option v-for="(item, key) in searchList" :value="key" :key="key">{{ item }}</Option>
                </Select>
                <Input placeholder="请输入客户名" style="width: auto" />
                <Button type="primary" class="search"><Icon type="md-search" />搜索</Button>
                <Button type="success"><Icon type="md-add" />添加</Button>
                <Button type="error"><Icon type="md-trash" />批量停止营业</Button>
            </div>
            <div class="btng_right">
                <Select v-model="selectVal" style="width:150px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
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

            searchVal:0,
            selectVal:0,
            searchList:[
                "客户名", "电话" ,"备用电话", "邮箱", "地址"
            ],
            cityList:[  // 排序
                { value: 0, label:"默认排序"},
                { value: 1, label:"按客户名称从低到高"},
                { value: 2, label:"按客户名称从高到低"},
                { value: 3, label:"按地址从低到高"},
                { value: 4, label:"按地址从高到低"}
            ],

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
                        title: '编辑 修改政策 停业 对比',
                        key: 'action',
                        width: 170,
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
                                        type: 'md-git-branch'
                                    },
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    },
                                    on: {
                                        click: () => {
                                            this.$emit("winData", params.row);
                                        }
                                    }
                                }),
                            ]);
                        }
                    }
            ],
            dataset:[       // 数据
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
                {name: "金源纸业", tel:"1310*******", standby:"159********", email:"jy@163.com", address:"保定市*************",  olddate:""},
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

