<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/page1">Page1</router-link>
        </div>
        <router-view />
    </div>
</template>
<!-- 此处定义全局样式，也可采用引入的方式 -->
<style lang="less" src="./assets/common/common.less"></style>
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
}
button {
    vertical-align: middle;
    width: 50px;
    height: 20px;
    border: none;
    background-color: #00d3ff;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
}
</style>
