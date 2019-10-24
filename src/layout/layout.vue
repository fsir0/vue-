<template>
    <div class="index">
        <el-container>
            <el-header style="height: auto;">
                <my-header />
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer style="height: auto;">
                <my-footer />
            </el-footer>
        </el-container>
    </div>
</template>
<script>
import { elContainer, elHeader, elMain } from 'element-ui'
import myHeader from './header/header.vue'
import myFooter from './footer/footer.vue'
export default {
    name: 'index',
    component: {
        elContainer,
        elHeader,
        elMain
    },
    components: {
        myHeader,
        myFooter
    }
}
</script>
<style lang="less" src="@/assets/common/common.less"></style>
