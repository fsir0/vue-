<template>
    <div class="nav-wrapper">
        <el-row class="nav-container">
            <el-col :span="5" class="nav">
                <h5 class="nav-tit">全部分类</h5>
                <ul class="main-nav">
                    <li class="main-list">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食<span class="hot">HOT</span></router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                            /
                            <router-link to="/">美食</router-link>
                            /
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                </ul>
            </el-col>
            <el-col :span="14" class="content">
                content
            </el-col>
            <el-col :span="5" class="user">
                user
            </el-col>
        </el-row>
    </div>
</template>
<script src="./nav.js"></script>
<style lang="less" src="./nav.less"></style>
