<template>
    <div class="comments">
        <h5 class="floor-title">1688网友点评</h5>
        <p class="sort-type-wrapper">
            <span class="active">质量排序</span>
            <span>时间排序</span>
        </p>
        <div class="comments-content">
            <div class="filter-wrapper">
                <ul class="filter-list">
                    <li class="filter-card" v-for="(item, index) in commentFilterList" :key="index">{{item}}</li>
                </ul>
                <el-checkbox v-model="onlyImgComments">只看有图片的评论</el-checkbox>
            </div>
            <ul class="comments-list">
                <li class="comments-card">
                    <img class="user-header-img" src="https://img.meituan.net/avatar/6eea1c9c8ec50c906731dd005987590c252120.jpg@60w_60h_1e_1c">
                    <div class="user-comment-content">
                        <b class="user-name">_qq4w51357712535</b>
                        <el-rate disabled v-model="testRateScore"></el-rate>
                        <p class="user-describe">味道不错，服务也很好。😚😚😚😚😜😜😜😜😜😜😜😜😗😜</p>
                        <span class="time-stamp">2020年3月11日</span>
                        <p class="store-describe">商家回复：尊敬的宾客您好！我是芦月轩羊蝎子杨闸店经理小马，非常感谢您的光临与评价，我们会努力做的更好，希望您继续关注我们！疫情期间多注意防护，祝您生活愉快！</p>
                        <ul class="comment-img-list">
                            <li class="comments-img-card">
                                <img src="https://p0.meituan.net/shaitu/e44f5397652c1340d44c8b9d755248b5120378.jpg">
                            </li>
                            <li class="comments-img-card">
                                <img src="https://p0.meituan.net/shaitu/e44f5397652c1340d44c8b9d755248b5120378.jpg">
                            </li>
                            <li class="comments-img-card">
                                <img src="https://p0.meituan.net/shaitu/e44f5397652c1340d44c8b9d755248b5120378.jpg">
                            </li>
                        </ul>
                        <span class="support">赞</span>
                    </div>
                </li>
                <li class="comments-card">
                    <img class="user-header-img" src="https://img.meituan.net/avatar/6eea1c9c8ec50c906731dd005987590c252120.jpg@60w_60h_1e_1c">
                    <div class="user-comment-content">
                        <b class="user-name">_qq4w51357712535</b>
                        <el-rate disabled v-model="testRateScore"></el-rate>
                        <p class="user-describe">味道不错，服务也很好。😚😚😚😚😜😜😜😜😜😜😜😜😗😜</p>
                        <span class="time-stamp">2020年3月11日</span>
                        <p class="store-describe">商家回复：尊敬的宾客您好！我是芦月轩羊蝎子杨闸店经理小马，非常感谢您的光临与评价，我们会努力做的更好，希望您继续关注我们！疫情期间多注意防护，祝您生活愉快！</p>
                        <ul class="comment-img-list">
                            <li class="comments-img-card">
                                <img src="https://p0.meituan.net/shaitu/e44f5397652c1340d44c8b9d755248b5120378.jpg">
                            </li>
                            <li class="comments-img-card">
                                <img src="https://p0.meituan.net/shaitu/e44f5397652c1340d44c8b9d755248b5120378.jpg">
                            </li>
                            <li class="comments-img-card">
                                <img src="https://p0.meituan.net/shaitu/e44f5397652c1340d44c8b9d755248b5120378.jpg">
                            </li>
                        </ul>
                        <span class="support">赞</span>
                    </div>
                </li>
            </ul>
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
<script src="./comment.js"></script>
<style lang="less" src="./comments.less"></style>
