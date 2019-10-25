<template>
    <div class="header-wrapper">
        <el-row class="header-n">
            <el-col class="header-nl" :span="11">
                <i class="el-icon-location-outline"/>
                <p class="city-name">{{position.name}}</p>
                <p class="city-change"><router-link to="/">切换城市</router-link></p>
                <p class="city-detail">
                    [<router-link v-for="(ele, inx) in position.list" :to="ele.link" :key="inx">{{ele.name}}</router-link>]
                </p>
                <p class="login"><router-link to="/login">立即登录</router-link></p>
                <p class="reg"><router-link to="/regin">注册</router-link></p>
            </el-col>
            <el-col class="header-nr" :span="13">
                <div class="nav-menu">
                    <router-link to="/" class="menu-name">{{headerNav.mymt.name}}</router-link>
                    <ul class="menu-list">
                        <li v-for="(ele, inx) in headerNav.mymt.list" :key="inx"><router-link :to="ele.link">{{ele.name}}</router-link></li>
                    </ul>
                </div>
                <div class="nav-menu phone-app">
                    <router-link to="/" class="menu-name">手机APP</router-link>
                </div>
                <div class="nav-menu store-center">
                    <router-link to="/" class="menu-name">{{headerNav.businesscenter.name}}</router-link>
                    <ul class="menu-list">
                        <li v-for="(ele, inx) in headerNav.businesscenter.list" :key="inx"><router-link :to="ele.link">{{ele.name}}</router-link></li>
                    </ul>
                </div>
                <div class="nav-menu">
                    <router-link to="/" class="menu-name">{{headerNav.mtrules.name}}</router-link>
                    <ul class="menu-list">
                        <li v-for="(ele, inx) in headerNav.mtrules.list" :key="inx"><router-link :to="ele.link">{{ele.name}}</router-link></li>
                    </ul>
                </div>
                <div class="nav-menu web-more">
                    <router-link to="/" class="menu-name">网站导航</router-link>
                    <ul class="menu-list">
                        <li class="hotail">
                            <b class="tit">酒店旅游</b>
                            <dl>
                                <dd><router-link to="/">国际机票</router-link></dd>
                                <dd><router-link to="/">火车票</router-link></dd>
                                <dd><router-link to="/">榛果民宿</router-link></dd>
                                <dd><router-link to="/">国际机票</router-link></dd>
                                <dd><router-link to="/">火车票</router-link></dd>
                                <dd><router-link to="/">榛果民宿</router-link></dd>
                                <dd><router-link to="/">国际机票</router-link></dd>
                                <dd><router-link to="/">火车票</router-link></dd>
                                <dd><router-link to="/">榛果民宿</router-link></dd>
                            </dl>
                        </li>
                        <li class="food">
                            <b class="tit">吃美食</b>
                            <dl>
                                <dd><router-link to="/">烤鱼</router-link></dd>
                                <dd><router-link to="/">特色小吃</router-link></dd>
                                <dd><router-link to="/">烧烤</router-link></dd>
                                <dd><router-link to="/">自助餐</router-link></dd>
                                <dd><router-link to="/">烧烤</router-link></dd>
                                <dd><router-link to="/">自助餐</router-link></dd>
                            </dl>
                        </li>
                        <li class="move">
                            <b class="tit">看电影</b>
                            <dl>
                                <dd><router-link to="/">热映电影</router-link></dd>
                                <dd><router-link to="/">热门影院</router-link></dd>
                                <dd><router-link to="/">热映电影口碑榜</router-link></dd>
                                <dd><router-link to="/">最受期待的电影</router-link></dd>
                                <dd><router-link to="/">国内票房榜</router-link></dd>
                                <dd><router-link to="/">北美票房榜</router-link></dd>
                                <dd><router-link to="/">电影排行榜</router-link></dd>
                            </dl>
                        </li>
                        <li class="app">
                            <b class="tit">手机应用</b>
                            <dl>
                                <dd><router-link to="/" class="el-icon-platform-eleme"></router-link></dd>
                                <dd><router-link to="/" class="el-icon-platform-eleme"></router-link></dd>
                                <dd><router-link to="/" class="el-icon-platform-eleme"></router-link></dd>
                                <dd><router-link to="/" class="el-icon-platform-eleme"></router-link></dd>
                                <dd><router-link to="/" class="el-icon-platform-eleme"></router-link></dd>
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
                            <dt class="hot-tit">热门搜索</dt>
                            <dd><router-link to="/">苏宁影城</router-link></dd>
                            <dd><router-link to="/">千山风景名胜区</router-link></dd>
                            <dd><router-link to="/">韩盛炭火自助烤肉</router-link></dd>
                            <dd><router-link to="/">御汤泉国际温泉城</router-link></dd>
                            <dd><router-link to="/">金逸影城</router-link></dd>
                        </dl>
                        <dl class="input-advice" v-if="inputAdvice">
                            <dd><router-link to="/">美食</router-link></dd>
                            <dd><router-link to="/">美食 站西</router-link></dd>
                            <dd><router-link to="/">美食烤肉</router-link></dd>
                            <dd><router-link to="/">美食火锅</router-link></dd>
                            <dd><router-link to="/">美食自助</router-link></dd>
                        </dl>
                    </el-col>
                    <el-col :span="4">
                        <el-button class="search-btn" type="primary" icon="el-icon-search"/>
                    </el-col>
                </el-row>
                <el-row class="hot-service">
                    <ul>
                        <li><router-link to="/">苏宁影城</router-link></li>
                        <li><router-link to="/">韩盛炭火自主烧烤</router-link></li>
                        <li><router-link to="/">金逸影城</router-link></li>
                        <li><router-link to="/">汉唐水汇</router-link></li>
                        <li><router-link to="/">全盛海鲜烤肉自助</router-link></li>
                        <li><router-link to="/">千山风景名胜区</router-link></li>
                    </ul>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./header.js"></script>
<style lang="less" src="./header.less"></style>
