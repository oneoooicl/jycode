<template>
    <div class="table_add">
        <table>
            <thead>
                <th v-for="item in datacol" :key="item.key">
                    {{item.title}}
                </th>
            </thead>
        </table>
    </div>
</template>

<script>
export default {
    props: ["datacol"],
}
</script>

<style lang="less" scoped>
    table{
        width: 100%;
        
    }
</style>

