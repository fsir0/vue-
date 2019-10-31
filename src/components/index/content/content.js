export default {
    name: 'my-content',
    data() {
        return {
            msg: 'loading',
            msgloading: '...',
            navInx: 0
        }
    },
    mounted() {
        const { dispatch } = this.$store
        setInterval(() => {
            if (this.msgloading.length >= 6) {
                this.msgloading = '.'
            } else {
                this.msgloading += '.'
            }
        }, 500)
        dispatch('getFloorData')
    },
    methods: {
        hoverNav(inx) {
            this.navInx = inx || 0
        }
    }
}
