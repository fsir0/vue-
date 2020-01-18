export default {
    name: 'searchCity',
    data() {
        return {
            provinceShow: false,
            province: '省份'
        }
    },
    mounted() {
        const that = this
        // 初始化组件时添加window点击事件，清除province&citys选择框
        window.addEventListener('click', function() {
            that.provinceShow = false
        })
    },
    methods: {
        changeProvince(name) {
            // eslint-disable-next-line no-console
            console.log(name)
            this.province = name
            this.provinceShow = false
        },
        showprovince() {
            // eslint-disable-next-line no-console
            console.log('show')
            this.provinceShow = true
        }
    }
}
