<template>
    <div class="nav-wrapper">
        <el-row class="nav-container">
            <el-col :span="5" class="nav">
                <h5 class="nav-tit">全部分类</h5>
                <ul class="main-nav" @mouseleave="leaveNav">
                    <li class="main-list" v-for="(ele, inx) in firNavData.list" @mouseenter="hoverNav(inx)" :key="inx">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text" v-for="(ele1, inx1) in ele.nameList" :key="(inx + '-' + inx1)">
                            <span v-if="inx1 != 0">/</span>
                            <router-link :to="ele1.link || ''">{{ele1.name}}<span v-if="ele1.isHot" class="hot">HOT</span></router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                </ul>
                <ul v-if="showSecNav" class="sec-nav" @mouseenter="enterSecNav" @mouseleave="leaveNav">
                    <li class="sec-nav-card" v-for="(ele, inx) in secNavData" :key="inx">
                        <dl>
                            <dt>
                                <router-link class="tit" :to="ele.link || ''">{{ele.name}}</router-link>
                                <router-link class="more" :to="ele.link || ''">更多</router-link>
                            </dt>
                            <dd v-for="(ele1, inx1) in ele.list" :key="(inx + '-' + inx1)"><router-link :to="ele1.link || ''">{{ele1.name}}</router-link></dd>
                        </dl>
                    </li>
                </ul>
            </el-col>
            <el-col :span="14" class="nav-content-wrapper">
                <el-row>
                    <ul class="content-nav">
                        <li><router-link to="/">美团外卖</router-link></li>
                        <li><router-link to="/">猫眼电影</router-link></li>
                        <li><router-link to="/">美团酒店</router-link></li>
                        <li><router-link to="/">民宿/公寓</router-link></li>
                        <li><router-link to="/">商家入驻</router-link></li>
                        <li><router-link to="/">美团公益</router-link></li>
                    </ul>
                </el-row>
                <el-row class="content-card">
                    <div class="carousel-wrapper">
                        <el-carousel height="240px">
                            <el-carousel-item class="carousel-item-card">
                                <router-link to="/">1</router-link>
                            </el-carousel-item>
                            <el-carousel-item class="carousel-item-card">
                                <router-link to="/">2</router-link>
                            </el-carousel-item>
                            <el-carousel-item class="carousel-item-card">
                                <router-link to="/">3</router-link>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="adver-t">
                        <router-link to="/">topadver</router-link>
                    </div>
                </el-row>
                <el-row class="content-card">
                    <div class="adver-bl"><router-link to="/">bottom left</router-link></div>
                    <div class="adver-bm"><router-link to="/">bottom middle</router-link></div>
                    <div class="adver-br"><router-link to="/">bottom right</router-link></div>
                </el-row>
            </el-col>
            <el-col :span="5" class="user">
                <el-row class="user-info">
                    <div class="header-img">
                        <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="HD-img">
                    </div>
                    <p class="welcome-text">Hi！你好</p>
                    <el-button type="info" round class="user-button">注册</el-button>
                    <el-button type="info" round class="user-button">立即登录</el-button>
                </el-row>
                <el-row class="app-scan">
                    <div class="app-img">
                        <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="手机版App二维码">
                    </div>
                    <p class="des">美团APP手机版</p>
                    <p class="sl">
                        <span class="red">1元起</span>
                        <span class="gary">吃喝玩乐</span>
                    </p>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./nav.js"></script>
<style lang="less" src="./nav.less"></style>
