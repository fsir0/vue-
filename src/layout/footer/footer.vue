<template>
    <div class="footer-wrapper">
        <el-row type="flex" justify="space-around" class="link-wrapper">
            <input type="hidden" :value="footerNav">
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
    </div>
</template>
<script src="./footer.js"></script>
<style lang="less" src="./footer.less"></style>
