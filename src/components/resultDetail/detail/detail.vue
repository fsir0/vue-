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
            <span class="price">人均¥64</span>
            <div class="communicate">
                <p>地址：朝阳区安苑东里1区2号楼</p>
                <p>电话：010-64988301</p>
                <p>营业时间：周一至周日 10:30-22:00</p>
            </div>
            <ul class="provice-list">
                <li class="provice-card">
                    <img src="https://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png">
                    <p class="des">提供wifi</p>
                </li>
                <li class="provice-card">
                    <img src="https://p1.meituan.net/codeman/4b1c5696fe5bf2c4d23fb01659b3e68b1960.png">
                    <p class="des">停车位</p>
                </li>
            </ul>
        </div>
        <div class="img-preview-card">图片预览</div>
    </div>
</template>
<script src="./detail.js"></script>
<style lang="less" src="./detail.less"></style>
