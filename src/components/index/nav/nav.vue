<template>
    <div class="nav-wrapper">
        <el-row class="nav-container">
            <el-col :span="5" class="nav">
                <h5 class="nav-tit">全部分类</h5>
                <ul class="main-nav" @mouseleave="leaveNav">
                    <li class="main-list" @mouseenter="hoverNav(0)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(1)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食<span class="hot">HOT</span></router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(2)">
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
                    <li class="main-list" @mouseenter="hoverNav(3)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(4)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(5)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(6)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(7)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(8)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(9)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(10)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(11)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(12)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(13)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(14)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                    <li class="main-list" @mouseenter="hoverNav(15)">
                        <span class="icon-l">
                            <i class="el-icon-platform-eleme" />
                        </span>
                        <span class="nav-text">
                            <router-link to="/">美食</router-link>
                        </span>
                        <span class="icon-r"></span>
                    </li>
                </ul>
                <ul v-if="showSecNav" class="sec-nav" @mouseenter="enterSecNav" @mouseleave="leaveNav">
                    <li class="sec-nav-card">
                        <dl>
                            <dt>
                                <router-link class="tit" to="/">美食</router-link>
                                <router-link class="more" to="/">更多</router-link>
                            </dt>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                        </dl>
                    </li>
                    <li class="sec-nav-card">
                        <dl>
                            <dt>
                                <router-link class="tit" to="/">美食</router-link>
                                <router-link class="more" to="/">更多</router-link>
                            </dt>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                        </dl>
                    </li>
                    <li class="sec-nav-card">
                        <dl>
                            <dt>
                                <router-link class="tit" to="/">美食</router-link>
                                <router-link class="more" to="/">更多</router-link>
                            </dt>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                            <dd><router-link to="/">代金券</router-link></dd>
                        </dl>
                    </li>
                </ul>
            </el-col>
            <el-col :span="14" class="content">
                {{secNavData}}
            </el-col>
            <el-col :span="5" class="user">
                user
            </el-col>
        </el-row>
    </div>
</template>
<script src="./nav.js"></script>
<style lang="less" src="./nav.less"></style>
