import { mapState } from 'vuex'
import 'vue-easytable/libs/themes-base/index.css'
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
			stateDataNum: 0,
			columns: [
				{
					field: 'id',
					title: 'id',
					width: 30,
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
				},
				{
					field: 'userId',
					title: '用户id',
					width: 60,
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
				},
				{
					field: 'title',
					title: '名称',
					width: 200,
					titleAlign: 'center',
					columnAlign: 'left',
					isResize: true,
				},
				{
					field: 'body',
					title: '内容',
					width: 400,
					titleAlign: 'center',
					columnAlign: 'left',
					isResize: true,
				},
				{
					field: 'operation',
					title: '操作',
					width: 200,
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					formatter: function(row, index) {
						// console.log(row, index);
						return `<span @click="update">编辑一下${index}</span>`;
					}
				}
			]
		}
    },
    mounted() {
        const {dispatch} = this.$store;
		dispatch('duData1');
		dispatch('duData2', {page: 1});
		dispatch('duData3', {userId: 1})
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
			stateListData1: state => state.stateTest.data1,
			stateListData2: state => {
				// if(state.stateTest.data2.length) {
				// 	state.stateTest.data2.forEach(
				// 		// eslint-disable-next-line no-console
				// 		ele => {console.log(ele.id + ':' + ele.userId + '|' + ele.title)}
				// 	);
				// }
				return state.stateTest.data2;
			},
			stateListData3: state => state.stateTest.data3,
		})
	}
};