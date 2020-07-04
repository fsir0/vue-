import filterLocation from './filterLocation.vue'
export default {
    name: 'result-filter',
    components: {
        filterLocation
    },
    data() {
        return {
            filterHumaneNum: ['单人', '双人', '3-4人', '4-5人', '5-6人', '7-8人', '9-10人', '10人以上', '其他']
        }
    },
    methods: {
        handleChangeSelect(item) {
            // eslint-disable-next-line no-console
            console.log(item)
        }
    }
}
