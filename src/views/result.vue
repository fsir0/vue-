<template>
    <div class="result-wrapper">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="result-breadcrumb">
            <el-breadcrumb-item to="index">首页</el-breadcrumb-item>
            <el-breadcrumb-item>结果页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="result-content-wrapper">
            <div class="result-main-content">
                <div class="result-filter-wrapper">
                    <result-filter @selectChange="handleSelectChange" />
                </div>
            </div>
            <div class="result-guess-like">
                <right-nav />
            </div>
        </div>
    </div>
</template>
<script>
import { elBreadcrumb, elBreadcrumbItem } from 'element-ui'
import resultFilter from '@/components/result/filter/filter.vue'
import rightNav from '@/components/result/rightNav/rightNav.vue'
export default {
    name: 'result',
    component: {
        elBreadcrumb,
        elBreadcrumbItem
    },
    components: {
        resultFilter,
        rightNav
    },
    data() {
        return {
            data: 'result page!!!'
        }
    },
    methods: {
        handleSelectChange(value) {
            // eslint-disable-next-line no-console
            console.log(value)
        }
    }
}
</script>
<style lang="less">
.result-wrapper {
    width: 1190px;
    margin: 0 auto 30px;
    .result-breadcrumb {
        padding: 15px 0;
    }
    .result-content-wrapper {
        width: 100%;
        .result-main-content {
            display: inline-block;
            width: 950px;
            .result-filter-wrapper {
                box-sizing: border-box;
                width: 100%;
                border: 1px solid #e5e5e5;
                background-color: #fff;
            }
        }
        .result-guess-like {
            float: right;
            width: 230px;
            box-sizing: border-box;
            padding: 16px 20px 0;
            border: 1px solid #e5e5e5;
            background-color: #fff;
            &::after {
                content: '';
                clear: both;
            }
        }
    }
}
</style>
