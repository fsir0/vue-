<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" :value="initData">
    <input type="text" :value="stateData" />
    <button @click="clickme"></button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HelloWorld",
  defineTest: 'onlyTestUse',
  props: {
    msg: String,
  },
  data() {
    return {
      text: '',
      stateDataNum: 0
    }
  },
  // mounted() {
  //   const {number, warning} = this.$store.state;
  //   this.stateDataNum = number;
  //   this.text = warning;
  // },
  methods: {
    clickme() {
      console.log(this);
      // this.$store.commit('add');
      this.$store.dispatch('dispatchDiscount');
      this.$store.dispatch('dispatchUploadWarning', '996');
      // console.log(this);
      // this.stateDataNum = this.$store.state.number;
      // console.log(this.$store.state.number);
      this.axios.get('http://jsonplaceholder.typicode.com/users', {params: {page: 1}})
        .then(res => {
          console.log('单纯测试', res);
        })
    }
  },
  // computed: {
  //   initData() {
  //     console.log('init');
  //     console.log(this, this.$store.state.warning);
  //     this.text = this.$store.state.warning || '';
  //     console.log('init1', this.text)
  //     return this.$store.state.warning;
  //   },
  //   stateData() {
  //     console.log('conputed');
  //     console.log(this.$store.state);
  //     return this.$store.state.number;
  //   }
  // }
  computed: {
    // 引入state变化的计算属性，并且computed中可添加自己想要的计算属性
    ...mapState({
      initData: state => state.stateTest.warning,
      stateData: state => state.stateTest.count
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 引入样式文件，作为局部样式 -->
<!-- <style scoped lang="less" src="../css/test.less"></style> -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
