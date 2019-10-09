<template>
    <div class="hello">
        <input type="text" :value="initData" />
        <input type="text" :value="stateData" />
        <input type="hidden" :value="stateListData2">
        <input type="hidden" :value="stateListData3">
        <button class="hello-btn" @click="clickme">hellow-btn</button>
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
            <li class="card">
                <span class="index">序号</span>
                <span class="index">userId</span>
                <span class="name">标题</span>
                <span class="address">内容</span>
            </li>
            <li class="card" v-for="prop1 in stateListData3" :key="prop1.id + prop1.title">
                <span class="index">{{prop1.id}}</span>
                <span class="index">{{prop1.userId}}</span>
                <span class="name">{{prop1.title}}</span>
                <span class="address">{{prop1.body}}</span>
            </li>
        </ul>
        <v-table
            style="width: 100%;"
            :width='1000'
            :columns="columns"
            :table-data="stateListData3"
            :show-vertical-border="false"
            is-horizontal-resize
        ></v-table>
    </div>
</template>
<script src="./helloWorld.js"></script>
<style scoped lang="less" src="./helloWord.less"></style>
<style lang="stylus" scoped>

</style>
