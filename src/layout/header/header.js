import { elRow, elCol, elInput, elButton } from 'element-ui'
import { mapState } from 'vuex'
export default {
    name: 'my-header',
    component: {
        elRow,
        elCol,
        elInput,
        elButton
    },
    mounted() {
        const { dispatch } = this.$store
        // 获取初始位置
        dispatch('getPosition', { home: 'test' })
        // 获取头部导航
        dispatch('getHeaderNav', { home: 'test' })
        // 获取头部热词
        dispatch('getHotService', { home: 'test' })
    },
    data() {
        return {
            navSearch: '',
            focusSearch: false,
            debounceInput: null
        }
    },
    computed: {
        ...mapState({
            position: state => state.layout.position,
            headerNav: state => state.layout.headerNav,
            hotService: state => state.layout.hotService,
            nearlyHotService: state => state.layout.nearlyHotService,
            nearlyFlag: state => state.layout.nearlyFlag
        }),
        inputHot() {
            return !!(this.focusSearch && !this.navSearch)
        },
        inputAdvice() {
            return !!(this.focusSearch && this.navSearch)
        }
    },
    methods: {
        changeInput() {
            const { dispatch } = this.$store
            dispatch('getNearlyHotService', { keyword: this.navSearch })
        },
        focusInput() {
            this.focusSearch = true
        },
        bourInput() {
            setTimeout(() => { this.focusSearch = false }, 100)
        }
    }
}
