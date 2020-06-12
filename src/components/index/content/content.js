import { mapState } from 'vuex'
export default {
    name: 'my-content',
    data() {
        return {
            navInx: 0,
            navTimer: null
        }
    },
    mounted() {
        const { dispatch } = this.$store
        dispatch('getFloorData', {})
    },
    methods: {
        hoverNav(inx) {
            this.navTimer && clearTimeout(this.navTimer)
            this.navTimer = setTimeout(() => {
                this.navInx = inx || 0
            }, 100)
        }
    },
    computed: {
        ...mapState({
            floorNavData: state => state.index.floorData
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
