<template>
    <el-container class="reg-wrapper">
        <el-header class="reg-header" style="height: auto;">
            <el-row type="flex" justify="space-between" class="reg-header-wrapper">
                <el-col :span="4" class="logo">
                    <router-link to="/">
                        <i class="el-icon-platform-eleme"/>
                    </router-link>
                </el-col>
                <el-col :span="4" class="login-link">
                    <span class="des">已有美团账号？</span>
                    <router-link to="/login">登录</router-link>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="reg-content">Main</el-main>
    </el-container>
</template>
<script>
import { elContainer, elHeader, elMain, elRow, elCol } from 'element-ui'
export default {
    name: 'reg',
    component: {
        elContainer,
        elHeader,
        elMain,
        elRow,
        elCol
    }
}
</script>
<style lang="less">
body {
    background-color: #fff;
}
.reg-wrapper {
    width: 100%;
    .reg-header {
        width: 100%;
        background-color: #fff;
        border-bottom: 2px solid #d8d8d8;
        .reg-header-wrapper {
            width: 980px;
            margin: 0 auto;
            height: 60px;
            line-height: 60px;
            .logo a {
                color: #f80;
                font-size: 50px;
            }
            .login-link {
                text-align: right;
                font-size: 14px;
                .des {
                    display: inline-block;
                    margin-right: 10px;
                    color: #666;
                }
                a {
                    display: inline-block;
                    vertical-align: text-bottom;
                    width: 46px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    font-size: 12px;
                    border-radius: 2px;
                    color: #222;
                    background-color: #f80;
                }
            }
        }
    }
    .reg-content {
        width: 960px;
        margin: 10px auto 40px;
    }
}
</style>
