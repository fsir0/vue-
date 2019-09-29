import testApi from '../../api/apitest'
// 定义state并初始化state
const state = {
	data1: [],
	warning: '警告信息唷！',
	count: 0
}
const getters = {};
// 处理action产生的结果，并把结果更新到state上
const mutations = {
	add(state) {
		state.count++;
	},
	discount(state) {
		state.count--;
	},
	uploadWarning(state, { msg }) {
		state.warning = msg || '';
	},
	updateData1(state, { list }) {
		state.data1 = list;
	}
};
// 触发的方法，在这里完成数请求将得到的数据commit返回给mutations内部的函数，方法第一位参数为当前store对象，内部有触发mutations的commit方法
const actions = {
	dispatchAdd({ commit }) {
		commit('add');
	},
	dispatchDiscount({ commit }) {
		commit('discount');
	},
	dispatchUploadWarning({ state, commit }, questData) {
		// 模拟请求数据 请求时间1s
		testApi.testapi({ page: 1 }, res => {
			// eslint-disable-next-line no-console
			console.log('storeRequest:', res);
			if (res && res.data && res.data.length) {
				commit('updateData1', { list: res.data })
			}
		}, err => {
			// eslint-disable-next-line no-console
			console.log('storeRequest:', err);
		});
		setTimeout(() => {
			if (questData == '996') {
				commit('uploadWarning', { msg: '996~~wenna~~wenna~~' + state.count });
			} else {
				commit('uploadWarning', { msg: 'green work environment!!nice!' });
			}
		}, 1000);
	}
};
export default { state, getters, mutations, actions }