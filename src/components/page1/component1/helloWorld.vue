<template>
    <div class="hello">
        <input type="text" :value="initData" />
        <input type="text" :value="stateData" />
        <input type="hidden" :value="stateListData2" />
        <button class="hello-btn" @click="clickme">hellow-btn</button>
        <el-table
            v-loading="stateListData3.loading"
            :data="stateListData3.list"
            :border="true"
            class="table"
        >
            <el-table-column prop="id" label="id" width="40" />
            <el-table-column prop="userId" label="用户id" width="70" />
            <el-table-column prop="title" label="标题" width="200">
                <template slot-scope="prop">
                    <span class="el-table-title">{{prop.row.title}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="body" label="内容" width="400">
                <template slot-scope="prop">
                    <span class="el-table-body">{{prop.row.body}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="operate" label="操作">
                <template slot-scope="prop">
                    <el-button @click="operateMethod(prop)">click{{prop.$index}}</el-button>
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
        <span>{{ formatTime(time, 'YY-mm-dd HH:mm') }}</span>
        <div>
            <el-button @click="tohome">to home</el-button>
        </div>
    </div>
</template>
<script src="./helloWorld.js"></script>
<style scoped lang="less" src="./helloWord.less"></style>
