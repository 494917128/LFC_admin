import Vue from 'vue'
import Router from 'vue-router'

// 登录
import login from '@/pages/login'
import home from '@/pages/index'

// 首页
import index from '@/pages/index/index'

// 系统
import swiper from '@/pages/system/swiper/index'
import swiper_add from '@/pages/system/swiper/add'

import indexList from '@/pages/system/indexList/index'
import indexList_add from '@/pages/system/indexList/add'

import brand from '@/pages/system/brand/index'
import brand_add from '@/pages/system/brand/add'

import brandType from '@/pages/system/brandType/index'
import brandType_add from '@/pages/system/brandType/add'

// 商品
import goods from '@/pages/goods/index'
import goods_add from '@/pages/goods/add'

// 媒体
import media from '@/pages/media/index'
import media_add from '@/pages/media/add'

import comment from '@/pages/media/comment/index'
import comment_add from '@/pages/media/comment/add'

// 用户
import user from '@/pages/user/index'
import user_add from '@/pages/user/add'

import admin from '@/pages/user/admin/index'
import admin_add from '@/pages/user/admin/add'

// 订单
import order from '@/pages/order/index'
import order_add from '@/pages/order/add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: login }, 

    { path: '*', name: '', component: home, 
      children: [
        { path: '/index', name: 'index', component: index }, 



        { path: '/swiper', name: 'swiper', component: swiper },
        { path: '/swiper_add', name: 'swiper_add', component: swiper_add }, 

        { path: '/indexList', name: 'indexList', component: indexList }, 
        { path: '/indexList_add', name: 'indexList_add', component: indexList_add }, 

        { path: '/brand', name: 'brand', component: brand }, 
        { path: '/brand_add', name: 'brand_add', component: brand_add }, 

        { path: '/brandType', name: 'brandType', component: brandType }, 
        { path: '/brandType_add', name: 'brandType_add', component: brandType_add }, 



        { path: '/goods', name: 'goods', component: goods }, 
        { path: '/goods_add', name: 'goods_add', component: goods_add }, 



        { path: '/media', name: 'media', component: media }, 
        { path: '/media_add', name: 'media_add', component: media_add }, 

        { path: '/comment', name: 'comment', component: comment }, 
        { path: '/comment_add', name: 'comment_add', component: comment_add }, 



        { path: '/user', name: 'user', component: user }, 
        { path: '/user_add', name: 'user_add', component: user_add }, 
        
        { path: '/admin', name: 'admin', component: admin }, 
        { path: '/admin_add', name: 'admin_add', component: admin_add }, 



        { path: '/order', name: 'order', component: order }, 
        { path: '/order_add', name: 'order_add', component: order_add }, 
      ] 
    },
  ],
})
