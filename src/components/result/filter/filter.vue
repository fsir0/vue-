<template>
    <div class="result-filter">
        <div class="filter-result-wrapper">
            <span class="wrapper-label">已选条件</span>
            <ul class="filter-result-list">
                <li class="filter-card">代金券</li>
                <li class="filter-card">代金券</li>
                <li class="filter-clear-all">清除全部</li>
            </ul>
        </div>
        <div class="filter-item-wrapper">
            <span class="wrapper-label">分类</span>
            <dl class="filter-list">
                <dt class="filter-all active">全部</dt>
                <dd class="filter-card">
                    <span class="filter-name">代金券</span>
                </dd>
                <dd v-for="index in 10" :key="index" class="filter-card">
                    <span class="filter-name">{{index === 3 ? '蛋糕甜点蛋糕甜点蛋糕甜点' : '蛋糕甜点'}}</span>
                </dd>
            </dl>
        </div>
        <div class="filter-item-wrapper">
            <span class="wrapper-label">区域</span>
            <dl class="filter-list">
                <dt class="filter-all active">全部</dt>
                <dd class="filter-card">
                    <filter-location
                        :active="true"
                        :name="'朝阳区'"
                        :areaList="['大望路', '双井', '北苑家园', '酒仙桥', '安贞', '管庄', '十八里店', '望京', '亮马桥', '建外大街', '朝外大街/世贸天阶', '左家庄', '亚运村', '四惠', '四惠东', '团结湖/朝阳公园', '三元桥', '太阳宫', '国贸/建外', '三里屯/工体', '对外经贸', '首都机场', '十里堡', '悠唐生活广场', '朝阳大悦城', '东坝', '石佛营', '甜水园', '八里庄', '工体', '百子湾', '传媒大学', '双桥', '北京欢乐谷', '高碑店', '北京东站', '霄云路', '蓝色港湾', '朝阳公园', '燕莎', '农业展览馆', '劲松', '潘家园', '姚家园', '十里河', '立水桥/北苑家园', '小营', '北沙滩', '大屯', '常营', '鸟巢/水立方', '世贸天阶', '草房', '首都机场生活区', '王四营', '霄云路/三元桥', '四惠交通枢纽', '西直河/亦庄', '和平里/国展中心', '孙河', '马泉营', '望京/善各庄 五方桥']"
                        @selectChange="handleChangeSelect"
                    ></filter-location>
                </dd>
            </dl>
        </div>
        <div class="filter-item-wrapper filter-human-number">
            <span class="wrapper-label">用餐人数</span>
            <dl class="filter-list">
                <dt class="filter-all active">全部</dt>
                <dd class="filter-card" v-for="item in filterHumaneNum" :key="item">
                    <span class="filter-name">{{item}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script src="./filter.js"></script>
<style lang="less" src="./filter.less"></style>
