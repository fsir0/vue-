import { elRow, elCol } from 'element-ui'
export default {
    name: 'my-nav',
    component: {
        elRow,
        elCol
    },
    data() {
        return {
            showSecNav: false,
            showInx: 0,
            updateSecNavTimer: null,
            clearSecNavTimer: null
        }
    },
    computed: {
        secNavData() {
            // [{ name: '', link: '', list: [{ name: '', link: '' }] }]
            // eslint-disable-next-line no-console
            console.log(this.$store.state)
            return this.showInx
        }
    },
    methods: {
        hoverNav(inx) {
            // 若已经在展示则防抖处理
            if (this.showSecNav) {
                clearTimeout(this.updateSecNavTimer)
                this.updateSecNavTimer = setTimeout(() => {
                    this.showInx = inx
                }, 100)
                // 首次展示不需要防抖
            } else {
                this.showInx = inx
            }
            this.showSecNav = true
            // 针对移动至二级导航再移动到一级导航会清除动关闭二级导航
            clearTimeout(this.clearSecNavTimer)
        },
        leaveNav() {
            // 鼠标移除nav框时延迟清除二级导航框
            clearTimeout(this.clearSecNavTimer)
            this.clearSecNavTimer = setTimeout(() => {
                this.showSecNav = false
            }, 100)
        },
        enterSecNav() {
            // 进入二级导航框时取消清除二级导航框
            clearTimeout(this.clearSecNavTimer)
        }
    }
}
