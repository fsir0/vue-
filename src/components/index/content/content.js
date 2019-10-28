export default {
    name: 'my-content',
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
