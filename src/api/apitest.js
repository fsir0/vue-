import Axios from 'axios';

export default {
    // 获取10条数据，有城市、地址、电话等信息
    testapi(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', {
            params: Object.assign({
                page: 1,
                pageSize: 10
            }, params)
        })
            .then(suc).catch(err)
    },
    // 模拟一个请求获取100条数据
    testArticleApi(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/posts', {
            params: Object.assign({
                page: 1,
                pageSize: 10
            }, params)
        })
            .then(suc).catch(err)
    },
    // 获取userId对应的列表
    testUserApi(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/posts', {
            params: Object.assign({
                page: 1,
                pageSize: 10
            }, params)
        })
            .then(suc).catch(err)
    }
}