<template>
    <div class="city-list">
        <span class="label">按拼音首字母选择：</span>
        <div class="city-firstName-letters-wrapper">
            <a v-for="ele in cityDataList" :key="ele[0]" :href="'#anchorTo' + ele[0]">{{ele[0]}}</a>
        </div>
        <dl class="city-list-card" v-for="ele in cityDataList" :key="ele[0]" :id="'anchorTo' + ele[0]">
            <dt class="city-list-letter-title">{{ele[0]}}</dt>
            <dd class="city-list-letters-card">
                <a v-for="el in ele[1]" :key="el.id" :class="{'advice': (el.rank === 'S' || el.rank === 'A')}" href="/index">{{el.name}}</a>
            </dd>
        </dl>
    </div>
</template>

<script src="./cityList.js"></script>

<style lang="less" src="./cityList.less"></style>
