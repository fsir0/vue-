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
    },
    // 获取搜索热词服务
    getHotService(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(() => {
                suc({
                    status: 200,
                    name: '热词搜索',
                    list: [
                        { name: '北京欢乐谷', link: '/' },
                        { name: '古北水镇', link: '/' },
                        { name: '八达岭长城', link: '/' },
                        { name: '米粑粑', link: '/' },
                        { name: '北京动物园', link: '/' },
                        { name: '中国国家博物馆', link: '/' },
                        { name: '圆明园', link: '/' },
                        { name: '赛纳河酒店', link: '/' }
                    ]
                })
            }).catch(err)
    },
    getNearlyHotService(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(setTimeout(() => {
                let res = { status: -1 }
                if (params && /[美食|美|食]/.test(params.keyword)) {
                    res = {
                        status: 200,
                        list: [
                            { name: '美食', link: '/' },
                            { name: '美食广场', link: '/' },
                            { name: '美食 三里屯', link: '/' },
                            { name: '美食 王府井', link: '/' },
                            { name: '美食 西单', link: '/' },
                            { name: '美食 大悦城', link: '/' },
                            { name: '美食 五道口', link: '/' },
                            { name: '美食 南锣鼓巷站', link: '/' },
                            { name: '美食 双井', link: '/' },
                            { name: '美食 悠唐生活广场', link: '/' }
                        ]
                    }
                } else if (params && /[电影|电|影]/.test(params.keyword)) {
                    res = {
                        status: 200,
                        list: [
                            { name: '电影', link: '/' },
                            { name: '电影票', link: '/' },
                            { name: '电影院 情侣', link: '/' },
                            { name: '电影主题酒店', link: '/' },
                            { name: '电影院 私人', link: '/' },
                            { name: '电影院 昌平区', link: '/' },
                            { name: '电影院 海淀区', link: '/' },
                            { name: '电影院 顺义区', link: '/' },
                            { name: '电影院 房山区', link: '/' },
                            { name: '电影院 大兴区', link: '/' }
                        ]
                    }
                } else {
                    res = { status: 200, list: [] }
                }
                suc(res)
            }, 200)).catch(err)
    },
    // 获取底部导航数据
    getFooterNav(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(suc({
                status: 200,
                list: [
                    {
                        name: 'list1',
                        list: [
                            {
                                name: '用户帮助',
                                list: [
                                    { name: '申请退款', link: '/' },
                                    { name: '查看美团券密码', link: '/' },
                                    { name: '常见问题', link: '/' },
                                    { name: '用户协议', link: '/' },
                                    { name: '隐私政策', link: '/' },
                                    { name: '反诈骗公告', link: '/' },
                                    { name: '消费者权益保障', link: '/' }
                                ]
                            }, {
                                name: '美团服务',
                                list: [
                                    { name: '美团外卖', link: '/' },
                                    { name: '美团酒店', link: '/' },
                                    { name: '猫眼电影', link: '/' },
                                    { name: '美团配送', link: '/' },
                                    { name: '美团云', link: '/' },
                                    { name: '大众点评', link: '/' },
                                    { name: '榛果民宿', link: '/' },
                                    { name: '无人配送', link: '/' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'list2',
                        list: [
                            {
                                name: '商家合作',
                                list: [
                                    { name: '美食商家入驻(非外卖)', link: '/' },
                                    { name: '美团外卖开店申请', link: '/' },
                                    { name: '美团收银官网', link: '/' },
                                    { name: '外卖配送加盟申请', link: '/' },
                                    { name: '美团点评餐饮学院', link: '/' },
                                    { name: '酒店商家入驻', link: '/' },
                                    { name: '境内度假商家入驻', link: '/' },
                                    { name: '综合商家入驻', link: '/' },
                                    { name: '榛果民宿房东商家入驻', link: '/' },
                                    { name: '商家开票申请', link: '/' },
                                    { name: '美团点评智能收银机', link: '/' },
                                    { name: '美团点评餐饮开放平台', link: '/' },
                                    { name: '美团点评收单', link: '/' },
                                    { name: '免费使用美团排队', link: '/' },
                                    { name: '快驴进货商家合作', link: '/' },
                                    { name: '美团闪购商家入驻', link: '/' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'list3',
                        list: [
                            {
                                name: '代理商加盟',
                                list: [
                                    { name: '美团外卖代理商招募', link: '/' },
                                    { name: '到店餐饮代理商招募', link: '/' },
                                    { name: '非餐饮代理商招募', link: '/' },
                                    { name: '美团联盟', link: '/' },
                                    { name: '美团收银招募线上分销商', link: '/' },
                                    { name: '美团点评5S服务商招募', link: '/' },
                                    { name: '美团收单渠道代理商招募', link: '/' }
                                ]
                            },
                            {
                                name: '美团规则',
                                list: [
                                    { name: '规则中心', link: '/' },
                                    { name: '规则目录', link: '/' },
                                    { name: '规则评议院', link: '/' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'list4',
                        list: [
                            {
                                name: '关注美团',
                                list: [
                                    { name: '美团新浪微博', link: '/' }
                                ]
                            },
                            {
                                name: '公司信息',
                                list: [
                                    { name: '关于我们', link: '/' },
                                    { name: '投资者关系', link: '/' },
                                    { name: '加入我们', link: '/' },
                                    { name: '商户诚信公约及管理办法', link: '/' },
                                    { name: '保险经纪资质', link: '/' }
                                ]
                            },
                            {
                                name: '廉正举报',
                                list: [
                                    { name: '廉正邮箱', link: '/' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'list5',
                        list: [
                            {
                                name: '消费者服务热线',
                                list: [
                                    { label: '外卖消费者：', name: '123456', link: '/' },
                                    { label: '外卖消费者：', name: '123457', link: '/' },
                                    { label: '外卖消费者：', name: '123458', link: '/' }
                                ]
                            },
                            {
                                name: '商家服务热线',
                                list: [
                                    { label: '外卖&餐饮商家：', name: '123456', link: '/' },
                                    { label: '休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：', name: '123466', link: '/' }
                                ]
                            },
                            {
                                name: '举报投诉热线',
                                list: [
                                    { label: '违法和不良信息举报电话：', name: '123456', link: '/' },
                                    { label: '举报邮箱', name: 'tousujubao@kenghuo.com', link: '/' }
                                ]
                            },
                            {
                                name: 'other',
                                list: [
                                    { name: '商家自助入驻美团入口', link: '/' }
                                ]
                            }
                        ]
                    }
                ]
            })).catch(err)
    }
}
