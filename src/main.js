// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './css/style.css'
import './fonts/iconfont.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ready.css' // 后台框架的css
import '../assets/css/demo.css' // demo的css	

import 'bootstrap/dist/js/bootstrap.min.js';
import '../assets/js/ready.js'; // 后台框架的js

import api from './js/api.js'
window.api = api

import axios from 'axios'
window.axios = axios

import './css/main.css'

Vue.config.productionTip = false

const VueUploadComponent = require('vue-upload-component')
Vue.component('file-upload', VueUploadComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
