import { elRate } from 'element-ui'
export default {
    name: 'result-content',
    component: {
        elRate
    },
    props: {
        resultList: {
            type: Array
        },
        pageTotal: {
            type: Number
        }
    },
    data() {
        return {
            defaultFilter: 'default',
            pageSize: 15,
            currentPage: 1
        }
    },
    methods: {
        // 修改筛选
        changeFilter(targetFilter) {
            const me = this
            if (targetFilter === 'price') {
                me.defaultFilter = me.defaultFilter === 'price-asc' ? 'price-desc' : 'price-asc'
            } else if (targetFilter !== me.defaultFilter) {
                me.defaultFilter = targetFilter
            }
            me.currentPage = 1
            me.$emit('changeParams', { filter: me.defaultFilter, page: 1 })
        },
        // 翻页
        handleChangePage(page) {
            const me = this
            me.currentPage = page
            me.$emit('changeParams', { filter: me.defaultFilter, page })
        }
    }
}
