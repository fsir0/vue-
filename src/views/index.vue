<template>
    <div class="index">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="10">
                        header-left
                    </el-col>
                    <el-col :span="14">
                        header-right
                    </el-col>
                </el-row>
                <el-row>
                    search
                </el-row>
            </el-header>
            <el-main>main</el-main>
        </el-container>
    </div>
</template>

<script>
import { elContainer, elHeader, elMain, elRow, elCol } from 'element-ui'
export default {
    name: 'index',
    component: {
        elContainer,
        elHeader,
        elMain,
        elRow,
        elCol
    }
}
</script>
