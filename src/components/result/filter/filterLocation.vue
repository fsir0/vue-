<template>
    <div :class="{'filter-location-wrapper': true, 'active': active}">
        <span @click="() => { showBoxFlag = !showBoxFlag }">{{selectItem || name}}</span>
        <transition name="el-zoom-in-top">
            <div v-show="showBoxFlag" class="filter-location-modal">
                <b class="filter-location-tit">{{name}}</b>
                <ul class="filter-location-list">
                    <li class="filter-location-card">
                        <span
                            @click="() => { handleSelectItem() }"
                            :class="{'filter-location-name': true, 'active': active && !selectItem}"
                        >全部</span>
                    </li>
                    <li v-for="item in areaList" :key="item" class="filter-location-card">
                        <span
                            @click="() => { handleSelectItem(item) }"
                            :class="{'filter-location-name': true, 'active': selectItem === item}"
                        >{{item}}</span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'filter-location',
    props: {
        active: {
            type: Boolean
        },
        name: {
            type: String
        },
        areaList: {
            type: Array
        }
    },
    data() {
        return {
            showBoxFlag: false,
            selectItem: ''
        }
    },
    methods: {
        handleSelectItem(item) {
            this.selectItem = item || ''
            this.$emit('selectChange', item || this.name)
        }
    }
}
</script>
<style lang="less">
.filter-location-wrapper {
    position: relative;
    display: inline-block;
    vertical-align: baseline;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
    border-radius: 10px;
    cursor: pointer;
    &::after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 4px;
        border-width: 4px 4px 0 4px;
        border-style: solid;
        border-color: #333 transparent;
    }
    &.active {
        background-color: #13d1be;
        color: #fff;
        &::after {
            border-color: #fff transparent;
        }
    }
    .filter-location-modal {
        position: absolute;
        top: 25px;
        left: calc(50% - 40px);
        width: 510px;
        border-radius: 8px;
        padding: 20px 0 10px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        box-shadow: 0 5px 7px -1px #ccc;
        color: #333;
        z-index: 1;
        &::before {
            content: '';
            position: absolute;
            top: -5px;
            left: 29px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 5px 5px 5px;
            border-color: #e5e5e5 transparent;
        }
        &::after {
            content: '';
            position: absolute;
            top: -4px;
            left: 30px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 4px 4px 4px;
            border-color: #fff transparent;
        }
        .filter-location-tit {
            display: block;
            color: #ccc;
            font-size: 16px;
            font-weight: bold;
            padding-left: 20px;
            margin-bottom: 10px;
        }
        .filter-location-list {
            font-size: 0;
            line-height: 28px;
            padding: 0 10px;
            .filter-location-card {
                display: inline-block;
                vertical-align: top;
                height: 20px;
                min-width: 110px;
                margin-right: 10px;
                .filter-location-name {
                    display: inline-block;
                    vertical-align: top;
                    line-height: 20px;
                    padding: 0 10px;
                    border-radius: 10px;
                    font-size: 12px;
                    cursor: pointer;
                    &.active {
                        background-color: #13d1be;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
