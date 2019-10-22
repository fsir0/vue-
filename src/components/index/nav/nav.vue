<template>
    <div class="nav">
        nav & body
        <br />
        {{msg}} {{msgloading}}
    </div>
</template>
<script>
export default {
    name: 'my-nav',
    data() {
        return {
            msg: 'loading',
            msgloading: '...'
        }
    },
    mounted() {
        setInterval(() => {
            if (this.msgloading.length >= 6) {
                this.msgloading = '.'
            } else {
                this.msgloading += '.'
            }
        }, 500)
    }
}
</script>
<style>
.nav {
    text-align: center;
    width: 100%;
    height: 500px;
    line-height: 100px;
}
</style>
