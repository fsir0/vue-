import { elRow, elCol, elInput, elButton } from 'element-ui'
export default {
    name: 'my-header',
    component: {
        elRow,
        elCol,
        elInput,
        elButton
    },
    data() {
        return {
            navSearch: '',
            focusSearch: false
        }
    },
    computed: {
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
