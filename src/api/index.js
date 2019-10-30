import Axios from 'axios'
export default {
    // 导航数据
    getNavData(params, suc, err) {
        Axios.get('http://jsonplaceholder.typicode.com/users', { params })
            .then(() => {
                suc({
                    status: 200,
                    data: {
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
    }
}
