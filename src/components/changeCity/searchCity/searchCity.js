export default {
    name: 'searchCity',
    data() {
        return {
            provinceShow: false,
            province: '省份',
            provinceList: [['山东', '山西', '山南', '山北', '北京', '南京', '东京'], ['西京', '西藏', '东藏', '南藏', '北藏']],
            cityShow: false,
            city: '城市',
            cityList: [['山东', '山西', '山南', '山北', '北京', '南京', '东京'], ['西京', '西藏', '东藏', '南藏', '北藏']]
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
        showProvince() {
            this.provinceShow = true
        },
        changeCity(name) {
            // eslint-disable-next-line no-console
            console.log(name)
        },
        showCity() {
            this.cityShow = true
        },
        // 处理数组为二维数组
        calculationArray(arr, secondLen) {
            if (!arr || !arr.length) {
                return []
            }
            let targetArr = [...arr]
            let resultArr = []
            while (targetArr.length > 0) {
                resultArr.push(targetArr.splice(0, secondLen))
            }
            return resultArr
        }
    }
}
