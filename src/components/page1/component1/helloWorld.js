import { mapState } from 'vuex'
import 'vue-easytable/libs/themes-base/index.css'
import Vue from 'vue'
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
			pageSize: 10,
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
					width: 150,
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					// formatter: function(row, index) {
					// 	// console.log(row, index);
					// 	return `<span @click="update">编辑一下${index}</span>`;
					// }
					// 传入组件的参数为rowData field index
					componentName: 'op-btn'
				}
			]
		}
    },
    mounted() {
        const {dispatch} = this.$store;
		dispatch('duData1');
		dispatch('duData2', {page: 1});
		dispatch('duData3', {userId: 1});
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
		},
		operateMethod(data) {
			// eslint-disable-next-line no-console
			console.log(data, 'emmit');
		},
		// 分页按钮
		pageChange(pageIndex) {
			let {dispatch} = this.$store;
			dispatch('duData3', {
				// 此处用userId代替page，因为此接口不支持page，但支持uaserId筛选
				userId: pageIndex,
				pageSize: this.pageSize
			})
		},
		pageSizeChange(size) {
			let {dispatch} = this.$store;
			this.pageSize = size;
			dispatch('duData3', {
				// 此处用userId代替page，因为此接口不支持page，但支持uaserId筛选
				userId: 1,
				pageSize: size
			})
		},
		
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
			this.$emit('on-custom-comp', {rowData, field, index});
			// 此处可以直接dispatch一个action去发起请求或者更新数据，就不再需要触发父组件的方法再去操作data了（得益于使用vuex）
			let {dispatch} = this.$store;
			dispatch('duCount', index);
			dispatch('duWarning', '996');
		}
	}
})