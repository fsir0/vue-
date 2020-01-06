<template>
    <div class="log-wrapper">
        <el-row class="title">
            <i class="logo el-icon-platform-eleme"/>
            <h2>煤炭</h2>
        </el-row>
        <el-row class="content">
            <el-col :span="12">
                <div class="propagrand-img">
                    <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="input-wrapper">
                    <el-row>
                        <el-col :span="12" class="input-title">
                            <span>账号登录</span>
                        </el-col>
                        <el-col :span="12" class="change-login-style">
                            <router-link to="/index">
                                手机动态码登录
                                <i class="el-icon-mobile-phone"/>
                            </router-link>
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
                    <el-row>
                        <span class="regn-btn">登陆</span>
                    </el-row>
                    <el-row>
                        <span class="no-account-tips">还没有账号？</span>
                        <router-link to="/regin">免费注册</router-link>
                    </el-row>
                    <el-row>
                        <span class="another-plat">用合作平台账号登陆</span>
                    </el-row>
                    <el-row>
                        <div class="plat-wrapper">
                            <i class="el-icon-eleme"/>
                            <i class="el-icon-platform-eleme"/>
                        </div>
                    </el-row>
                </div>
            </el-col>
        </el-row>
        <el-row class="footer">
            <ul class="footer-nav">
                <li class="footer-nav-card">
                    <router-link to="/index">关于美团</router-link>
                </li>
                <li class="footer-nav-card">
                    <router-link to="/index">加入我们</router-link>
                </li>
                <li class="footer-nav-card">
                    <router-link to="/index">商家入住</router-link>
                </li>
                <li class="footer-nav-card">
                    <router-link to="/index">帮助中心</router-link>
                </li>
                <li class="footer-nav-card">
                    <router-link to="/index">美团手机版</router-link>
                </li>
            </ul>
            <p class="footer-record">©️2020 美团网团购meituan.com 京ICP证070791号 京公安网备11010502025545号</p>
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
    width: 980px;
    margin: 40px auto 0;
    .title {
        font-size: 30px;
        line-height: 50px;
        .logo {
            display: inline-block;
            vertical-align: top;
            font-size: 50px;
        }
        h2 {
            display: inline-block;
            vertical-align: top;
            margin: 0 0 0 10px;
        }
    }
    .content {
        margin-top: 30px;
        .propagrand-img {
            width: 480px;
            height: 370px;
            img {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
            }
        }
        .input-wrapper {
            width: 270px;
            margin: 40px auto 0;
            .el-row {
                margin: 8px 0;
            }
            .input-title {
                font-size: 14px;
            }
            .change-login-style {
                font-size: 12px;
            }
            .change-login-style {
                text-align: right;
                a {
                    color: #444;
                }
            }
        }
    }
}
</style>
