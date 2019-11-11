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
        <el-main class="content-wrapper">
            <el-row class="reg-content">
                <div class="content-row">
                    <span class="label">手机号</span>
                    <input class="valid-input" type="text" maxlength="11">
                    <span class="message">
                        <i class="el-icon-remove"/>
                        <i class="el-icon-success"/>
                        请输入你的手机号码
                    </span>
                    <span class="pre-message">
                        注册成功后，全美团通用
                    </span>
                </div>
                <div class="content-row">
                    <span class="get-valid-num">免费获取短信动态码</span>
                </div>
                <div class="content-row">
                    <span class="label">短信动态码</span>
                    <input class="valid-input" type="text">
                    <span class="message">
                        <i class="el-icon-remove"/>
                        <i class="el-icon-success"/>
                        输入错误，请重新输入
                    </span>
                </div>
                <div class="content-row">
                    <span class="label">创建密码</span>
                    <input class="valid-input" type="text">
                    <span class="message">
                        <i class="el-icon-remove"/>
                        <i class="el-icon-success"/>
                        密码太短，至少8个字符
                    </span>
                </div>
                <div class="content-row stronger-wrapper stronger-l">
                    <span class="stronger">弱</span>
                    <span class="stronger">中</span>
                    <span class="stronger">强</span>
                </div>
                <div class="content-row">
                    <span class="label">确认密码</span>
                    <input class="valid-input" type="text">
                    <span class="message">
                        <i class="el-icon-remove"/>
                        <i class="el-icon-success"/>
                        两次输入的密码不一致，请重新输入
                    </span>
                </div>
                <div class="content-row">
                    <span class="submit-btn">同意以下协议并注册</span>
                </div>
                <div class="content-row">
                    <router-link to="/">《美团网用户协议》</router-link>
                    <router-link to="/">《美团网隐私协议》</router-link>
                </div>
            </el-row>
        </el-main>
        <el-footer class="content-bottom">
            <router-link to="/">©meituan.com  京ICP证070791号  京公网安备11010502025545号</router-link>
        </el-footer>
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
    .content-wrapper {
        width: 960px;
        margin: 10px auto 40px;
        .reg-content {
            width: 100%;
            .content-row {
                position: relative;
                padding: 6px 0 6px 110px;
                .label {
                    position: absolute;
                    left: 0;
                    top: 6px;
                    width: 100px;
                    height: 36px;
                    line-height: 36px;
                    text-align: right;
                    font-size: 14px;
                    color: #333;
                }
                .valid-input {
                    box-sizing: border-box;
                    width: 260px;
                    height: 36px;
                    padding: 5px;
                    border: 1px solid #aaa;
                    outline: none;
                    margin-right: 10px;
                    &:focus {
                        border-color: #f80;
                    }
                }
                .valid-faild {
                    border-color: #f76120;
                }
                .message {
                    display: inline-block;
                    height: 36px;
                    line-height: 36px;
                    font-size: #666;
                    .el-icon-remove {
                        color: #f80;
                    }
                    .el-icon-success {
                        color: #0c2;
                    }
                }
                .pre-message {
                    display: inline-block;
                    color: #999;
                    font-size: 12px;
                }
                .get-valid-num {
                    display: inline-block;
                    padding: 4px 6px;
                    font-size: 12px;
                    color: #333;
                    border: 1px solid #e5e5e5;
                    background: linear-gradient(to bottom, #fefefe, #ccc);
                    box-shadow: 0 2px 5px -4px #aaa;
                    cursor: pointer;
                    user-select: none;
                }
                .submit-btn {
                    display: inline-block;
                    width: 180px;
                    height: 34px;
                    background: linear-gradient(to right, #fb0, #f80);
                    color: #222;
                    font-weight: 700;
                    text-align: center;
                    line-height: 34px;
                    font-size: 14px;
                }
                a {
                    font-size: 12px;
                    cursor: pointer;
                    color: #f80;
                }
            }
            .stronger-wrapper {
                position: relative;
                white-space: nowrap;
                width: 260px;
                height: 20px;
                padding: 0;
                margin-left: 110px;
                background-color: #eee;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background-color: #f76120;
                    transition: all linear .4s;
                }
                .stronger {
                    position: relative;
                    display: inline-block;
                    width: 85px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    border-right: 2px solid #fff;
                    color: #fff;
                    font-size: 12px;
                }
            }
            .stronger-l:before {
                width: 86px;
                background-color: #f80;
            }
            .stronger-m:before {
                width: 172px;
                background-color: #fd0;
            }
            .stronger-h:before {
                width: 100%;
                background-color: #0c2;
            }
        }
    }
    .content-bottom {
        text-align: center;
        padding-top: 20px;
        border-top: 1px solid #eee;
        a {
            color: #999;
            font-size: 12px;
            cursor: pointer;
        }
    }
}
</style>
