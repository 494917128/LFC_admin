import Vue from 'vue'
import Router from 'vue-router'

// 登录
import login from '@/pages/login/index'

// 首页
import index from '@/pages/index/index'

// 系统
import swiper from '@/pages/system/swiper'
import index_list from '@/pages/system/index_list'
import brand from '@/pages/system/brand'
import brand_type from '@/pages/system/brand_type'

// 商品
import goods from '@/pages/goods/index'

// 媒体
import media from '@/pages/media/index'
import comment from '@/pages/media/comment'

// 用户
import user from '@/pages/user/index'
import admin from '@/pages/user/admin'

// 订单
import order from '@/pages/order/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: login }, 

    { path: '/index', name: 'index', component: index }, 

    { path: '/swiper', name: 'swiper', component: swiper }, 
    { path: '/index_list', name: 'index_list', component: index_list }, 
    { path: '/brand', name: 'brand', component: brand }, 
    { path: '/brand_type', name: 'brand_type', component: brand_type }, 

    { path: '/goods', name: 'goods', component: goods }, 

    { path: '/media', name: 'media', component: media }, 
    { path: '/comment', name: 'comment', component: comment }, 

    { path: '/user', name: 'user', component: user }, 
    { path: '/admin', name: 'admin', component: admin }, 

    { path: '/order', name: 'order', component: order }, 

  ],
})
