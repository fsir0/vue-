<template>
    <div class="index">
        <el-container>
            <el-header style="height: auto;">
                <my-header />
            </el-header>
            <el-main>main</el-main>
            <el-footer style="height: auto;">footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import { elContainer, elHeader, elMain } from 'element-ui'
import myHeader from '../components/index/header/header.vue'
export default {
    name: 'index',
    component: {
        elContainer,
        elHeader,
        elMain
    },
    components: {
        myHeader
    }
}
</script>
