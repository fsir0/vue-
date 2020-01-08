<template>
    <el-container class="reg-wrapper">
        <el-header class="reg-header" style="height: auto;">
            <el-row type="flex" justify="space-between" class="reg-header-wrapper">
                <el-col :span="4" class="logo">
                    <router-link to="/">
                        <i class="el-icon-platform-eleme" />
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
                    <input
                        :class="{'valid-input': true, 'valid-faild': (phoneMsg.flag === 2)}"
                        type="text"
                        maxlength="11"
                        v-model="phone"
                        @focus="focusInp('phone')"
                        @blur="blurInp('phone')"
                    />
                    <span class="message" v-if="(phoneMsg.flag === 1 || phoneMsg.flag === 2)">
                        <i class="el-icon-remove" v-if="phoneMsg.flag === 2" />
                        <i class="el-icon-success" v-if="phoneMsg.flag === 1" />
                        {{phoneMsg.msg}}
                    </span>
                    <span class="pre-message" v-if="phoneMsg.flag === 3">注册成功后，全美团通用</span>
                </div>
                <div class="content-row">
                    <span class="get-valid-num">免费获取短信动态码</span>
                </div>
                <div class="content-row">
                    <span class="label">短信动态码</span>
                    <input
                        :class="{'valid-input': true, 'valid-faild': (volidNumMsg.flag === 2)}"
                        type="text"
                        maxlength="6"
                        v-model="volidNum"
                        @focus="focusInp('valid')"
                        @blur="blurInp('valid')"
                    />
                    <span class="message" v-if="(volidNumMsg.flag === 1 || volidNumMsg.flag === 2)">
                        <i class="el-icon-remove" v-if="volidNumMsg.flag === 2" />
                        <i class="el-icon-success" v-if="volidNumMsg.flag === 1" />
                        {{volidNumMsg.msg}}
                    </span>
                </div>
                <div class="content-row">
                    <span class="label">创建密码</span>
                    <input
                        :class="{'valid-input': true, 'valid-faild': (pswMsg.flag === 2)}"
                        type="password"
                        maxlength="50"
                        v-model="psw"
                        @focus="focusInp('psw')"
                        @blur="blurInp('psw')"
                    />
                    <span class="message" v-if="(pswMsg.flag === 1 || pswMsg.flag === 2)">
                        <i class="el-icon-remove" v-if="pswMsg.flag === 2" />
                        <i class="el-icon-success" v-if="pswMsg.flag === 1" />
                        {{pswMsg.msg}}
                    </span>
                </div>
                <div :class="'content-row stronger-wrapper ' + strongerClass">
                    <span class="stronger">弱</span>
                    <span class="stronger">中</span>
                    <span class="stronger">强</span>
                </div>
                <div class="content-row">
                    <span class="label">确认密码</span>
                    <input
                        :class="{'valid-input': true, 'valid-faild': (subPswMsg.flag === 2)}"
                        type="password"
                        maxlength="50"
                        v-model="subPsw"
                        @focus="focusInp('sub')"
                        @blur="blurInp('sub')"
                    />
                    <span class="message" v-if="(subPswMsg.flag === 1 || subPswMsg.flag === 2)">
                        <i class="el-icon-remove" v-if="subPswMsg.flag === 2" />
                        <i class="el-icon-success" v-if="subPswMsg.flag === 1" />
                        {{subPswMsg.msg}}
                    </span>
                </div>
                <div class="content-row">
                    <span class="submit-btn" @click="submitReg">同意以下协议并注册</span>
                </div>
                <div class="content-row">
                    <router-link to="/">《美团网用户协议》</router-link>
                    <router-link to="/">《美团网隐私协议》</router-link>
                </div>
            </el-row>
        </el-main>
        <el-footer class="content-bottom">
            <router-link to="/">©meituan.com 京ICP证070791号 京公网安备11010502025545号</router-link>
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
    },
    data() {
        return {
            phone: '',
            phoneMsg: {
                flag: 3,
                msg: ''
            },
            volidNum: '',
            volidNumMsg: {
                flag: 0,
                msg: ''
            },
            psw: '',
            pswMsg: {
                flag: 0,
                msg: ''
            },
            subPsw: '',
            subPswMsg: {
                flag: 0,
                msg: ''
            }
        }
    },
    computed: {
        strongerClass() {
            if (!this.psw) {
                return ''
            }
            // 纯数字
            if (/^\d+$/.test(this.psw)) {
                if (this.psw.length > 30) {
                    return 'stronger-h'
                } else if (this.psw.length >= 20) {
                    return 'stronger-m'
                }
                return 'stronger-l'
            }
            if (this.psw.length > 10) {
                return 'stronger-h'
            } else if (this.psw.length >= 6) {
                return 'stronger-m'
            }
            return 'stronger-l'
        }
    },
    methods: {
        focusInp(type) {
            switch (type) {
            case 'phone':
                this.phoneMsg = {
                    flag: 0,
                    msg: ''
                }
                break
            case 'valid':
                this.volidNumMsg = {
                    flag: 0,
                    msg: ''
                }
                break
            case 'psw':
                this.pswMsg = {
                    flag: 0,
                    msg: ''
                }
                break
            case 'sub':
                this.subPswMsg = {
                    flag: 0,
                    msg: ''
                }
                break
            default:
                break
            }
        },
        blurInp(type) {
            switch (type) {
            case 'phone':
                if (!this.phone) {
                    this.phoneMsg = {
                        flag: 2,
                        msg: '请输入您的手机号码'
                    }
                } else if (/^1[3-9]\d{9}$/.test(this.phone)) {
                    this.phoneMsg = {
                        flag: 1,
                        msg: ''
                    }
                } else {
                    this.phoneMsg = {
                        flag: 2,
                        msg: '请输入正确的11位手机号码'
                    }
                }
                break
            case 'valid':
                if (!this.volidNum) {
                    this.volidNumMsg = {
                        flag: 2,
                        msg: '请输入短信动态码'
                    }
                } else if (this.volidNum.length === 6) {
                    this.volidNumMsg = {
                        flag: 1,
                        msg: ''
                    }
                } else {
                    this.volidNumMsg = {
                        flag: 2,
                        msg: '输入错误，请重新输入'
                    }
                }
                break
            case 'psw':
                if (!this.psw) {
                    this.pswMsg = {
                        flag: 2,
                        msg: '请填写密码'
                    }
                } else if (this.psw.length >= 8) {
                    this.pswMsg = {
                        flag: 1,
                        msg: ''
                    }
                } else {
                    this.pswMsg = {
                        flag: 2,
                        msg: '密码太短，至少8个字符'
                    }
                }
                break
            case 'sub':
                if (!this.subPsw) {
                    this.subPswMsg = {
                        flag: 2,
                        msg: '请再次输入密码'
                    }
                } else if (this.subPsw === this.psw) {
                    this.subPswMsg = {
                        flag: 1,
                        msg: ''
                    }
                } else {
                    this.subPswMsg = {
                        flag: 2,
                        msg: '两次输入的密码不一致，请重新输入'
                    }
                }
                break
            default:
                break
            }
        },
        submitReg() {
            if (!this.phone) {
                this.phoneMsg = {
                    flag: 2,
                    msg: '请输入您的手机号码'
                }
            } else if (/^1[3-9]\d{9}$/.test(this.phone)) {
                this.phoneMsg = {
                    flag: 1,
                    msg: ''
                }
            } else {
                this.phoneMsg = {
                    flag: 2,
                    msg: '请输入正确的11位手机号码'
                }
            }
            if (!this.volidNum) {
                this.volidNumMsg = {
                    flag: 2,
                    msg: '请输入短信动态码'
                }
            } else if (this.volidNum.length === 6) {
                this.volidNumMsg = {
                    flag: 1,
                    msg: ''
                }
            } else {
                this.volidNumMsg = {
                    flag: 2,
                    msg: '输入错误，请重新输入'
                }
            }
            if (!this.psw) {
                this.pswMsg = {
                    flag: 2,
                    msg: '请填写密码'
                }
            } else if (this.psw.length >= 8) {
                this.pswMsg = {
                    flag: 1,
                    msg: ''
                }
            } else {
                this.pswMsg = {
                    flag: 2,
                    msg: '密码太短，至少8个字符'
                }
            }
            if (!this.subPsw) {
                this.subPswMsg = {
                    flag: 2,
                    msg: '请再次输入密码'
                }
            } else if (this.subPsw === this.psw) {
                this.subPswMsg = {
                    flag: 1,
                    msg: ''
                }
            } else {
                this.subPswMsg = {
                    flag: 2,
                    msg: '两次输入的密码不一致，请重新输入'
                }
            }
            if (this.phoneMsg.flag === 1 && this.volidNumMsg.flag === 1 && this.pswMsg.flag === 1 && this.subPswMsg.flag === 1) {
                // eslint-disable-next-line no-console
                console.log('reg success')
            }
        }
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
                    vertical-align: middle;
                    margin-right: 10px;
                    color: #666;
                }
                a {
                    display: inline-block;
                    vertical-align: middle;
                    width: 46px;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    font-size: 12px;
                    border-radius: 2px;
                    color: #222;
                    background-color: #f80;
                    letter-spacing: 2px;
                    text-indent: 1px;
                }
            }
        }
    }
    .content-wrapper {
        width: 960px;
        margin: 30px auto 40px;
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
                    cursor: default;
                }
                .valid-input {
                    vertical-align: middle;
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
                    vertical-align: middle;
                    height: 36px;
                    line-height: 36px;
                    font-size: 12px;
                    font-size: #666;
                    i {
                        height: 36px;
                        line-height: 36px;
                        font-size: 16px;
                        vertical-align: top;
                    }
                    .el-icon-remove {
                        color: #f80;
                    }
                    .el-icon-success {
                        color: #0c2;
                    }
                }
                .pre-message {
                    display: inline-block;
                    vertical-align: middle;
                    color: #999;
                    line-height: 36px;
                    font-size: 12px;
                }
                .get-valid-num {
                    display: inline-block;
                    padding: 2px 6px;
                    font-size: 12px;
                    color: #333;
                    border-bottom: 1px solid #aaa;
                    background: #e3e3e3;
                    cursor: pointer;
                    user-select: none;
                    &:hover {
                        background: #e9e9e9;
                        border-bottom-color: #b3b3b3;
                    }
                }
                .submit-btn {
                    display: inline-block;
                    vertical-align: middle;
                    width: 180px;
                    height: 34px;
                    background: linear-gradient(to right, #fb0, #f80);
                    color: #222;
                    font-weight: 700;
                    text-align: center;
                    line-height: 34px;
                    font-size: 14px;
                    border-radius: 2px;
                    user-select: none;
                    cursor: pointer;
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
                    transition: all linear 0.4s;
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
