<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/page1">Page1</router-link>
        </div> -->
        <router-view />
        <!-- <div v-if="cloadingFlag" class="app-loading"></div> -->
        <div v-if="cloadingFlag" class="my-loading all-loading">
            <div class="my-loading-box">
                <div v-for="inx in 6" class="loading-bol" :key="inx"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            cloadingFlag: state => state.loadingFlag
        })
    }
}
</script>
<!-- 此处定义全局样式，也可采用引入的方式 -->
<style lang="less" src="./assets/common/common.less"></style>
<style>
.all-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.modal-content {
    display: inline-block;
    width: 500px;
    height: 300px;
}
</style>
