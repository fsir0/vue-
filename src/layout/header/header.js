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
        dispatch('getPosition', { home: 'test' })
        dispatch('getHeaderNav', { home: 'test' })
    },
    data() {
        return {
            navSearch: '',
            focusSearch: false
        }
    },
    computed: {
        ...mapState({
            position: state => state.layout.position,
            headerNav: state => state.layout.headerNav
        }),
        inputHot() {
            return !!(this.focusSearch && !this.navSearch)
        },
        inputAdvice() {
            return !!(this.focusSearch && this.navSearch)
        }
    },
    methods: {
        changeInput(val) {
            // eslint-disable-next-line no-console
            console.log(val)
            // do somethings
        },
        focusInput() {
            this.focusSearch = true
        },
        bourInput() {
            setTimeout(() => { this.focusSearch = false }, 100)
        }
    }
}
