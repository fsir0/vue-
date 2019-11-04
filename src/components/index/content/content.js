import { mapState } from 'vuex'
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
        dispatch('getFloorData', {
            theme: 'quality',
            tab: 'all',
            ci: 151,
            limit: 12
        })
    },
    methods: {
        hoverNav(inx) {
            this.navInx = inx || 0
        }
    },
    computed: {
        ...mapState({
            floorNavData: state => state.index.floorData.navList
        }),
        floorContData() {
            let _data = this.$store.state.index.floorData.contentList[this.navInx].cardList
            if (_data && _data.length) {
                return _data.slice(0, 6)
            } else {
                return []
            }
        }
    }
}
