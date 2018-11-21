// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './css/style.css'
import './fonts/iconfont.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ready.css'
import '../assets/css/demo.css'

import 'bootstrap/dist/js/bootstrap.min.js';
import api from './js/api.js'
window.api = api

import axios from 'axios'
window.axios = axios

import './css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
