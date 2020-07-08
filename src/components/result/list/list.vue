<template>
    <div class="result-list">
        <div class="list-wrapper">
            <div class="list-filter">
                <span @click="() => { changeFilter('default') }" :class="{'active': defaultFilter === 'default'}">默认</span>
                <span @click="() => { changeFilter('saleCount') }" :class="{'active': defaultFilter === 'saleCount'}">销量</span>
                <span @click="() => { changeFilter('price') }"
                    :class="{'active active-asc': defaultFilter === 'price-asc',
                    'active active-desc': defaultFilter === 'price-desc'}"
                >价格</span>
                <span @click="() => { changeFilter('commentMore') }" :class="{'active': defaultFilter === 'commentMore'}">好评最多</span>
            </div>
            <ul class="list">
                <li v-for="(item, index) in resultList" :key="index" class="list-card">
                    <router-link :to="item.linkUrl">
                        <div class="img-box">
                            <img :src="item.imgUrl || ''" />
                            <span class="index">{{index + 1}}</span>
                        </div>
                        <div class="card-info">
                            <h5>{{item.name}}</h5>
                            <p>
                                <el-rate
                                    disabled
                                    show-score
                                    score-template="{value}分"
                                    v-model="item.rate"
                                ></el-rate>
                                <span class="comment">{{item.commentNum}}条评论</span>
                            </p>
                            <p>{{item.address}}</p>
                            <p>
                                人均
                                <span :class="{'price': item.price}">{{item.price || '-'}}</span>
                            </p>
                        </div>
                    </router-link>
                </li>
                <p v-show="!resultList || resultList.length === 0" class="no-data">对不起，没有符合的商家</p>
            </ul>
        </div>
        <div class="list-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="pageTotal || 0"
                :page-size="pageSize"
                :current-page="currentPage"
                @current-change="handleChangePage"
            ></el-pagination>
        </div>
    </div>
</template>
<script src="./list.js"></script>
<style lang="less" src="./list.less"></style>
