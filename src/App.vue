<template>
  <div id="app" class="flex">
    <leftBar></leftBar>
    <mainBlock></mainBlock>
  </div>
</template>

<script>
import leftBar from './c/left.vue';
import mainBlock from './c/main.vue';
export default {
  name: 'app',
  components: {leftBar, mainBlock},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
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
  /* color: #42b983; */
}
</style>
