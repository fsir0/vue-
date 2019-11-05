<template>
    <div class="friendlink-wrapper">
        <ul class="friendlink-box">
            <h5 class="friendlink-title">{{friendlinkData.title}}</h5>
            <li class="firendlink-card" v-for="(ele, inx) in friendlinkData.list" :key="inx">
                <dl>
                    <dt class="friendlink-tit">{{ele.title}}</dt>
                    <dd v-for="(ele1, inx1) in ele.list" :key="inx + '-' + inx1">
                        <router-link :to="ele1.link || ''" :title="ele1.name">{{ele1.name}}<i class="hot" v-if="ele1.isHot">HOT</i></router-link>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>
<script src="./friendlink.js"></script>
<style lang="less" src="./friendlink.less"></style>
