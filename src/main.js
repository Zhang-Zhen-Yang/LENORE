import Vue from 'vue'
import App from './App.vue'
import mainJs from './style/main.css'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

// pages
import welcom from './pages/welcom.vue';
import artists from './pages/artists';
import goods from './pages/goods.vue';
import janpanese from './pages/janpanese.vue';
import nay from './pages/artists/nay.vue';
import zygo from './pages/artists/zygo.vue';


Vue.use(Vuex);
Vue.use(VueRouter);


const routes = [
  { path: '',
    redirect: '/index'},
  /**
   *首页
  */
  {
      path: '/welcom',
      component: welcom,
     /*  children: [
          {
              path: '',
              redirect: 'welcom'},
          {
              path: 'welcom',
              component: welcom},
      ] */
  },
  {
      path: '/goods',
      component: goods,
      /* children: [
          {
              path: '',
              redirect: 'welcom'},
          {
              path: 'welcom',
              component: welcom},
      ] */
  },
  {
      path: '/janpanese',
      component: janpanese,
      /* children: [
          {
              path: '',
              redirect: 'welcom'},
          {
              path: 'welcom',
              component: welcom},
      ] */
  },
  /**
   *艺术家们
  */
  {
      path: '/artists',
      component: artists,
      children: [
        {
          path: 'nay',
          component: nay},
        {
          path: 'zygo',
          component: zygo},
          /* {
              path: '',
              redirect: 'tobeshipped'}, */
          
      ]
  },
  {
    path: '/nay',
    component: nay,
  },
  {
    path: '/zygo',
    component: nay,
  }
];
const router = new VueRouter({
  base: '/index/',
  routes: routes// （缩写）相当于 routes: routes
});
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
