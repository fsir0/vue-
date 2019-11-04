<template>
    <div class="content-wrapper">
        <div class="floor">
            <input type="hidden" :value="floorNavData">
            <input type="hidden" :value="floorContData">
            <ul class="floor-nav">
                <h5 class="floot-tit">有格调</h5>
                <li v-for="(ele, inx) in floorNavData" :class="navInx == inx ? 'nav-card active' : 'nav-card'" @mouseenter="hoverNav(inx)" :key="inx">{{ele.name}}</li>
            </ul>
            <ul class="floor-cont">
                <li class="cont-card" v-for="(ele, inx) in floorContData" :key="inx">
                    <router-link :to="ele.link || '/'">
                        <div class="cont-img">
                            <img v-lazy="ele.imgUrl + ''">
                        </div>
                        <div class="cont-des">
                            <b class="cont-tit">{{ele.title}}</b>
                            <p class="cont-sub">{{ele.subTitle}}</p>
                            <p class="cont-price">
                                <span class="currency-symbol" v-if="ele.activePrice">&yen;</span>
                                <span class="activi-price" v-if="ele.activePrice">{{ele.activePrice}}</span>
                                <span class="price-suffix" v-if="ele.activePrice && ele.priceSuffix">{{ele.priceSuffix}}</span>
                                <span class="origin-price">{{ele.originPrice}}</span>
                            </p>
                            <p class="cont-position" v-if="ele.position">{{ele.position}}</p>
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
