<template>
    <div class="hello">
        <input type="text" :value="initData" />
        <input type="text" :value="stateData" />
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
        </ul>
    </div>
</template>
<script src="./helloWorld.js"></script>
<style scoped lang="less" src="./helloWord.less"></style>
