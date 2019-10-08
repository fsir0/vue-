import testApi from '../../api/apitest'
// 定义state并初始化state
const state = {
	data1: [],
	data2: [],
	data3: [],
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
	uWarning(state, { msg }) {
		state.warning = msg || '';
	},
	uData1(state, { list }) {
		state.data1 = list;
	},
	uData2(state, { list }) {
		state.data2 = list
	},
	uData3(state, { list }) {
		state.data3 = list
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
	duWarning({ state, commit }, query) {
        // 请求开始触发全局loading开始
        commit('uLoadingFlag', true);
        // 模拟请求数据 请求时间1s
		setTimeout(() => {
			if (query == '996') {
				commit('uWarning', { msg: '996~~wenna~~wenna~~' + state.count });
			} else {
				commit('uWarning', { msg: 'green work environment!!nice!' });
            }
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		}, 1500);
    },
    duData1({commit}) {
        // 请求开始触发全局loading开始
		commit('uLoadingFlag', true);
        // 获取api数据
		testApi.testapi({ page: 1 }, res => {
			if (res && res.data && res.data.length) {
				commit('uData1', { list: res.data })
            }
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		}, err => {
			// eslint-disable-next-line no-console
            console.log('storeRequest:', err);
            // 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		});
	},
	duData2({commit}, query) {
		// 请求开始触发全局loading开始
		commit('uLoadingFlag', true);
		testApi.testArticleApi(query, res => {
			if(res && res.data && res.data.length) {
				commit('uData2', {list: res.data});
			}
			// 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		}, err => {
			// eslint-disable-next-line no-console
			console.log(err);
			// 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		})
	},
	duData3({commit}, query) {
		// 请求开始触发全局loading开始
		commit('uLoadingFlag', true);
		testApi.testUserApi(query, res => {
			if(res && res.data && res.data.length) {
				commit('uData3', {list: res.data});
			}
			// 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		}, err => {
			// eslint-disable-next-line no-console
			console.log(err);
			// 请求结束触发全局loading结束
            commit('uLoadingFlag', false);
		})
	}
};
export default { state, getters, mutations, actions }