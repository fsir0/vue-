<template>
    <div class="header-wrapper">
        <el-row class="header-n">
            <el-col class="header-nl" :span="11">
                <i class="el-icon-location-outline"></i>
                <p class="city-name">北京</p>
                <p class="city-change"><a href="#">切换城市</a></p>
                <p class="city-detail">[
                    <a href="#">门头沟区</a>
                    <a href="#">大厂回族自治县</a>
                    <a href="#">廊坊</a>]
                </p>
                <p class="login"><a href="#">立即登录</a></p>
                <p class="reg"><a href="#">注册</a></p>
            </el-col>
            <el-col class="header-nr" :span="13">
                <div class="nav-menu">
                    <a href="#" class="menu-name">我的美团</a>
                    <ul class="menu-list">
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">我的收藏</a></li>
                        <li><a href="#">抵用券</a></li>
                        <li><a href="#">账户设置</a></li>
                    </ul>
                </div>
                <div class="nav-menu phone-app">
                    <a href="#" class="menu-name">手机APP</a>
                </div>
                <div class="nav-menu store-center">
                    <a href="#" class="menu-name">商家中心</a>
                    <ul class="menu-list">
                        <li><a href="#">商家中心</a></li>
                        <li><a href="#">美团只能收银</a></li>
                        <li><a href="#">我想合作</a></li>
                        <li><a href="#">手机免费开店</a></li>
                        <li><a href="#">餐饮代理招募</a></li>
                        <li><a href="#">商家开票申请</a></li>
                        <li><a href="#">免费合作美团排队</a></li>
                    </ul>
                </div>
                <div class="nav-menu">
                    <a href="#" class="menu-name">美团规则</a>
                    <ul class="menu-list">
                        <li><a href="#">规则中心</a></li>
                        <li><a href="#">规则目录</a></li>
                        <li><a href="#">规则评议院</a></li>
                    </ul>
                </div>
                <div class="nav-menu web-more">
                    <a href="#" class="menu-name">网站导航</a>
                    <ul class="menu-list">
                        <li class="hotail">
                            <b class="tit">酒店旅游</b>
                            <dl>
                                <dd><a href="#">国际机票</a></dd>
                                <dd><a href="#">火车票</a></dd>
                                <dd><a href="#">榛果民宿</a></dd>
                                <dd><a href="#">国际机票</a></dd>
                                <dd><a href="#">火车票</a></dd>
                                <dd><a href="#">榛果民宿</a></dd>
                                <dd><a href="#">国际机票</a></dd>
                                <dd><a href="#">火车票</a></dd>
                                <dd><a href="#">榛果民宿</a></dd>
                            </dl>
                        </li>
                        <li class="food">
                            <b class="tit">吃美食</b>
                            <dl>
                                <dd><a href="#">烤鱼</a></dd>
                                <dd><a href="#">特色小吃</a></dd>
                                <dd><a href="#">烧烤</a></dd>
                                <dd><a href="#">自助餐</a></dd>
                                <dd><a href="#">烧烤</a></dd>
                                <dd><a href="#">自助餐</a></dd>
                            </dl>
                        </li>
                        <li class="move">
                            <b class="tit">看电影</b>
                            <dl>
                                <dd><a href="#">热映电影</a></dd>
                                <dd><a href="#">热门影院</a></dd>
                                <dd><a href="#">热映电影口碑榜</a></dd>
                                <dd><a href="#">最受期待的电影</a></dd>
                                <dd><a href="#">国内票房榜</a></dd>
                                <dd><a href="#">北美票房榜</a></dd>
                                <dd><a href="#">电影排行榜</a></dd>
                            </dl>
                        </li>
                        <li class="app">
                            <b class="tit">手机应用</b>
                            <dl>
                                <dd><a href="#" class="el-icon-platform-eleme"></a></dd>
                                <dd><a href="#" class="el-icon-platform-eleme"></a></dd>
                                <dd><a href="#" class="el-icon-platform-eleme"></a></dd>
                                <dd><a href="#" class="el-icon-platform-eleme"></a></dd>
                                <dd><a href="#" class="el-icon-platform-eleme"></a></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <el-row class="header-s">search</el-row>
    </div>
</template>
<script src="./header.js"></script>
<style scoped lang="less" src="./header.less"></style>
