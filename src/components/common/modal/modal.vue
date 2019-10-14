<template>
    <transition name="fade">
        <div class="f-modal" v-if="showModal">
            <div class="modal-mask"></div>
            <div class="modal-wrapper">
                <div class="header">
                    <span class="close" @click="cancel">×</span>
                    <slot name="header"><b>弹窗</b></slot>
                </div>
                <div class="content">
                    <slot><span>暂无内容</span></slot>
                </div>
                <div class="footer" v-if="footer">
                    <span class="confirm" @click="confirm">确定</span>
                    <span class="cancel" @click="cancel">取消</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script src="./modal.js"></script>
<style scoped lang="less" src="./modal.less"></style>