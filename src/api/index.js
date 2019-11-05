import Axios from 'axios'
export default {
    // 导航数据
    getNavData(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(() => {
                suc({
                    status: 200,
                    data: {
                        title: '全部分类',
                        list: [
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '美食', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '美食',
                                        link: '/',
                                        list: [
                                            { name: '代金券', link: '/' },
                                            { name: '甜点饮品', link: '/' },
                                            { name: '火锅', link: '/' },
                                            { name: '自助餐', link: '/' },
                                            { name: '小吃快餐', link: '/' },
                                            { name: '日韩料理', link: '/' },
                                            { name: '西餐', link: '/' },
                                            { name: '聚餐宴请', link: '/' },
                                            { name: '烧烤烤肉', link: '/' },
                                            { name: '东北菜', link: '/' },
                                            { name: '川湘菜', link: '/' },
                                            { name: '江浙菜', link: '/' },
                                            { name: '香锅烤鱼', link: '/' },
                                            { name: '粤港菜', link: '/' },
                                            { name: '中式烧烤/烤串', link: '/' },
                                            { name: '西北菜', link: '/' },
                                            { name: '咖啡酒吧茶馆', link: '/' },
                                            { name: '云贵菜', link: '/' },
                                            { name: '东南亚菜', link: '/' },
                                            { name: '海鲜', link: '/' },
                                            { name: '素食', link: '/' },
                                            { name: '台湾/客家菜', link: '/' },
                                            { name: '创意菜', link: '/' },
                                            { name: '汤/粥/炖菜', link: '/' },
                                            { name: '蒙餐', link: '/' },
                                            { name: '新疆菜', link: '/' },
                                            { name: '其他美食', link: '/' },
                                            { name: '京菜鲁菜', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '外卖', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '外卖',
                                        link: '/',
                                        list: [
                                            { name: '美团外卖', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '酒店', isHot: true, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '酒店星级',
                                        link: '/',
                                        list: [
                                            { name: '经济型', link: '/' },
                                            { name: '舒适/三星', link: '/' },
                                            { name: '高档/四星', link: '/' },
                                            { name: '豪华/五星', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '榛果民宿', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '热门城市',
                                        link: '/',
                                        list: [
                                            { name: '上海', link: '/' },
                                            { name: '成都', link: '/' },
                                            { name: '北京', link: '/' },
                                            { name: '重庆', link: '/' },
                                            { name: '南京', link: '/' },
                                            { name: '杭州', link: '/' },
                                            { name: '广州', link: '/' },
                                            { name: '西安', link: '/' },
                                            { name: '武汉', link: '/' },
                                            { name: '厦门', link: '/' },
                                            { name: '长沙', link: '/' },
                                            { name: '青岛', link: '/' },
                                            { name: '深圳', link: '/' },
                                            { name: '天津', link: '/' },
                                            { name: '苏州', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '热门房源',
                                        link: '/',
                                        list: [
                                            { name: '复式Loft', link: '/' },
                                            { name: '别墅', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '猫眼电影', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '热映电影',
                                        link: '/',
                                        list: [
                                            { name: '少年的你', link: '/' },
                                            { name: '催眠·裁决', link: '/' },
                                            { name: '终结者：黑暗命运', link: '/' },
                                            { name: '天气之子', link: '/' },
                                            { name: '沉睡魔咒2', link: '/' },
                                            { name: '中国机长', link: '/' },
                                            { name: '航海王：狂热行动', link: '/' },
                                            { name: '我和我的祖国', link: '/' },
                                            { name: '受益人', link: '/' },
                                            { name: '天作谜案', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '机票', isHot: false, link: '/' },
                                    { name: '火车票', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '机票',
                                        link: '/',
                                        list: [
                                            { name: '国内机票', link: '/' },
                                            { name: '国际/港澳台机票', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '火车票',
                                        link: '/',
                                        list: [
                                            { name: '火车票', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '休闲娱乐', isHot: false, link: '/' },
                                    { name: 'KTV', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '休闲娱乐',
                                        link: '/',
                                        list: [
                                            { name: '足疗按摩', link: '/' },
                                            { name: '洗浴/汗蒸', link: '/' },
                                            { name: '酒吧', link: '/' },
                                            { name: '密室逃脱', link: '/' },
                                            { name: '轰趴馆', link: '/' },
                                            { name: '茶馆', link: '/' },
                                            { name: '私人影院', link: '/' },
                                            { name: 'DIY手工坊', link: '/' },
                                            { name: '采摘/农家乐', link: '/' },
                                            { name: '网吧网咖', link: '/' },
                                            { name: '游乐游艺', link: '/' },
                                            { name: 'VR', link: '/' },
                                            { name: '桌面游戏', link: '/' },
                                            { name: '真人CS', link: '/' },
                                            { name: '棋牌室', link: '/' },
                                            { name: '其他玩乐', link: '/' }
                                        ]
                                    },
                                    {
                                        name: 'KTV',
                                        link: '/',
                                        list: [
                                            { name: 'KTV', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '生活服务', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '生活服务',
                                        link: '/',
                                        list: [
                                            { name: '衣物/皮具洗护', link: '/' },
                                            { name: '家政', link: '/' },
                                            { name: '搬家运输', link: '/' },
                                            { name: '送水', link: '/' },
                                            { name: '充值缴费', link: '/' },
                                            { name: '服饰/鞋包养护', link: '/' },
                                            { name: '开锁换锁', link: '/' },
                                            { name: '居家维修', link: '/' },
                                            { name: '管道疏通', link: '/' },
                                            { name: '家电维修清洗', link: '/' },
                                            { name: '电脑维修', link: '/' },
                                            { name: '手机维修', link: '/' },
                                            { name: '证件照/肖像摄影', link: '/' },
                                            { name: '照片冲印/图文文印', link: '/' },
                                            { name: '商务服务/法律服务', link: '/' },
                                            { name: '文化传媒机构', link: '/' },
                                            { name: '成人用品/情趣用品', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '丽人', isHot: false, link: '/' },
                                    { name: '美发', isHot: false, link: '/' },
                                    { name: '医学美容', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '丽人',
                                        link: '/',
                                        list: [
                                            { name: '美发', link: '/' },
                                            { name: '美甲美睫', link: '/' },
                                            { name: '美容美体', link: '/' },
                                            { name: '医学美容', link: '/' },
                                            { name: '瑜伽舞蹈', link: '/' },
                                            { name: '瘦身纤体', link: '/' },
                                            { name: '韩式定妆', link: '/' },
                                            { name: '祛痘', link: '/' },
                                            { name: '纹身', link: '/' },
                                            { name: '化妆品', link: '/' },
                                            { name: '养发', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '结婚', isHot: false, link: '/' },
                                    { name: '婚纱摄影', isHot: false, link: '/' },
                                    { name: '婚宴', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '结婚',
                                        link: '/',
                                        list: [
                                            { name: '婚纱摄影', link: '/' },
                                            { name: '旅拍', link: '/' },
                                            { name: '个性写真', link: '/' },
                                            { name: '婚宴', link: '/' },
                                            { name: '婚庆公司', link: '/' },
                                            { name: '婚纱礼服', link: '/' },
                                            { name: '西服定制', link: '/' },
                                            { name: '婚戒首饰', link: '/' },
                                            { name: '婚车租赁', link: '/' },
                                            { name: '司仪主持', link: '/' },
                                            { name: '彩妆造型', link: '/' },
                                            { name: '婚礼跟拍', link: '/' },
                                            { name: '婚礼小礼品', link: '/' },
                                            { name: '更多婚礼服务', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '亲子', isHot: false, link: '/' },
                                    { name: '儿童乐园', isHot: false, link: '/' },
                                    { name: '幼教', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '儿童乐园',
                                        link: '/',
                                        list: [
                                            { name: '婴儿游泳', link: '/' },
                                            { name: '其他亲子游乐', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '幼儿教育',
                                        link: '/',
                                        list: [
                                            { name: '早教中心', link: '/' },
                                            { name: '少儿英语', link: '/' },
                                            { name: '智力开发', link: '/' },
                                            { name: '托班/幼儿园', link: '/' },
                                            { name: '幼儿教育', link: '/' },
                                            { name: '其他幼儿教育', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '亲子摄影',
                                        link: '/',
                                        list: [
                                            { name: '儿童摄影', link: '/' },
                                            { name: '孕妇写真', link: '/' },
                                            { name: '上门拍', link: '/' },
                                            { name: '其他亲子摄影', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '孕产护理',
                                        link: '/',
                                        list: [
                                            { name: '月子会所', link: '/' },
                                            { name: '产后恢复', link: '/' },
                                            { name: '妇幼医院', link: '/' },
                                            { name: '孕产用品', link: '/' },
                                            { name: '开奶催乳', link: '/' },
                                            { name: '月嫂', link: '/' },
                                            { name: '亲子购物', link: '/' },
                                            { name: '宝宝派对', link: '/' },
                                            { name: '亲子服务', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '运动健身', isHot: false, link: '/' },
                                    { name: '健身中心', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '运动健身',
                                        link: '/',
                                        list: [
                                            { name: '健身中心', link: '/' },
                                            { name: '武术场馆', link: '/' },
                                            { name: '游泳馆', link: '/' },
                                            { name: '羽毛球馆', link: '/' },
                                            { name: '溜冰场', link: '/' },
                                            { name: '射箭馆', link: '/' },
                                            { name: '篮球场', link: '/' },
                                            { name: '网球馆', link: '/' },
                                            { name: '台球馆', link: '/' },
                                            { name: '乒乓球', link: '/' },
                                            { name: '足球场', link: '/' },
                                            { name: '高尔夫场', link: '/' },
                                            { name: '保龄球馆', link: '/' },
                                            { name: '体育场馆', link: '/' },
                                            { name: '马术场', link: '/' },
                                            { name: '壁球馆', link: '/' },
                                            { name: '更多运动', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '家装', isHot: false, link: '/' },
                                    { name: '建材', isHot: false, link: '/' },
                                    { name: '家居', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '装修设计',
                                        link: '/',
                                        list: [
                                            { name: '半包装修', link: '/' },
                                            { name: '全包装修', link: '/' },
                                            { name: '清包装修', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '装修建材',
                                        link: '/',
                                        list: [
                                            { name: '地板', link: '/' },
                                            { name: '瓷砖石材', link: '/' },
                                            { name: '橱柜', link: '/' },
                                            { name: '灯饰照明', link: '/' },
                                            { name: '厨卫洁具', link: '/' },
                                            { name: '油漆涂料', link: '/' },
                                            { name: '集成吊顶', link: '/' },
                                            { name: '墙纸墙艺', link: '/' },
                                            { name: '门窗', link: '/' },
                                            { name: '木材板材', link: '/' },
                                            { name: '家用五金', link: '/' },
                                            { name: '电工电料', link: '/' },
                                            { name: '楼梯', link: '/' },
                                            { name: '管材管件', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '家具家居',
                                        link: '/',
                                        list: [
                                            { name: '家具', link: '/' },
                                            { name: '床上用品/家纺', link: '/' },
                                            { name: '家居饰品', link: '/' },
                                            { name: '厨具餐具', link: '/' },
                                            { name: '智能家居', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '家装卖场',
                                        link: '/',
                                        list: [
                                            { name: '建材卖场', link: '/' },
                                            { name: '家居卖场', link: '/' },
                                            { name: '灯饰卖场', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '学习培新', isHot: false, link: '/' },
                                    { name: '音乐培训', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '音乐培训',
                                        link: '/',
                                        list: [
                                            { name: '钢琴', link: '/' },
                                            { name: '吉他', link: '/' },
                                            { name: '小提琴', link: '/' },
                                            { name: '古筝', link: '/' },
                                            { name: '架子鼓', link: '/' },
                                            { name: '声乐', link: '/' },
                                            { name: '其他音乐培训', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '职业技术',
                                        link: '/',
                                        list: [
                                            { name: '美容化妆', link: '/' },
                                            { name: '会计', link: '/' },
                                            { name: 'IT', link: '/' },
                                            { name: '厨艺', link: '/' },
                                            { name: '管理培训', link: '/' },
                                            { name: '摄影培训', link: '/' },
                                            { name: '司法考试', link: '/' },
                                            { name: '公务员培训', link: '/' },
                                            { name: '其他职业培训', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '外语技术',
                                        link: '/',
                                        list: [
                                            { name: '英语', link: '/' },
                                            { name: '日语', link: '/' },
                                            { name: '韩语', link: '/' },
                                            { name: '法语', link: '/' },
                                            { name: '德语', link: '/' },
                                            { name: '汉语', link: '/' },
                                            { name: '俄语', link: '/' },
                                            { name: '西班牙语', link: '/' },
                                            { name: '其他外语', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '美术技术',
                                        link: '/',
                                        list: [
                                            { name: '绘画', link: '/' },
                                            { name: '书法', link: '/' },
                                            { name: '其他培训', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '医疗健康', isHot: false, link: '/' },
                                    { name: '宠物', isHot: false, link: '/' },
                                    { name: '爱车', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '医疗健康',
                                        link: '/',
                                        list: [
                                            { name: '医院', link: '/' },
                                            { name: '齿科口腔', link: '/' },
                                            { name: '体检中心', link: '/' },
                                            { name: '药店', link: '/' },
                                            { name: '中医', link: '/' },
                                            { name: '其他健康服务', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '爱车',
                                        link: '/',
                                        list: [
                                            { name: '洗车', link: '/' },
                                            { name: '租车', link: '/' },
                                            { name: '加油站', link: '/' },
                                            { name: '维修保养', link: '/' },
                                            { name: '驾校', link: '/' },
                                            { name: '汽车美容', link: '/' },
                                            { name: '陪练', link: '/' },
                                            { name: '汽车用品', link: '/' },
                                            { name: '停车场', link: '/' },
                                            { name: '汽车保险', link: '/' },
                                            { name: '4S店/汽车销售', link: '/' },
                                            { name: '更多汽车服务', link: '/' },
                                            { name: '机油保养', link: '/' },
                                            { name: '汽车报价', link: '/' },
                                            { name: '二手车', link: '/' },
                                            { name: '广告驾校', link: '/' },
                                            { name: '交警队', link: '/' },
                                            { name: '汽车改装', link: '/' },
                                            { name: '汽车配件', link: '/' }
                                        ]
                                    },
                                    {
                                        name: '宠物',
                                        link: '/',
                                        list: [
                                            { name: '宠物店', link: '/' },
                                            { name: '宠物医院', link: '/' }
                                        ]
                                    }
                                ]
                            },
                            {
                                imgUrl: '',
                                nameList: [
                                    { name: '酒吧', isHot: false, link: '/' },
                                    { name: '密室逃脱', isHot: false, link: '/' }
                                ],
                                list: [
                                    {
                                        name: '玩乐',
                                        link: '/',
                                        list: [
                                            { name: 'KTV', link: '/' },
                                            { name: '酒吧', link: '/' },
                                            { name: '密室逃脱', link: '/' },
                                            { name: '游乐游艺', link: '/' },
                                            { name: '网吧网咖', link: '/' },
                                            { name: '私人影院', link: '/' },
                                            { name: 'DIY手工坊', link: '/' },
                                            { name: '桌面游戏', link: '/' },
                                            { name: '采摘/农家乐', link: '/' },
                                            { name: '棋牌室', link: '/' },
                                            { name: '轰趴馆', link: '/' },
                                            { name: '真人CS', link: '/' },
                                            { name: 'VR', link: '/' },
                                            { name: '其他玩乐', link: '/' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                })
            }).catch(err)
    },
    // 获取nav数据 url：https://as.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=151&limit=12
    getFloorData(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(res => {
                suc({
                    status: 200,
                    data: {
                        title: '有格调',
                        navList: [
                            { name: '全部' },
                            { name: '约会聚餐' },
                            { name: '丽人spa' },
                            { name: '电影演出' },
                            { name: '品质出游' }
                        ],
                        contentList: [
                            {
                                inx: '0',
                                cardList: [
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/w.h/mogu/a3c70845bffd26ce9df01de67c1971e0735080.jpg',
                                        title: '内蒙古大厦·玛那自助西餐厅',
                                        subTitle: '晚市单人自助套餐',
                                        position: '王府井/东单',
                                        activePrice: '188',
                                        originPrice: '门市价¥218',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/w.h/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg',
                                        title: '北京饭店诺金东33餐厅',
                                        subTitle: '桌餐C，建议8-10人使用，可免费使用包间',
                                        position: '王府井/东单',
                                        activePrice: '5000',
                                        originPrice: '门市价¥5954',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/42b9a65b88afab37efd7c2145c8cabda95091.jpg',
                                        title: 'théATRE 茶聚场（王府中環店）',
                                        subTitle: '蛋糕2选1,约6英寸，圆形',
                                        position: '王府井/东单',
                                        activePrice: '298',
                                        originPrice: '门市价¥330',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/w.h/bbia/ac56e0c35cd00ca55903c253498a673f117699.jpg',
                                        title: '牛叨（崇文门店）',
                                        subTitle: '牛排经典单人餐',
                                        position: '崇文门新世界',
                                        activePrice: '128',
                                        originPrice: '门市价¥142',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/913c7d2286d407e79a06bd77514b22df176709.jpg',
                                        title: '大教堂蛋糕 Kathedral（王府中环店）',
                                        subTitle: '蛋糕2选1,约6寸，圆形',
                                        position: '王府井/东单',
                                        activePrice: '318',
                                        originPrice: '门市价¥398',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/3070b16d9d5909693eaff72c1438210d1055965.png',
                                        title: '京城一锅羊蝎子',
                                        subTitle: '精品8人餐，提供免费WiFi',
                                        position: '崇文门新世界',
                                        activePrice: '617',
                                        originPrice: '门市价¥772',
                                        priceSuffix: ''
                                    }
                                ]
                            },
                            {
                                inx: '1',
                                cardList: [
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/w.h/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg',
                                        title: '北京饭店诺金东33餐厅',
                                        subTitle: '桌餐C，建议8-10人使用，可免费使用包间',
                                        position: '王府井/东单',
                                        activePrice: '5000',
                                        originPrice: '门市价¥5954',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/7776f22c9d6fd0413b7e52441b3f74557386836.jpg',
                                        title: '中央电视塔空中观景旋转餐厅',
                                        subTitle: '午餐+观光',
                                        position: '航天桥',
                                        activePrice: '248',
                                        originPrice: '门市价¥268',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/639a45dfc021a74e4c363e62488ae940548259.jpg',
                                        title: '脑子加工厂（前门大栅栏店）',
                                        subTitle: '经典双人餐，提供免费WiFi',
                                        position: '天安门广场',
                                        activePrice: '152',
                                        originPrice: '门市价¥202.6',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/05bb74b46e977a1947d27e9cb48ddcd32391357.jpg',
                                        title: '席上喳喳',
                                        subTitle: '工作日双人餐，提供免费WiFi',
                                        position: '王府井/前门',
                                        activePrice: '198',
                                        originPrice: '门市价¥310',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/16baae88c5d8d56af8c9146811147c511422264.png',
                                        title: '那年约火锅·烤场（回龙观店）',
                                        subTitle: '任性超级自助套餐',
                                        position: '回龙观',
                                        activePrice: '79.9',
                                        originPrice: '门市价¥580',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'https://img.meituan.net/w.h/msmerchant/1f5b280c340fb5d74080ffaebb6ec76476229.jpg',
                                        title: '杨记兴·臭鳜鱼（王府井店）',
                                        subTitle: '经典四人餐，提供免费WiFi',
                                        position: '王府井/东单',
                                        activePrice: '388',
                                        originPrice: '门市价¥544',
                                        priceSuffix: ''
                                    }
                                ]
                            },
                            {
                                inx: '2',
                                cardList: [
                                    {
                                        link: '/',
                                        imgUrl: '//p1.meituan.net/merchantpic/19d7ad2f8e4753a50442226610af0074506930.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D2%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                                        title: '米娜造型（嘉德公寓店）',
                                        subTitle: '米娜造型（嘉德公寓店）',
                                        position: '五棵松',
                                        activePrice: '',
                                        originPrice: '',
                                        priceSuffix: ''
                                    },
                                    {
                                        link: '/',
                                        imgUrl: '//p0.meituan.net/wedding/7f274360936a5233902be9afe5054eef4134276.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D2%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                                        title: '谦亨短发设计（新世界店）',
                                        subTitle: '谦亨短发设计（新世界店）',
                                        position: '崇文门新世界',
                                        activePrice: '197',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: '//p0.meituan.net/merchantpic/c4cd218873953a976d9f1c485de2190718522.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D2%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                                        title: 'EBI发妆店（崇文门店）',
                                        subTitle: 'EBI发妆店（崇文门店）',
                                        position: '崇文门新世界',
                                        activePrice: '422',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: '//p0.meituan.net/dpmerchantpic/eff3f19bde10e81a76cba12ed81edb66221107.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D2%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                                        title: 'Aso Beauty美甲美睫皮肤管理（崇文门店）',
                                        subTitle: 'Aso Beauty美甲美睫皮肤管理（崇文门店）',
                                        position: '崇文门新世界',
                                        activePrice: '196',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: '//p0.meituan.net/wedding/166aad5b3daa18080fd175895ac70460462275.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D2%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                                        title: '只劫财不劫色美甲美睫工作室',
                                        subTitle: '只劫财不劫色美甲美睫工作室',
                                        position: '崇文门新世界',
                                        activePrice: '85',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: '//p0.meituan.net/wedding/d5ea26ce7fb499ca3e53b075d8a08bb3243586.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D2%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
                                        title: 'Nail Raven日式美甲美睫（东方广场店）',
                                        subTitle: 'Nail Raven日式美甲美睫（东方广场店）',
                                        position: '王府井/东单',
                                        activePrice: '308',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    }
                                ]
                            },
                            {
                                inx: '3',
                                cardList: [
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/deal/201003/wanda.jpg',
                                        title: '万达影城（CBD店）',
                                        subTitle: '免押金,可停车,儿童票,IMAX厅,杜比全景声厅,60帧厅,RealD 6FL厅',
                                        position: '',
                                        activePrice: '45',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/poi/ac80e1c0c2eec53930c818da24a0f1e768466.jpg',
                                        title: '英嘉星美影城（原星美金源IMAX店）',
                                        subTitle: '免押金,儿童票,IMAX厅,4D厅,巨幕厅,RealD 6FL厅',
                                        position: '',
                                        activePrice: '24',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/deal/__23449013__2674468.jpg',
                                        title: '中影国际影城小西天中国巨幕头等舱',
                                        subTitle: '免押金,可停车,有情侣座,儿童票,有WIFI,中国巨幕厅,巨幕厅',
                                        position: '',
                                        activePrice: '39',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/deal/__31137021__2342842.jpg',
                                        title: '百老汇影城（国瑞购物中心店）',
                                        subTitle: '免押金,可停车,儿童票,双机3D厅,RealD厅,巨幕厅,60帧厅',
                                        position: '',
                                        activePrice: '28.9',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/deal/__29661209__6853522.jpg',
                                        title: '中影国际影城（丰台千禧街店）',
                                        subTitle: '免押金,可停车,有情侣座,儿童票,中国巨幕厅,60帧厅,RealD 6FL厅',
                                        position: '',
                                        activePrice: '31.9',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/poi/0436106d5c1b04cd9b525f06231e86da140545.jpg',
                                        title: '保利国际影城（绿地缤纷城店）',
                                        subTitle: '免押金,可停车,有情侣座,儿童票,有WIFI,4D厅,RealD厅',
                                        position: '',
                                        activePrice: '28.9',
                                        originPrice: '',
                                        priceSuffix: '人均'
                                    }
                                ]
                            },
                            {
                                inx: '4',
                                cardList: [
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/w.h/tdchotel/8d2d8549f205d79fbc2319f65ac1ff821861291.png',
                                        title: '北京三里屯通盈中心洲际酒店',
                                        subTitle: '',
                                        position: '',
                                        activePrice: '2379',
                                        originPrice: '',
                                        priceSuffix: '起'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/w.h/tdchotel/b90641df1318d69a5592a46afc5908ff710821.png',
                                        title: '北京维景国际大酒店',
                                        subTitle: '',
                                        position: '',
                                        activePrice: '1569',
                                        originPrice: '',
                                        priceSuffix: '起'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/w.h/tdchotel/1747e5e250fb0ce26d19261bbec4c88e453877.jpg',
                                        title: '向东方花园国际酒店',
                                        subTitle: '',
                                        position: '',
                                        activePrice: '680',
                                        originPrice: '',
                                        priceSuffix: '起'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/w.h/tdchotel/db53eed65ed6d0dfb83699c6608a9ff5182551.jpg',
                                        title: '日坛宾馆',
                                        subTitle: '',
                                        position: '',
                                        activePrice: '697',
                                        originPrice: '',
                                        priceSuffix: '起'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p1.meituan.net/w.h/dnaimgdark/e5bb7737b2e3a0f84353bf9d5cce118d2788828.jpg',
                                        title: '北京希尔顿酒店',
                                        subTitle: '',
                                        position: '',
                                        activePrice: '1462',
                                        originPrice: '',
                                        priceSuffix: '起'
                                    },
                                    {
                                        link: '/',
                                        imgUrl: 'http://p0.meituan.net/w.h/dnaimgdark/07c40e67bc073d082f9d1c9d562432292881497.jpg',
                                        title: '北京建国门CBD亚朵轻居酒店',
                                        subTitle: '',
                                        position: '',
                                        activePrice: '661',
                                        originPrice: '',
                                        priceSuffix: '起'
                                    }
                                ]
                            }
                        ]
                    }
                })
            }).catch(err)
    },
    // 获取friendlink数据
    getFriendlinkData(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(() => {
                suc({
                    status: 200,
                    data: {
                        title: '美团导航',
                        list: [
                            {
                                title: '热门城市',
                                list: [
                                    {
                                        name: '昆明',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '长春',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '贵阳',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '北京',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大连',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '东莞',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '青岛',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '南宁',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '无锡',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '天津',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '温州',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '合肥',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '成都',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '杭州',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '宁波',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '深圳',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '广州',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '福州',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '郑州',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '济南',
                                        link: '/',
                                        isHot: false
                                    }
                                ]
                            }, {
                                title: '热门分类',
                                list: [
                                    {
                                        name: '酒店',
                                        link: '/',
                                        isHot: true
                                    },
                                    {
                                        name: '美食',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '休闲娱乐',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '运动健身',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '生活服务',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '上门服务',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '购物',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '时尚购',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '本地购物',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '结婚',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '摄影写真',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '宴会',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '丽人',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '母婴亲子',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '学习培训',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '家装',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '汽车服务',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '医疗',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '宠物',
                                        link: '/',
                                        isHot: false
                                    }
                                ]
                            }, {
                                title: '周边热门',
                                list: [
                                    {
                                        name: '大厂回族自治县酒店',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '廊坊美食',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '廊坊休闲娱乐',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县运动健身',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '门头沟区生活服务',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '廊坊上门服务',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '门头沟区购物',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '廊坊时尚购',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县本地购物',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '门头沟区结婚',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县摄影写真',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '门头沟区宴会',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '廊坊丽人',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '廊坊母婴亲子',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县学习培训',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县家装',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '门头沟区汽车服务',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县医疗',
                                        link: '/',
                                        isHot: false
                                    },
                                    {
                                        name: '大厂回族自治县宠',
                                        link: '/',
                                        isHot: false
                                    }
                                ]
                            }
                        ]
                    }
                })
            }).catch(err)
    }
}
