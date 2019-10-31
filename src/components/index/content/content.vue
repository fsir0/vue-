<template>
    <div class="content-wrapper">
        <div class="floor">
            <ul class="floor-nav">
                <h5 class="floot-tit">有格调</h5>
                <li :class="navInx == 0 ? 'nav-card active' : 'nav-card'" @mouseenter="hoverNav(0)">全部</li>
                <li :class="navInx == 1 ? 'nav-card active' : 'nav-card'" @mouseenter="hoverNav(1)">约会聚餐</li>
                <li :class="navInx == 2 ? 'nav-card active' : 'nav-card'" @mouseenter="hoverNav(2)">丽人SPA</li>
                <li :class="navInx == 3 ? 'nav-card active' : 'nav-card'" @mouseenter="hoverNav(3)">品质出游</li>
            </ul>
            <ul class="floor-cont">
                <li class="cont-card">
                    <router-link to="/">
                        <div class="cont-img">
                            <img v-lazy="'https://p0.meituan.net/msmerchant/a56c4d4082a7b662f19c4b9a6eb56c622342599.jpg@368w_208h_1e_1c'">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">必胜客</b>
                            <p class="cont-sub">3份超级至尊比萨（普通装铁盘）1份</p>
                            <p class="cont-price">
                                <span class="currency-symbol">&yen;</span>
                                <span class="activi-price">123</span>
                                <span class="price-suffix">/人均</span>
                                <span class="origin-price">门市价&yen;159</span>
                            </p>
                            <p class="cont-position">站前</p>
                        </div>
                    </router-link>
                </li>
                <li class="cont-card">
                    <router-link to="/">
                        <div class="cont-img">
                            <img v-lazy="'https://p0.meituan.net/msmerchant/a56c4d4082a7b662f19c4b9a6eb56c622342599.jpg@368w_208h_1e_1c'">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">必胜客</b>
                            <p class="cont-sub">3份超级至尊比萨（普通装铁盘）1份</p>
                            <p class="cont-price">
                                <span class="currency-symbol">&yen;</span>
                                <span class="activi-price">123</span>
                                <span class="price-suffix">/人均</span>
                                <span class="origin-price">门市价&yen;159</span>
                            </p>
                            <p class="cont-position">站前</p>
                        </div>
                    </router-link>
                </li>
                <li class="cont-card">
                    <router-link to="/">
                        <div class="cont-img">
                            <img v-lazy="'https://p0.meituan.net/msmerchant/a56c4d4082a7b662f19c4b9a6eb56c622342599.jpg@368w_208h_1e_1c'">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">必胜客</b>
                            <p class="cont-sub">3份超级至尊比萨（普通装铁盘）1份</p>
                            <p class="cont-price">
                                <span class="currency-symbol">&yen;</span>
                                <span class="activi-price">123</span>
                                <span class="price-suffix">/人均</span>
                                <span class="origin-price">门市价&yen;159</span>
                            </p>
                            <p class="cont-position">站前</p>
                        </div>
                    </router-link>
                </li>
                <li class="cont-card">
                    <router-link to="/">
                        <div class="cont-img">
                            <img v-lazy="'https://p0.meituan.net/msmerchant/a56c4d4082a7b662f19c4b9a6eb56c622342599.jpg@368w_208h_1e_1c'">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">必胜客</b>
                            <p class="cont-sub">3份超级至尊比萨（普通装铁盘）1份</p>
                            <p class="cont-price">
                                <span class="currency-symbol">&yen;</span>
                                <span class="activi-price">123</span>
                                <span class="price-suffix">/人均</span>
                                <span class="origin-price">门市价&yen;159</span>
                            </p>
                            <p class="cont-position">站前</p>
                        </div>
                    </router-link>
                </li>
                <li class="cont-card">
                    <router-link to="/">
                        <div class="cont-img">
                            <img v-lazy="'https://p0.meituan.net/msmerchant/a56c4d4082a7b662f19c4b9a6eb56c622342599.jpg@368w_208h_1e_1c'">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">必胜客</b>
                            <p class="cont-sub">3份超级至尊比萨（普通装铁盘）1份</p>
                            <p class="cont-price">
                                <span class="currency-symbol">&yen;</span>
                                <span class="activi-price">123</span>
                                <span class="price-suffix">/人均</span>
                                <span class="origin-price">门市价&yen;159</span>
                            </p>
                            <p class="cont-position">站前</p>
                        </div>
                    </router-link>
                </li>
                <li class="cont-card">
                    <router-link to="/">
                        <div class="cont-img">
                            <img v-lazy="'https://p0.meituan.net/msmerchant/a56c4d4082a7b662f19c4b9a6eb56c622342599.jpg@368w_208h_1e_1c'">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">必胜客</b>
                            <p class="cont-sub">3份超级至尊比萨（普通装铁盘）1份</p>
                            <p class="cont-price">
                                <span class="currency-symbol">&yen;</span>
                                <span class="activi-price">123</span>
                                <span class="price-suffix">/人均</span>
                                <span class="origin-price">门市价&yen;159</span>
                            </p>
                            <p class="cont-position">站前</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            {{msg}}{{msgloading}}
        </div>
    </div>
</template>
<script src="./content.js"></script>
<style lang="less" src="./content.less"></style>
