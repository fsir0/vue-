<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/page1">Page1</router-link>
        </div>
        <router-view />
        <!-- <div v-if="cloadingFlag" class="app-loading"></div> -->
        <div v-if="cloadingFlag" class="my-loading all-loading">
            <div class="my-loading-box">
                <div class="loading-bol"></div>
                <div class="loading-bol"></div>
                <div class="loading-bol"></div>
                <div class="loading-bol"></div>
                <div class="loading-bol"></div>
                <div class="loading-bol"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            cloadingFlag: state => state.loadingFlag
    })
    }
};
</script>
<!-- 此处定义全局样式，也可采用引入的方式 -->
<style lang="less" src="./assets/common/common.less"></style>
<style>
#app {
    text-align: center;
    margin-top: 60px;
}
.all-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
