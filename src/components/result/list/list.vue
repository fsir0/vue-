<template>
    <div class="result-list">
        <div class="list-wrapper">
            <div class="list-filter">
                <span class="active">默认</span>
                <span class="active">销量</span>
                <span class="active active-asc active-desc">价格</span>
                <span class="active">好评最多</span>
            </div>
            <ul class="list">
                <li class="list-card">
                    <router-link to="">
                        <div class="img-box">
                            <img src="">
                        </div>
                        <div class="card-info">
                            <h5>北京康莱德酒店·廿九阁扒房</h5>
                            <p>评分</p>
                            <p>地址</p>
                            <p>人均</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="list-pagination">
            <el-pagination
                :total="50"
                :page-size="15"
                layout="prev, pager, next"
            ></el-pagination>
        </div>
    </div>
</template>
<script src="./list.js"></script>
<style lang="less" src="./list.less"></style>
