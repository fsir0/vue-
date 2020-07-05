import filterLocation from './filterLocation.vue'
export default {
    name: 'result-filter',
    components: {
        filterLocation
    },
    data() {
        return {
            filteredParams: {
                classification: '',
                localArea: '',
                humaneNum: ''
            },
            classification: ['代金券', '蛋糕甜点', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '汤/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
            area: [
                {
                    name: '朝阳区',
                    list: ['大望路', '双井', '北苑家园', '酒仙桥', '安贞', '管庄', '十八里店', '望京', '亮马桥', '建外大街', '朝外大街/世贸天阶', '左家庄', '亚运村', '四惠', '四惠东', '团结湖/朝阳公园', '三元桥', '太阳宫', '国贸/建外', '三里屯/工体', '对外经贸', '首都机场', '十里堡', '悠唐生活广场', '朝阳大悦城', '东坝', '石佛营', '甜水园', '八里庄', '工体', '百子湾', '传媒大学', '双桥', '北京欢乐谷', '高碑店', '北京东站', '霄云路', '蓝色港湾', '朝阳公园', '燕莎', '农业展览馆', '劲松', '潘家园', '姚家园', '十里河', '立水桥/北苑家园', '小营', '北沙滩', '大屯', '常营', '鸟巢/水立方', '世贸天阶', '草房', '首都机场生活区', '王四营', '霄云路/三元桥', '四惠交通枢纽', '西直河/亦庄', '和平里/国展中心', '孙河', '马泉营', '望京/善各庄 五方桥']
                },
                {
                    name: '海淀区',
                    list: ['双榆树', '上地', '远大路', '五棵松', '魏公村', '清河', '北下关', '中关村', '五道口', '航天桥', '苏州桥', '颐和园', '牡丹园/北太平庄', '公主坟/万寿路', '紫竹桥', '大钟寺', '知春路', '西三旗', '四季青', '香山/植物园', '北京大学', '人民大学', '万柳', '学院路', '北京西站/军博', '农业大学西区', '百望山森林公园/309医院']
                }
            ],
            filterHumaneNum: ['单人', '双人', '3-4人', '4-5人', '5-6人', '7-8人', '9-10人', '10人以上', '其他']
        }
    },
    methods: {
        // 修改分类选择
        handleChangeClassification(item) {
            this.filteredParams.classification = item || ''
            this.$emit('selectChange', Object.assign({}, this.filteredParams))
        },
        // 修改地区选择
        handleChangeSelect(item) {
            this.filteredParams.localArea = item || ''
            this.$emit('selectChange', Object.assign({}, this.filteredParams))
        },
        // 修改人数选择
        handleChangeHumaneNum(item) {
            this.filteredParams.humaneNum = item || ''
            this.$emit('selectChange', Object.assign({}, this.filteredParams))
        },
        // 清除全部
        handleClearSelect() {
            this.filteredParams.classification = this.filteredParams.localArea = this.filteredParams.humaneNum = ''
            this.$emit('selectChange', Object.assign({}, this.filteredParams))
        }
    }
}
