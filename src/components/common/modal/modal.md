modal弹窗组件说明
引入方式 import Modal from '@/components/common/modal/modal.vue'
使用方式：

<Modal
    :showModal="showModal"
    :nofooter="true"
    @confirm="confirm"
    @calcel="cancel"
>
    <template v-slot:header>
        <span>title</span>
    </temlate>
    <span>body</span>
</Modal>
<button @click="show">click me to show modal!</button>
<script>
export default {
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        show() {
            this.data.showModal = true;
        },
        confirm() {
            this.data.showModal = false;
        },
        cancel() {
            this.data.cancel = false;
        }
    }
}
</script>

 参数        类型         说明
showModal   Boolean     (必须)是否展示弹窗
nofooter    Boolean     (非必须)是否取消footer，默认false
confirm     Function    (必须)弹窗确定时的回调,参数为事件源对象
cancel      Function    (必须)弹窗取消时的回调,参数为事件源对象

 传入内容                        说明
template v-slot:header          template包含内容为header区域模板,缺省为<template v-slot:header><b>弹窗</b></template>
template外内容                  content区域模板,缺省为<span>暂无内容</span>


other: ^\s*(?=\r?$)\n 匹配空行