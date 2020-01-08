<template>
    <div class="log-wrapper">
        <el-row class="title">
            <i class="logo el-icon-platform-eleme" />
            <h2>煤炭</h2>
        </el-row>
        <el-row class="content">
            <el-col :span="12">
                <div class="propagrand-img">
                    <img
                        src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
                    />
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
                                <i class="el-icon-mobile-phone" />
                            </router-link>
                        </el-col>
                    </el-row>
                    <el-row class="input-row">
                        <el-input placeholder="手机号" v-model="phone">
                            <template slot="prepend" class="label">+86 ></template>
                        </el-input>
                    </el-row>
                    <el-row class="input-row">
                        <el-input placeholder="密码" v-model="psw" show-password>
                            <template slot="prepend" class="label">
                                <i class="el-icon-unlock" />
                            </template>
                        </el-input>
                    </el-row>
                    <el-row class="forget">
                        <span>
                            <router-link to="/login">忘记密码？</router-link>
                        </span>
                    </el-row>
                    <el-row>
                        <span class="regn-btn">登陆</span>
                    </el-row>
                    <el-row class="no-account-tips">
                        <span>还没有账号？</span>
                        <router-link to="/regin">免费注册</router-link>
                    </el-row>
                    <el-row class="another-plat">
                        <span>用合作平台账号登陆</span>
                    </el-row>
                    <el-row>
                        <div class="plat-wrapper">
                            <i class="el-icon-eleme" />
                            <i class="el-icon-platform-eleme" />
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
            <p class="footer-record">©️2020 美团网团购 meituan.com 京ICP证070791号 京公安网备11010502025545号</p>
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
        color: #666;
        .propagrand-img {
            width: 480px;
            height: 370px;
            img {
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.4);
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
                text-align: right;
                a {
                    color: #444;
                }
                i {
                    font-size: 14px;
                }
            }
            .input-row {
                & + .input-row {
                    margin-top: 16px;
                }
                .el-input-group__prepend {
                    border-color: #999;
                    width: 50px;
                    text-align: center;
                    padding: 0;
                }
                .el-input__inner {
                    border-color: #999;
                }
            }
            .forget {
                text-align: right;
                height: 14px;
                line-height: 14px;
                a {
                    color: #fe8c00;
                    font-size: 12px;
                }
            }
            .regn-btn {
                display: inline-block;
                width: 100%;
                height: 34px;
                margin-top: 16px;
                line-height: 34px;
                text-align: center;
                border-radius: 2px;
                background: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
                cursor: pointer;
                user-select: none;
            }
            .no-account-tips {
                font-size: 14px;
                a {
                    color: #fe8c00;
                }
            }
            .another-plat {
                width: 100%;
                height: 10px;
                line-height: 20px;
                margin-bottom: 20px;
                text-align: center;
                border-bottom: 1px solid #ccc;
                span {
                    display: inline-block;
                    font-size: 14px;
                    background: #fff;
                }
            }
            .plat-wrapper {
                width: 100%;
                text-align: center;
                font-size: 0;
                i {
                    font-size: 26px;
                    margin: 0 10px;
                    cursor: pointer;
                    user-select: none;
                    &:hover {
                        color: #fe8c00;
                    }
                }
            }
        }
    }
    .footer {
        width: 100%;
        margin: 70px auto 30px;
        .footer-nav {
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            font-size: 0;
            height: 50px;
            line-height: 50px;
            .footer-nav-card {
                position: relative;
                display: inline-block;
                vertical-align: top;
                font-size: 12px;
                margin-right: 32px;
                &::after {
                    content: '';
                    position: absolute;
                    top: 19px;
                    right: -16px;
                    width: 1px;
                    height: 12px;
                    background-color: #eee;
                }
                &:nth-last-child(1)::after {
                    display: none;
                }
                a {
                    color: #999;
                }
            }
        }
        .footer-record {
            margin: 14px 0 0;
            color: #999;
            font-size: 12px;
        }
    }
}
</style>
