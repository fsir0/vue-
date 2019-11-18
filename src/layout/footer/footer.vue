<template>
    <div class="footer-wrapper">
        <el-row type="flex" justify="space-around" class="link-wrapper">
            <el-col v-for="(ele, inx) in footerNav.list" :key="inx" :span="(ele.name == 'list5' ? 5 : 4)">
                <dl v-for="(ele1, inx1) in ele.list" :key="(inx + '-' + inx1)">
                    <dt v-if="ele1.name !== 'other'">{{ele1.name}}</dt>
                    <div v-if="ele1.name !== 'other'">
                        <dd v-for="(ele2, inx2) in ele1.list" :key="(inx + '-' + inx1 + '-' + inx2)">{{ele2.label || ''}}<router-link :to="ele2.link || ''">{{ele2.name}}</router-link></dd>
                    </div>
                    <div v-else>
                        <span class="business-entry" v-for="(ele2, inx2) in ele1.list" :key="(inx + '-' + inx1 + '-' + inx2)"><router-link :to="ele2.link || ''">{{ele2.name}}</router-link></span>
                    </div>
                </dl>
            </el-col>
        </el-row>
        <el-row class="industral-registion">
            <el-col :span="12" class="indus-l">
                <p>
                    <span>©美团网团购 meituan.com</span>
                    <router-link to="/">京ICP证070791号</router-link>
                    <router-link to="/">京ICP备10211739号</router-link>
                </p>
                <p>
                    <router-link to="/">广播电视节目制作经营许可证（京）字第03889号</router-link>
                </p>
                <p>
                    <router-link to="/">食品经营许可证</router-link>
                    <router-link to="/">互联网药品信息服务资格证</router-link>
                </p>
                <p>
                    <router-link to="/">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</router-link>
                </p>
            </el-col>
            <el-col :span="12" class="indus-r">
                <el-row class="indus-num">
                    <router-link to="/">京公网安备11010502025545号</router-link>
                </el-row>
                <el-row class="indus-imgs">
                    <router-link to="/">
                        <img src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"/>
                        <span>北京三快科技有限公司</span>
                    </router-link>
                    <router-link to="/">
                        <i class="img"/>
                    </router-link>
                    <router-link to="/">
                        <i class="img"/>
                    </router-link>
                    <router-link to="/">
                        <i class="img"/>
                    </router-link>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./footer.js"></script>
<style lang="less" src="./footer.less"></style>
