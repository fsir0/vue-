<template>
    <div class="detail">
        <div class="desc-card">
            <h2>京味斋·北京牡丹烤鸭（奥体店）</h2>
            <el-rate
                disabled
                show-score
                score-template="{value}分"
                v-model="rate"
            ></el-rate>
            <span class="price">人均 ¥64</span>
            <span class="safe-authentication">食品安全档案</span>
            <div class="communicate">
                <p>地址：朝阳区安苑东里1区2号楼<i class="location el-icon-location" @click="handleShowPosition"></i></p>
                <p>电话：010-64988301</p>
                <p>营业时间：周一至周日 10:30-22:00</p>
            </div>
            <ul class="provide-list">
                <li class="provide-card">
                    <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png">
                    <p class="des">提供wifi</p>
                </li>
                <li class="provide-card">
                    <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png">
                    <p class="des">停车位</p>
                </li>
            </ul>
        </div>
        <div class="img-preview-card">
            <div class="main-image">
                <img src="https://p1.meituan.net/mogu/cb6e5ed585e058d2862811174636e092223079.jpg@380w_214h_1e_1c">
            </div>
            <ul class="image-list-wrapper">
                <li class="image-card">
                    <img src="https://p1.meituan.net/mogu/cb6e5ed585e058d2862811174636e092223079.jpg@92w_50h_1e_1c">
                </li>
                <li class="image-card">
                    <img src="https://p0.meituan.net/shaitu/c5cc2e934ae52d07eaacc688c91779a6356112.jpg@92w_50h_1e_1c">
                </li>
                <li class="image-card">
                    <img src="https://p1.meituan.net/mogu/cb6e5ed585e058d2862811174636e092223079.jpg@92w_50h_1e_1c">
                </li>
                <li class="image-card">
                    <img src="https://p0.meituan.net/shaitu/c5cc2e934ae52d07eaacc688c91779a6356112.jpg@92w_50h_1e_1c">
                </li>
                <li class="image-card">
                    <img src="https://p1.meituan.net/mogu/cb6e5ed585e058d2862811174636e092223079.jpg@92w_50h_1e_1c">
                </li>
            </ul>
        </div>
        <el-dialog width="700px" class="map-position-dialog" :visible="positionDialogShow" :before-close="() => { positionDialogShow = false }">
            <div class="map-position-wrapper" ref="mapWrapper"></div>
        </el-dialog>
    </div>
</template>
<script src="./detail.js"></script>
<style lang="less" src="./detail.less"></style>
