<template>
    <div class="index">
        <el-container>
            <el-header style="height: auto;">
                <my-header />
            </el-header>
            <el-main>
                <my-nav />
            </el-main>
            <el-footer style="height: auto;">
                <my-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import { elContainer, elHeader, elMain } from 'element-ui'
import myHeader from '@/components/index/header/header.vue'
import myFooter from '@/components/index/footer/footer.vue'
import myNav from '@/components/index/nav/nav.vue'
export default {
    name: 'index',
    component: {
        elContainer,
        elHeader,
        elMain
    },
    components: {
        myHeader,
        myFooter,
        myNav
    }
}
</script>
