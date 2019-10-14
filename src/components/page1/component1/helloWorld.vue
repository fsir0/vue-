<template>
    <div class="hello">
        <input type="text" :value="initData" />
        <input type="text" :value="stateData" />
        <input type="hidden" :value="stateListData2" />
        <button class="hello-btn" @click="clickme">hellow-btn</button>
        <v-table
            class="plugin-table"
            style="width: 100%;"
            :width="1000"
            :columns="columns"
            :table-data="stateListData3.list"
            :show-vertical-border="false"
            :is-loading="stateListData3.loading"
            is-horizontal-resize
            @on-custom-comp="operateMethod"
        ></v-table>
        <div class="pagination-wrapper">
            <v-pagination
                @page-change="pageChange"
                @page-size-change="pageSizeChange"
                :total="stateListData3.total"
                :page-size="pageSize"
                :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
            ></v-pagination>
        </div>
        <ul class="wrapper">
            <h5 class="tit">{{msg}}</h5>
            <li class="card">
                <span class="index">序号</span>
                <span class="name">名</span>
                <span class="address">住址</span>
            </li>
            <li class="card" v-for="(prop, index) in stateListData1" :key="index">
                <span class="index">{{index + 1}}</span>
                <span class="name">{{prop.name}}</span>
                <span
                    class="address"
                >{{prop.address.city + ',' + prop.address.street + ',' + prop.address.suite}}</span>
            </li>
        </ul>
        <span>{{ formatTime(time, 'YY-mm-dd HH:mm') }}</span>
    </div>
</template>
<script src="./helloWorld.js"></script>
<style scoped lang="less" src="./helloWord.less"></style>
<!-- 定义自定义组件样式 -->
<style lang="less" src="./component.less"></style>
