<template>
    <div class="result-right-nav">
        <h4 class="result-guess-title">猜你喜欢</h4>
        <ul class="guess-wrapper">
            <li v-for="(item, index) in navList" :key="index" class="guess-card">
                <router-link :to="item.link">
                    <div class="img-box">
                        <img :src="item.imgUrl">
                    </div>
                    <p class="name">{{item.name}}</p>
                    <p class="desc">{{item.desc}}</p>
                    <p class="price">{{item.price}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script src="./rightNav.js"></script>
<style lang="less" src="./rightNav.less"></style>
