<template>
    <div class="header-wrapper">
        <el-row class="header-n">
            <el-col class="header-nl" :span="11">
                <i class="el-icon-location-outline"/>
                <p class="city-name">{{position.name}}</p>
                <p class="city-change"><router-link to="/">切换城市</router-link></p>
                <p class="city-detail">
                    [<router-link v-for="(ele, inx) in position.list" :to="(ele.link || '')" :key="inx">{{ele.name}}</router-link>]
                </p>
                <p class="login"><router-link to="/login">立即登录</router-link></p>
                <p class="reg"><router-link to="/regin">注册</router-link></p>
            </el-col>
            <el-col class="header-nr" :span="13">
                <div class="nav-menu">
                    <router-link to="/" class="menu-name">{{headerNav.mymt.name}}</router-link>
                    <ul class="menu-list">
                        <li v-for="(ele, inx) in headerNav.mymt.list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></li>
                    </ul>
                </div>
                <div class="nav-menu phone-app">
                    <router-link to="/" class="menu-name">手机APP</router-link>
                </div>
                <div class="nav-menu store-center">
                    <router-link to="/" class="menu-name">{{headerNav.businesscenter.name}}</router-link>
                    <ul class="menu-list">
                        <li v-for="(ele, inx) in headerNav.businesscenter.list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></li>
                    </ul>
                </div>
                <div class="nav-menu">
                    <router-link to="/" class="menu-name">{{headerNav.mtrules.name}}</router-link>
                    <ul class="menu-list">
                        <li v-for="(ele, inx) in headerNav.mtrules.list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></li>
                    </ul>
                </div>
                <div class="nav-menu web-more">
                    <router-link to="/" class="menu-name">{{headerNav.webnav.name}}</router-link>
                    <ul class="menu-list">
                        <li class="hotail">
                            <b class="tit">{{headerNav.webnav.list[0].name}}</b>
                            <dl>
                                <dd v-for="(ele, inx) in headerNav.webnav.list[0].list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></dd>
                            </dl>
                        </li>
                        <li class="food">
                            <b class="tit">{{headerNav.webnav.list[1].name}}</b>
                            <dl>
                                <dd v-for="(ele, inx) in headerNav.webnav.list[1].list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></dd>
                            </dl>
                        </li>
                        <li class="move">
                            <b class="tit">{{headerNav.webnav.list[2].name}}</b>
                            <dl>
                                <dd v-for="(ele, inx) in headerNav.webnav.list[2].list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></dd>
                            </dl>
                        </li>
                        <li class="app">
                            <b class="tit">{{headerNav.webnav.list[3].name}}</b>
                            <dl>
                                <dd v-for="(ele, inx) in headerNav.webnav.list[3].list" :key="inx"><router-link :to="(ele.link || '')" class="el-icon-platform-eleme"></router-link></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <el-row class="header-s">
            <el-col class="top-logo" :span="6">
                <router-link to="/">
                    <i class="el-icon-platform-eleme"></i>
                </router-link>
            </el-col>
            <el-col :span="12">
                <el-row class="input-area">
                    <el-col class="inp-list" :span="20">
                        <el-input
                            placeholder="搜索商家或地点"
                            prefix-icon="el-icon-search"
                            v-model="navSearch"
                            @input="changeInput"
                            @focus="focusInput"
                            @blur="bourInput"
                        />
                        <dl class="input-hot" v-if="inputHot">
                            <dt class="hot-tit">{{hotService.name}}</dt>
                            <dd v-for="(ele, inx) in hotService.list" :key="inx">
                                <router-link :to="(ele.link || '')">{{ele.name}}</router-link>
                            </dd>
                        </dl>
                        <dl class="input-advice" v-if="(inputAdvice && (nearlyHotService.list.length || nearlyFlag))">
                            <dd v-for="(ele, inx) in nearlyHotService.list" :key="inx">
                                <router-link :to="(ele.link || '')">{{ele.name}}</router-link>
                            </dd>
                            <div v-if="nearlyFlag" class="search-loading">
                                <div class="my-loading-box">
                                    <div v-for="inx in 6" class="loading-bol" :key="inx"></div>
                                </div>
                            </div>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <el-button class="search-btn" type="primary" icon="el-icon-search"/>
                    </el-col>
                </el-row>
                <el-row class="hot-service">
                    <ul>
                        <li v-for="(ele, inx) in hotService.list" :key="inx"><router-link :to="(ele.link || '')">{{ele.name}}</router-link></li>
                    </ul>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./header.js"></script>
<style lang="less" src="./header.less"></style>
