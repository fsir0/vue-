<template>
    <div class="log-wrapper">
        <el-row class="title">
            <h2>煤炭</h2>
        </el-row>
        <el-row class="content">
            <el-col :span="12">
                <div class="propagrand-img">
                    <img src="" alt="">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="input-wrapper">
                    <el-row>
                        <el-col :span="12">
                            <span class="input-title">账号登录</span>
                        </el-col>
                        <el-col :span="12">
                            <span class="change-login-style">
                                手机动态码登录
                                <i class="el-icon-mobile-phone"/>
                            </span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-input placeholder="手机号" v-model="phone">
                            <template slot="prepend">+86 ></template>
                        </el-input>
                    </el-row>
                    <el-row>
                        <el-input placeholder="密码" v-model="psw" show-password>
                            <template slot="prepend">
                                <i class="el-icon-unlock"/>
                            </template>
                        </el-input>
                    </el-row>
                    <el-row>
                        <span>
                            <router-link to="/login">忘记密码？</router-link>
                        </span>
                    </el-row>

                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { elRow, elCol, elInput } from 'element-ui'
export default {
    name: 'login',
    component: {
        elRow,
        elCol,
        elInput
    },
    data() {
        return {
            phone: '',
            psw: ''
        }
    }
}
</script>
<style lang="less">
.log-wrapper {
    width: 100%;
}
</style>
