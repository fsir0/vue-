<template>
    <div class="result-filter">
        <div class="filter-result-wrapper">
            <span class="wrapper-label">已选条件</span>
            <ul class="filter-result-list">
                <li
                    class="filter-card"
                    v-show="filteredParams.classification"
                    @click="() => { handleChangeClassification() }"
                >{{filteredParams.classification}}</li>
                <li
                    class="filter-card"
                    v-show="filteredParams.localArea"
                    @click="() => { handleChangeSelect() }"
                >{{filteredParams.localArea}}</li>
                <li
                    class="filter-clear-all"
                    v-show="filteredParams.classification || filteredParams.localArea"
                    @click="handleClearSelect"
                >清除全部</li>
            </ul>
        </div>
        <div class="filter-item-wrapper">
            <span class="wrapper-label">分类</span>
            <dl class="filter-list">
                <dt
                    :class="{'filter-all': true, 'active': filteredParams.classification === ''}"
                    @click="() => { handleChangeClassification() }"
                >全部</dt>
                <dd class="filter-card" v-for="(item, index) in classification" :key="index">
                    <span
                        :class="{'filter-name': true, 'active': filteredParams.classification === item}"
                        @click="() => { handleChangeClassification(item) }"
                    >{{item}}</span>
                </dd>
            </dl>
        </div>
        <div class="filter-item-wrapper">
            <span class="wrapper-label">区域</span>
            <dl class="filter-list">
                <dt
                    :class="{'filter-all': true, 'active': filteredParams.localArea === ''}"
                    @click="() => { handleChangeSelect() }"
                >全部</dt>
                <dd v-for="(item, index) in area" :key="index" class="filter-card">
                    <filter-location
                        :active="filteredParams.localArea === item.name || item.list.includes(filteredParams.localArea)"
                        :name="item.name"
                        :areaList="item.list"
                        @selectChange="handleChangeSelect"
                    ></filter-location>
                </dd>
            </dl>
        </div>
        <div class="filter-item-wrapper filter-human-number">
            <span class="wrapper-label">用餐人数</span>
            <dl class="filter-list">
                <dt :class="{'filter-all': true, 'active': filteredParams.humaneNum === ''}" @click="() => { handleChangeHumaneNum() }">全部</dt>
                <dd class="filter-card" v-for="item in filterHumaneNum" :key="item">
                    <span
                        :class="{'filter-name': true, 'active': filteredParams.humaneNum === item}"
                        @click="() => { handleChangeHumaneNum(item) }"
                    >{{item}}</span>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script src="./filter.js"></script>
<style lang="less" src="./filter.less"></style>
