<template>
  <div class="left">

    <router-link v-for="$val,index in links" :key="$val.to" :to="$val.to" class="router-a user-select-none">{{$val.name}}</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      msg: 'left',
      links: [
        {
          to: '/welcom',
          name: '欢迎来到丽之城',
        },
        {
          to: '/artists',
          name: '居民们',
        },
        {
          to: '/goods',
          name: '商品',
        },
        {
          to: '/janpanese',
          name: '杰哥日语',
        },

      ]
    }
  },
  created(){

  },
  mounted(){
    
  }
}
</script>

<style>
.left {
  width: 200px;
  border-right: 1px solid #aaa;
}
.left .router-a{
  display: block;
  color: #333;
  padding:10px;
  text-decoration: none;
}

</style>
