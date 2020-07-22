<template>
    <div class="result-detail">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/index">首页</el-breadcrumb-item>
            <el-breadcrumb-item to="/result">美食</el-breadcrumb-item>
            <el-breadcrumb-item>结果页{{currentId}}</el-breadcrumb-item>
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
                <right-nav :navList="guessYouLikeList"/>
            </div>
        </div>
        <div class="result-nearly-story">
            <near-story />
        </div>
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
            currentId: '',
            guessYouLikeList: [
                {
                    link: '',
                    imgUrl:
                        'https://p0.meituan.net/bbia/062a186c23cfb9ebe34e95ca235ff660535199.jpg@380w_214h_1e_1c',
                    name: '华莱士炸鸡汉堡（石油大学店）',
                    desc: '昌平镇',
                    price: '18.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p1.meituan.net//bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@188w_106h_1e_1c',
                    name: '屯老二农家铁锅炖（松园店）',
                    desc: '昌平镇',
                    price: '88.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p0.meituan.net/bbia/062a186c23cfb9ebe34e95ca235ff660535199.jpg@380w_214h_1e_1c',
                    name: '华莱士炸鸡汉堡（石油大学店）',
                    desc: '昌平镇',
                    price: '18.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p1.meituan.net//bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@188w_106h_1e_1c',
                    name: '屯老二农家铁锅炖（松园店）',
                    desc: '昌平镇',
                    price: '88.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p0.meituan.net/bbia/062a186c23cfb9ebe34e95ca235ff660535199.jpg@380w_214h_1e_1c',
                    name: '华莱士炸鸡汉堡（石油大学店）',
                    desc: '昌平镇',
                    price: '18.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p1.meituan.net//bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@188w_106h_1e_1c',
                    name: '屯老二农家铁锅炖（松园店）',
                    desc: '昌平镇',
                    price: '88.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p0.meituan.net/bbia/062a186c23cfb9ebe34e95ca235ff660535199.jpg@380w_214h_1e_1c',
                    name: '华莱士炸鸡汉堡（石油大学店）',
                    desc: '昌平镇',
                    price: '18.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p1.meituan.net//bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@188w_106h_1e_1c',
                    name: '屯老二农家铁锅炖（松园店）',
                    desc: '昌平镇',
                    price: '88.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p0.meituan.net/bbia/062a186c23cfb9ebe34e95ca235ff660535199.jpg@380w_214h_1e_1c',
                    name: '华莱士炸鸡汉堡（石油大学店）',
                    desc: '昌平镇',
                    price: '18.0'
                },
                {
                    link: '',
                    imgUrl:
                        'https://p1.meituan.net//bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@188w_106h_1e_1c',
                    name: '屯老二农家铁锅炖（松园店）',
                    desc: '昌平镇',
                    price: '88.0'
                }
            ]
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
            margin-top: 34px;
            border-radius: 4px;
            border: 1px solid #e5e5e5;
            padding: 16px 20px 0;
        }
    }
}
</style>
