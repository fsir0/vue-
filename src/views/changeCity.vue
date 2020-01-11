<template>
    <div class="change-city">
        <search-city />
        <hot-city />
        <city-list />
    </div>
</template>

<script>
import searchCity from '@/components/changeCity/searchCity/searchCity.vue'
import hotCity from '@/components/changeCity/hotCity/hotCity.vue'
import cityList from '@/components/changeCity/cityList/cityList.vue'
export default {
    name: 'changeCity',
    components: {
        searchCity,
        hotCity,
        cityList
    }
}
</script>

<style lang="less">
.change-city {
    width: 1190px;
    margin: 20px auto 30px;
    padding: 20px;
    border: 1px solid #eee;
    background-color: #fff;
}
</style>
