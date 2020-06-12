<template>
    <div class="city-list">
        <span class="label">按拼音首字母选择：</span>
        <div class="city-firstName-letters-wrapper">
            <a v-for="ele in cityDataList" :key="ele[0]" :href="'#anchorTo' + ele[0]">{{ele[0]}}</a>
        </div>
        <dl v-for="ele in cityDataList" :key="ele[0]">
            <dt :id="'anchorTo' + ele[0]">{{ele[0]}}</dt>
            <dd>
                <a v-for="el in ele[1]" :key="el.id" href="/index">{{el.name}}</a>
            </dd>
        </dl>
    </div>
</template>

<script src="./cityList.js"></script>

<style lang="less" src="./cityList.less"></style>
