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
            navSearch: ''
        }
    },
    methods: {
        changeInput(val) {
            console.log(val)
            // do somethings
        }
    }
}
