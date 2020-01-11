<template>
    <div class="search-city">
        <el-row>
            <el-col :span="12">
                <span class="label">按省份选择：</span>
                <div class="province-choose">
                    <span class="province-name">北京</span>
                    <dl class="province-list">
                        <dt class="province-list-tit">省份</dt>
                        <dd class="province-card">
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                        </dd>
                        <dd class="province-card">
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                            <router-link to="/index">山东</router-link>
                        </dd>
                    </dl>
                </div>
                <div class="city-choose">
                    <span class="city-name"></span>
                    <dl class="city-list">
                        <dt class="city-list-tit">北京</dt>
                        <dd class="city-card">
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                        </dd>
                        <dd class="city-card">
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
                            <router-link to="/index">青岛</router-link>
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
