<template>
    <div class="result-detail">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/index">首页</el-breadcrumb-item>
            <el-breadcrumb-item to="/result">美食</el-breadcrumb-item>
            <el-breadcrumb-item>结果页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="result-detail-wrapper">
            <detail />
        </div>
        <div class="result-content-wrapper">
            <div class="result-main-content">
                <discount />
                <advice />
                <comments />
            </div>
            <div class="result-guess-like">
                <right-nav />
            </div>
        </div>
        <div class="result-nearly-story">
            <near-story />
        </div>
        <!-- @todo -->
        {{currentId}}
    </div>
</template>

<script>
import detail from '@/components/resultDetail/detail/detail.vue'
import discount from '@/components/resultDetail/discount/discount.vue'
import advice from '@/components/resultDetail/advice/advice.vue'
import comments from '@/components/resultDetail/comments/comments.vue'
import rightNav from '@/components/result/rightNav/rightNav.vue'
import nearStory from '@/components/resultDetail/nearStory/nearStory.vue'
export default {
    name: 'resultDetail',
    components: {
        detail,
        discount,
        advice,
        comments,
        rightNav,
        nearStory
    },
    data() {
        return {
            currentId: ''
        }
    },
    mounted() {
        this.currentId = this.$route.params.id
    }
}
</script>

<style lang="less">
.result-detail {
    width: 1190px;
    margin: 0 auto 30px;
    .el-breadcrumb {
        padding: 15px 0;
    }
    .result-detail-wrapper {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 40px;
        padding: 20px 20px 25px;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        box-shadow: 0 5px 14px 0 rgba(0, 0, 0, .1);
    }
    .result-content-wrapper {
        &::after {
            content: '';
            display: block;
            clear: both;
        }
        .result-main-content {
            box-sizing: border-box;
            float: left;
            width: 950px;
        }
        .result-guess-like {
            box-sizing: border-box;
            float: right;
            width: 230px;
            margin-top: 20px;
            border: 1px solid #e5e5e5;
        }
    }
}
</style>
