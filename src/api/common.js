import Axios from 'axios'

export default {
    // 获取头部位置(假的url，实际没采用接口返回的参数)
    getPosition(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(() => {
                suc({
                    status: 200,
                    name: '北京',
                    list: [
                        {
                            name: '门头沟区',
                            link: '/'
                        },
                        {
                            name: '大厂回族自治县',
                            link: '/'
                        },
                        {
                            name: '廊坊',
                            link: '/'
                        }
                    ]
                })
            }).catch(err)
    },
    // 获取头部导航(假的url，实际没采用接口返回的参数)
    getHeaderNav(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(() => {
                suc({
                    status: 200,
                    'mymt': {
                        name: '我的美团',
                        link: '/',
                        list: [
                            { name: '我的订单', link: '/' },
                            { name: '我的收藏', link: '/' },
                            { name: '抵用券', link: '/' },
                            { name: '账户设置', link: '/' }
                        ]
                    },
                    'businesscenter': {
                        name: '商家中心',
                        link: '/',
                        list: [
                            { name: '商家中心', link: '/' },
                            { name: '美团智能收银', link: '/' },
                            { name: '我想合作', link: '/' },
                            { name: '手机免费开店', link: '/' },
                            { name: '餐饮代理招募', link: '/' },
                            { name: '商家开票申请', link: '/' },
                            { name: '免费合作美团排队', link: '/' }
                        ]
                    },
                    'mtrules': {
                        name: '美团规则',
                        link: '/',
                        list: [
                            { name: '规则中心', link: '/' },
                            { name: '规则目录', link: '/' },
                            { name: '规则评议院', link: '/' }
                        ]
                    },
                    'webnav': {
                        name: '网站导航',
                        link: '/',
                        list: [
                            {
                                name: '酒店旅游',
                                list: [
                                    { name: '国际机票', link: '/' },
                                    { name: '火车票', link: '/' },
                                    { name: '榛果民宿', link: '/' },
                                    { name: '经济型酒店', link: '/' },
                                    { name: '主题酒店', link: '/' },
                                    { name: '商务酒店', link: '/' },
                                    { name: '公寓', link: '/' },
                                    { name: '豪华酒店', link: '/' },
                                    { name: '客栈', link: '/' },
                                    { name: '青年旅社', link: '/' },
                                    { name: '度假酒店', link: '/' },
                                    { name: '别墅', link: '/' },
                                    { name: '农家院', link: '/' }
                                ]
                            },
                            {
                                name: '吃美食',
                                list: [
                                    { name: '烤鱼', link: '/' },
                                    { name: '特色小吃', link: '/' },
                                    { name: '烧烤', link: '/' },
                                    { name: '自助餐', link: '/' },
                                    { name: '火锅', link: '/' },
                                    { name: '代金券', link: '/' }
                                ]
                            },
                            {
                                name: '看电影',
                                list: [
                                    { name: '热映电影', link: '/' },
                                    { name: '热门影院', link: '/' },
                                    { name: '热映电影口碑榜', link: '/' },
                                    { name: '最受期待电影', link: '/' },
                                    { name: '国内票房榜', link: '/' },
                                    { name: '北美票房榜', link: '/' },
                                    { name: '电影排行榜', link: '/' }
                                ]
                            },
                            {
                                name: '手机应用',
                                list: [
                                    { name: '美团app', imgUrl: 'https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png', link: '/' },
                                    { name: '外卖app', imgUrl: 'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png', link: '/' },
                                    { name: '榛果app', imgUrl: 'https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png', link: '/' },
                                    { name: '点评app', imgUrl: 'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png', link: '/' },
                                    { name: '猫眼app', imgUrl: 'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png', link: '/' }
                                ]
                            }
                        ]
                    }
                })
            }).catch(err)
    }
}
