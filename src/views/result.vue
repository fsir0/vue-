<template>
    <div class="result-wrapper">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="result-breadcrumb">
            <el-breadcrumb-item to="index">首页</el-breadcrumb-item>
            <el-breadcrumb-item>结果页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="result-content-wrapper">
            <div class="result-main-content">
                <div class="result-filter-wrapper">
                    <result-filter @selectChange="handleSelectChange" />
                </div>
                <div class="result-list-wrapper">
                    <result-list />
                </div>
            </div>
            <div class="result-guess-like">
                <right-nav :navList="guessYouLikeList" />
            </div>
        </div>
    </div>
</template>
<script>
import { elBreadcrumb, elBreadcrumbItem } from 'element-ui'
import resultFilter from '@/components/result/filter/filter.vue'
import rightNav from '@/components/result/rightNav/rightNav.vue'
import resultList from '@/components/result/list/list.vue'
export default {
    name: 'result',
    component: {
        elBreadcrumb,
        elBreadcrumbItem
    },
    components: {
        resultFilter,
        rightNav,
        resultList
    },
    data() {
        return {
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
    methods: {
        handleSelectChange(value) {
            // eslint-disable-next-line no-console
            console.log(value)
        }
    }
}
</script>
<style lang="less">
.result-wrapper {
    width: 1190px;
    margin: 0 auto 30px;
    .result-breadcrumb {
        padding: 15px 0;
    }
    .result-content-wrapper {
        width: 100%;
        .result-main-content {
            display: inline-block;
            width: 950px;
            .result-filter-wrapper {
                box-sizing: border-box;
                width: 100%;
                border: 1px solid #e5e5e5;
                background-color: #fff;
            }
            .result-list-wrapper {
                box-sizing: border-box;
                width: 100%;
                margin-top: 10px;
                // border: 1px solid #e5e5e5;
                // background-color: #fff;
                // margin-top: 10px;
                // padding: 10px 20px 0;
            }
        }
        .result-guess-like {
            float: right;
            width: 230px;
            box-sizing: border-box;
            padding: 16px 20px 0;
            border: 1px solid #e5e5e5;
            background-color: #fff;
            &::after {
                content: '';
                clear: both;
            }
        }
    }
}
</style>
