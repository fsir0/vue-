<template>
    <div class="result-detail">detail-page 1111{{currentId}}</div>
</template>

<script>
export default {
    name: 'resultDetail',
    data() {
        return {
            currentId: ''
        }
    },
    mounted() {
        this.currentId = this.$route.params.id
    }
}
</script>

<style lang="less">
.result-detail {
    width: 100%;
}
</style>
