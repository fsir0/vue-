<template>
    <div class="advice">
        <h5 class="floor-title">推荐菜</h5>
        <div class="advice-content">
            <ul class="img-list">
                <li class="img-card" v-for="(item, index) in adviceImgList" :key="index">
                    <img :src="item.imgUrl">
                    <p class="img-des">
                        <span class="name">{{item.name}}</span>
                        <span class="price">{{item.price}}</span>
                    </p>
                </li>
            </ul>
            <ul class="name-list">
                <li class="name-card" v-for="(name, index) in adviceNameList" :key="index">{{name}}</li>
            </ul>
        </div>
    </div>
</template>
<script src="./advice.js"></script>
<style lang="less" src="./advice.less"></style>
