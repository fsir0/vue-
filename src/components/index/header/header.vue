<template>
    <div>
        <el-row class="header-n">
            <el-col class="header-nl" :span="10">
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
            <el-col class="header-nr" :span="14">
                <div class="nav-menu">
                    <a href="#" class="menu-name">我的美团</a>
                    <ul class="menu-list">
                        <li><a href="#">我的订单</a></li>
                        <li><a href="#">我的收藏</a></li>
                        <li><a href="#">抵用券</a></li>
                        <li><a href="#">账户设置</a></li>
                    </ul>
                </div>
                <div class="nav-menu">
                    <a href="#" class="menu-name">手机APP</a>
                </div>
                <div class="nav-menu">
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
                <div class="nav-menu">
                    <a href="#" class="menu-name">网站导航</a>
                    <ul class="menu-list">
                        <li>
                            <b class="tit">酒店旅游</b>
                            <dl>
                                <dd>国际机票</dd>
                                <dd>火车票</dd>
                                <dd>榛果民宿</dd>
                                <dd>国际机票</dd>
                                <dd>火车票</dd>
                                <dd>榛果民宿</dd>
                                <dd>国际机票</dd>
                                <dd>火车票</dd>
                                <dd>榛果民宿</dd>
                            </dl>
                        </li>
                        <li>
                            <b class="tit">吃美食</b>
                            <dl>
                                <dd>烤鱼</dd>
                                <dd>特色小吃</dd>
                                <dd>烧烤</dd>
                                <dd>自助餐</dd>
                                <dd>烧烤</dd>
                                <dd>自助餐</dd>
                            </dl>
                        </li>
                        <li>
                            <b class="tit">看电影</b>
                            <dl>
                                <dd>热映电影</dd>
                                <dd>热门影院</dd>
                                <dd>热映电影口碑榜</dd>
                                <dd>最受期待的电影</dd>
                                <dd>国内票房榜</dd>
                                <dd>北美票房榜</dd>
                                <dd>电影排行榜</dd>
                            </dl>
                        </li>
                        <li>
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
