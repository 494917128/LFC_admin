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
import brand from '@/pages/system/brand/index'
import brandType from '@/pages/system/brandType/index'

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

    { path: '*', name: '', component: home, 
      children: [
        { path: '/index', name: 'index', component: index }, 

        { path: '/swiper', name: 'swiper', component: swiper },
        { path: '/swiper_add', name: 'swiper_add', component: swiper_add }, 

        { path: '/indexList', name: 'indexList', component: indexList }, 
        { path: '/brand', name: 'brand', component: brand }, 
        { path: '/brandType', name: 'brandType', component: brandType }, 

        { path: '/goods', name: 'goods', component: goods }, 

        { path: '/media', name: 'media', component: media }, 
        { path: '/comment', name: 'comment', component: comment }, 

        { path: '/user', name: 'user', component: user }, 
        { path: '/admin', name: 'admin', component: admin }, 

        { path: '/order', name: 'order', component: order }, 
      ] 
    },
  ],
})
