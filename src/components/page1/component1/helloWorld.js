import { mapState } from 'vuex'
export default {
	name: "HelloWorld",
	defineTest: 'onlyTestUse',
	props: {
		msg: {
            type: String,
            required: true
        },
	},
	data() {
		return {
			text: '',
			stateDataNum: 0
		}
    },
    mounted() {
        const {dispatch} = this.$store;
        dispatch('duData1');
    },
	methods: {
		clickme() {
            const {dispatch} = this.$store;
			dispatch('dispatchDiscount');
			dispatch('duWarning', '996');
			// this.axios.get('http://jsonplaceholder.typicode.com/users', {params: {page: 1}})
			//   .then(res => {
			//     console.log('单纯测试', res);
			//   })
		}
	},
	computed: {
		// 引入state变化的计算属性，并且computed中可添加自己想要的计算属性
		...mapState({
			initData: state => state.stateTest.warning,
			stateData: state => state.stateTest.count,
			stateListData1: state => {
				return state.stateTest.data1
			}
		})
	}
};