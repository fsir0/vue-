<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  vertical-align: middle;
  width: 50px;
  height: 20px;
  border: none;
  background-color: #00d3ff;
  border-radius: 6px;
  margin-left: 15px;
  cursor: pointer;
  outline: none;
}
</style>
