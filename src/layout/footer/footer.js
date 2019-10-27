import { elRow, elCol } from 'element-ui'
import { mapState } from 'vuex'
export default {
    name: 'my-footer',
    component: {
        elRow,
        elCol
    },
    mounted() {
        const { dispatch } = this.$store
        // 获取底部导航
        dispatch('getFooterNav', { home: 'test' })
    },
    computed: {
        ...mapState({
            footerNav: state => state.layout.footerNav
        })
    }
}
