<template>
  <div class="artists">
    <router-link :to="'nay'">nay</router-link>
    <router-link :to="'zygo'">zygo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'demo'
    }
  },
  created(){

  },
  mounted(){
    
  }
}
</script>

<style>
.artists {

}

</style>
