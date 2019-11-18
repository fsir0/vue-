<template>
    <div class="nav-wrapper">
        <el-row class="nav-container">
            <el-col :span="5" class="nav">
                <h5 class="nav-tit">{{firNavData.title}}</h5>
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
                                <router-link to="/">
                                    <img v-lazy="'http://pic.netbian.com/uploads/allimg/190922/212043-1569158443de0c.jpg'">
                                </router-link>
                            </el-carousel-item>
                            <el-carousel-item class="carousel-item-card">
                                <router-link to="/">
                                    <img v-lazy="'http://pic.netbian.com/uploads/allimg/180222/231102-151931226201f1.jpg'">
                                </router-link>
                            </el-carousel-item>
                            <el-carousel-item class="carousel-item-card">
                                <router-link to="/">
                                    <img v-lazy="'http://pic.netbian.com/uploads/allimg/190824/212516-15666531161ade.jpg'">
                                </router-link>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="adver-t">
                        <router-link to="/">
                            <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513956896&di=a71ffa9bfd2ca3e9e46cb080b890f8c1&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190129%2F097a6d0e385742ff90e9bac81a341894.jpeg'">
                        </router-link>
                    </div>
                </el-row>
                <el-row class="content-card">
                    <div class="adver-bl">
                        <router-link to="/">
                            <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513690611&di=2274f7ead01f1712d3b91d03c3387969&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201410%2F25%2F220832wlwzqq6ble9ql6rd.jpg'">
                        </router-link>
                    </div>
                    <div class="adver-bm">
                        <router-link to="/">
                            <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572513899553&di=45de7120275a7d46ab2b70a94219a796&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fb77790459313edfacc99f1be8cec4980f86c72d9.jpg'">
                        </router-link>
                    </div>
                    <div class="adver-br">
                        <router-link to="/">
                            <img v-lazy="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572514050919&di=641ff396fbae8049e78716811b593642&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F26%2F20150826110740_PYRCi.thumb.700_0.jpeg'">
                        </router-link>
                    </div>
                </el-row>
            </el-col>
            <el-col :span="5" class="user">
                <el-row class="user-info">
                    <div class="header-img">
                        <img v-lazy="'https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg'" alt="HD-img">
                    </div>
                    <p class="welcome-text">Hi！你好</p>
                    <el-button type="info" round class="user-button">注册</el-button>
                    <el-button type="info" round class="user-button">立即登录</el-button>
                </el-row>
                <el-row class="app-scan">
                    <div class="app-img">
                        <img v-lazy="'https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png'" alt="手机版App二维码">
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
