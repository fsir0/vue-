<template>
    <div id="app">
        <div id="nav">
            <!-- <router-link to="/">Home</router-link>|
            <router-link to="/page1">Page1</router-link>-->
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
        <Modal :showModal="modal" @confirm="confirm" @cancel="cancel">
            <template v-slot:header>
                <b>title</b>
            </template>
            <span class="modal-content">test body</span>
        </Modal>
        <Modal :showModal="modal1" @confirm="confirm1" @cancel="cancel1">
            <span>test body1</span>
            <button @click="test1">click show another init modal</button>
        </Modal>
        <Modal
            :showModal="modal2"
            :nofooter="false"
            @confirm="confirm2('datatt')"
            @cancel="cancel2"
        >
            <span>去page1页面？</span>
            <router-link to="/page1">去</router-link>
        </Modal>
        <button @click="showModal">展示弹窗</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Modal from './components/common/modal/modal.vue'
export default {
    data () {
        return {
            modal: false,
            modal1: false,
            modal2: false
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
        showModal () {
            this.modal = true
        },
        confirm (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            this.modal1 = true
        },
        cancel (e) {
            // eslint-disable-next-line no-console
            console.log(e, 'cancel')
            this.modal = false
        },
        confirm1 () {
            this.modal1 = false
        },
        cancel1 () {
            this.modal1 = false
        },
        test1 () {
            this.modal2 = true;
        },
        confirm2 (test) {
            // eslint-disable-next-line no-console
            console.log(test)
            this.modal2 = false
            // console.log(this.$router)
            // console.log(window.location.href)
            this.$router.push({ path: '/page1' })
        },
        cancel2 () {
            this.modal2 = false
        }
    }
}
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
.modal-content {
    display: inline-block;
    width: 500px;
    height: 300px;
}
</style>
