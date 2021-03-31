// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  vue-amap 高德地图
import './plugins/vuemap.js';
// element-ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 骨架

//  公共CSS
import '../public/style.css';
// icon
import '@/icons' 
// API 链接
import {api} from './plugins/api.js'  
Vue.config.productionTip = false
//引用element
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
