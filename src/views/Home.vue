<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/page1/component1/helloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
