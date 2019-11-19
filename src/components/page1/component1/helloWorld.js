import Vue from 'vue'
import { mapState } from 'vuex'
import utils from '../../../assets/common/util'
import { elTable, elTtableColumn, elPagination, elButton } from 'element-ui'
const { formatTime } = utils
export default {
    name: 'HelloWorld',
    defineTest: 'onlyTestUse',
    props: {},
    component: {
        elTable,
        elTtableColumn,
        elPagination,
        elButton
    },
    beforeRouteEnter(to, from, next) {
        // console.log('helloworld的组件独享路由守卫')
        // let answer = window.confirm('来试试page1页面吧！')
        // if (answer) {
        //     next()
        // } else {
        //     next(false)
        // }
        next()
    },
    data() {
        return {
            text: '',
            stateDataNum: 0,
            currentPage: 1,
            pageSize: 10,
            time: new Date()
        }
    },
    mounted() {
        const { dispatch } = this.$store
        dispatch('duData1')
        dispatch('duData2', { page: 1 })
        dispatch('duData3', { userId: 1 })
    },
    methods: {
        formatTime,
        clickme() {
            const { dispatch } = this.$store
            dispatch('dispatchDiscount')
            dispatch('duWarning', '996')
            // this.axios.get('http://jsonplaceholder.typicode.com/users', {params: {page: 1}})
            //   .then(res => {
            //     console.log('单纯测试', res);
            //   })
        },
        operateMethod(data) {
            // eslint-disable-next-line no-console
            console.log(data, 'operate')
            // const loading = this.$loading({
            //     lock: true,
            //     text: 'Loading',
            //     spinner: 'el-icon-loading',
            //     background: 'rgba(0, 0, 0, 0.7)'
            // })
            // setTimeout(() => {
            //     loading.close()
            // }, 1000)
        },
        // 分页按钮
        pageChange(pageIndex) {
            let { dispatch } = this.$store
            dispatch('duData3', {
                // 此处用userId代替page，因为此接口不支持page，但支持uaserId筛选，仅10条数据有效
                userId: pageIndex,
                pageSize: this.pageSize
            })
        },
        pageSizeChange(size) {
            let { dispatch } = this.$store
            this.pageSize = size
            dispatch('duData3', {
                // 此处用userId代替page，因为此接口不支持page，但支持uaserId筛选，仅10条数据有效
                userId: 1,
                pageSize: size
            })
        },
        tohome() {
            // console.log(this.$router);
            this.$router.push({ path: '/' })
        }
    },
    computed: {
        // 引入state变化的计算属性，并且computed中可添加自己想要的计算属性
        ...mapState({
            initData: state => state.stateTest.warning,
            stateData: state => state.stateTest.count,
            stateListData1: state => state.stateTest.data1,
            stateListData2: state => state.stateTest.data2,
            stateListData3: state => state.stateTest.data3
        })
    }
}
// 自定义table列的组件，将传入三个参数rowData, field, index
Vue.component('op-btn', {
    template: '<span class="operate-btn" @click="getData(rowData, field, index)">获得此行信息{{index}}</span>',
    props: {
        rowData: {
            type: Object
        },
        field: {
            type: String
        },
        index: {
            type: Number
        }
    },
    methods: {
        getData(rowData, field, index) {
            // 传给父组件用$emit方式进行触发父组件方法，参数为方法名 + params;
            this.$emit('on-custom-comp', { rowData, field, index })
            // 此处可以直接dispatch一个action去发起请求或者更新数据，就不再需要触发父组件的方法再去操作data了（得益于使用vuex）
            let { dispatch } = this.$store
            dispatch('duCount', index)
            dispatch('duWarning', '996')
        }
    }
})
