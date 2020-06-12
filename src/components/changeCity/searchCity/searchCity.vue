<template>
    <div class="search-city">
        <el-row>
            <el-col :span="12">
                <span class="label">按省份选择：</span>
                <div class="province-choose" @click.stop="showProvince">
                    <span class="province-name">{{province}}</span>
                    <dl v-show="provinceShow" class="province-list" @click.stop>
                        <dt class="province-list-tit">省份</dt>
                        <dd class="province-card" v-for="(ele, index) in provinceList" :key="'col' + index" >
                            <a
                                v-for="(el, inx) in ele"
                                :key="'row' + inx"
                                :class="{'active': province == el}"
                                href="javascript:;"
                                @click="changeProvince(el)"
                            >{{el}}</a>
                        </dd>
                    </dl>
                </div>
                <div :class="{'city-choose': true, 'not-select': province === '省份'}" @click.stop="showCity">
                    <span class="city-name">城市</span>
                    <dl v-show="cityShow" class="city-list" @click.stop>
                        <dt class="city-list-tit">城市</dt>
                        <dd class="city-card" v-for="(ele, index) in cityList" :key="'col' + index" >
                            <a
                                v-for="(el, inx) in ele"
                                :key="'row' + inx"
                                href="javascript:;"
                                @click="changeCity(el)"
                            >{{el}}</a>
                        </dd>
                    </dl>
                </div>
            </el-col>
            <el-col :span="12">
                <span class="label">直接搜索：</span>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./searchCity.js"></script>

<style lang="less" src="./searchCity.less"></style>
