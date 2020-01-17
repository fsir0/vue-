export default {
    name: 'searchCity',
    data() {
        return {
            province: '省份'
        }
    },
    methods: {
        changeProvince(name) {
            // eslint-disable-next-line no-console
            console.log(name)
            this.province = name
        },
        showprovince() {
            // eslint-disable-next-line no-console
            console.log('show')
        }
    }
}
