export default {
    name: 'searchCity',
    data() {
        return {
            provinceShow: false,
            province: '省份',
            provinceList: [['山东', '山西', '山南', '山北', '北京', '南京', '东京'], ['西京', '西藏', '东藏', '南藏', '北藏', '乌鲁木齐']],
            cityShow: false,
            city: '城市',
            cityList: [['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德'], ['张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西'], ['凤凰', '耒阳', '宁乡', '湘阴', '韶山', '汨罗', '冷水江'], ['湘乡', '浏阳', '醴陵', '沅江', '新化', '邵东市', '平江'], ['溆浦', '芷江', '安化', '桃源', '澧县', '道县', '新田'], ['涟源市', '江华瑶族自治县', '蓝山', '江永', '双峰', '新宁', '隆回'], ['慈利', '衡阳县', '祁东县', '衡山县', '衡东县', '常宁市', '资兴市'], ['永兴县', '汝城县', '攸县', '茶陵', '永顺县', '桑植', '石门'], ['临澧', '沅陵县', '武冈市', '宁远县', '绥宁县', '华容']]
        }
    },
    mounted() {
        const that = this
        // 初始化组件时添加window点击事件，清除province&citys选择框
        window.addEventListener('click', function() {
            that.provinceShow = false
            that.cityShow = false
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
            this.cityShow = false
        },
        changeCity(name) {
            // eslint-disable-next-line no-console
            console.log(name)
            this.$router.push('index')
        },
        showCity() {
            if (this.province === '省份') {
                return
            }
            this.cityShow = true
            this.provinceShow = false
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
