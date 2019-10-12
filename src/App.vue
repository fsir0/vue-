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
        <Modal
            :showModal="modal"
            @confirm="confirm"
            @cancel="cancel"
        >
            <template v-slot:header>
                <b>标题</b>
            </template>
            <span>test body</span>
        </Modal>
        <button @click='showModal'>展示弹窗</button>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Modal from './components/common/modal/modal.vue';
export default {
    data() {
        return {
            modal: false
        }
    },
    components: {
        Modal
    },
    computed: {
        ...mapState({
            cloadingFlag: state => state.loadingFlag
        })
    },
    methods: {
        showModal() {
            this.modal = true;
        },
        confirm(e) {
            // eslint-disable-next-line no-console
            console.log(e);
            this.modal = false;
        },
        cancel(e) {
            // eslint-disable-next-line no-console
            console.log(e, 'cancel');
            this.modal = false;
        }
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
