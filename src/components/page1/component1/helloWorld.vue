<template>
    <div class="hello">
        <input type="text" :value="initData" />
        <input type="text" :value="stateData" />
        <input type="hidden" :value="stateListData2" />
        <button class="hello-btn" @click="clickme">hellow-btn</button>
        <v-table
            class="mt20"
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
        <el-table
            v-loading="stateListData3.loading"
            :data="stateListData3.list"
            style="width: 100%; text-align: center;"
        >
            <el-table-column
                prop="id"
                label="id"
                width="40"
            />
            <el-table-column
                prop="userId"
                label="用户id"
                width="70"
            />
            <el-table-column
                prop="title"
                label="标题"
                width="200"
            >
                <template slot-scope="prop">
                    <span class="el-table-title">{{prop.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="body"
                label="内容"
                width="400"
            >
                <template slot-scope="prop">
                    <span class="el-table-body">{{prop.row.body}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="operate"
                label="操作"
                width="150"
            >
                <template slot-scope="prop">
                    <span class="operate-btn" @click="elTableClick(prop)">click{{prop.$index}}</span>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="pageSizeChange"
            @current-change="pageChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="stateListData3.total"
        />
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
        <button @click="tohome">home</button>
        <div>
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
    </div>
</template>
<script src="./helloWorld.js"></script>
<style scoped lang="less" src="./helloWord.less"></style>
<!-- 定义自定义组件样式 -->
<style lang="less" src="./component.less"></style>
