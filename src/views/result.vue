<template>
    <div class="result-wrapper">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="result-breadcrumb">
            <el-breadcrumb-item to="index">首页</el-breadcrumb-item>
            <el-breadcrumb-item>结果页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="result-content-wrapper">
            <div class="result-main-content">
                <div class="result-filter-wrapper">
                    filter-wrapper
                </div>
            </div>
            <div class="result-guess-like">
                <h4 class="result-guess-title">猜你喜欢</h4>
                <ul class="guess-wrapper">
                    <li class="guess-card"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { elBreadcrumb, elBreadcrumbItem } from 'element-ui'
export default {
    name: 'result',
    component: {
        elBreadcrumb,
        elBreadcrumbItem
    },
    data() {
        return {
            data: 'result page!!!'
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
            .result-guess-title {
                margin: 0 0 12px;
                font-size: 16px;
                line-height: 22px;
                color: #333;
            }
            .guess-wrapper {
                width: 100%;
                .guess-card {
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>
