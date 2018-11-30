<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div class="main-header">
      <div class="logo-header">
        <router-link :to="{ path: 'index' }" class="logo">
          LIVE FOR COOL
        </router-link>
        <button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <button class="topbar-toggler more"><i class="la la-ellipsis-v"></i></button>
      </div>
      <nav class="navbar navbar-header navbar-expand-lg">
        <div class="container-fluid">
          <ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li class="nav-item dropdown">
              <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false"> <img :src="require('@/images/classify_0.png')" alt="user-img" width="36" class="img-circle"><span >Hizrian</span></span> </a>
              <ul class="dropdown-menu dropdown-user">
                <li>
                  <div class="user-box">
                    <div class="u-img"><img :src="require('@/images/classify_0.png')" alt="user"></div>
                    <div class="u-text">
                      <h4>Hizrian</h4>
                      <p class="text-muted">hello@themekita.com</p><a @click='logout' class="btn btn-rounded btn-danger btn-sm">退出登录</a>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- /.dropdown-user -->
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- 导航 -->
    <div class="sidebar">
      <div class="scrollbar-inner sidebar-wrapper">
        <div class="user">
          <div class="photo">
            <img :src="require('@/images/classify_0.png')">
          </div>
          <div class="info">
            <a class="" data-toggle="collapse" href="#collapseExample" aria-expanded="true">
              <span>
                Hizrian
                <div class="user-level">Admin</div>
                <span class="caret"></span>
              </span>
            </a>
            <div class="clearfix"></div>

            <div class="collapse in" id="collapseExample" aria-expanded="true" style="">
              <ul class="nav">
                <li>
                  <a @click='logout'>
                    <span class="link-collapse">退出登录</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav">
          <template v-for="(item,index) in nav_list">
            <li :class="['nav-item',item.active?'active':'']">
              <a data-toggle="collapse" :href="'#Example'+index" aria-expanded="true" v-if="item.list">
                <i :class="item.icon"></i>
                <p>{{item.name}}</p>
                <span class="caret" v-if="item.list"></span>
              </a>
              <router-link :to="{ name: item.link }" v-else>
                <i :class="item.icon"></i>
                <p>{{item.name}}</p>
              </router-link>
            </li>
            <div class="collapse in" :id="'Example'+index" aria-expanded="true" v-if="item.list">
              <ul class="nav" style="margin-top:0px;padding-left: 30px;">
                <li :class="['nav-item',item.active?'active':'']" v-for="(item,idx) in item.list" :key="idx">
                  <router-link :to="{ path: item.link }">
                    <span class="link-collapse">{{item.name}}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </template>
        </ul>
      </div>
    </div>
    <!-- 内容 -->
    <div class="main-panel">
      <div class="content">
        <router-view/>
      </div>
    </div>

    <MyModal text='是否确认退出登录' id='myModal' @cancel='cancel' @confirm='confirm' />
  </div>
</template>

<script>
import MyModal from '@/components/MyModal'
export default {
  name: 'index',
  data() {
    return { 
      nav_list: [
        { name: '首页', link: 'index', icon: 'la la-home  ' },
        { 
          name: '系统', 
          icon: 'la la-gears', 
          list: [
            { name: '主页列表', link: 'indexList', icon: '' },
            { name: '主页轮播图', link: 'swiper', icon: '' },
            { name: '品牌列表', link: 'brand', icon: '' },
            { name: '品牌分类', link: 'brandType', icon: '' },
          ] 
        },
        { name: '商品', link: 'goods', icon: 'la la-cubes' },
        { 
          name: '媒体', 
          icon: 'la la-youtube-play', 
          list: [
            { name: '媒体列表', link: 'media', icon: '' },
            { name: '媒体评论', link: 'comment', icon: '' },
          ] 
        },
        { 
          name: '用户', 
          icon: 'la la-user', 
          list: [
            { name: '用户列表', link: 'user', icon: '' },
            { name: '管理员列表', link: 'admin', icon: '' },
          ] 
        },
        { name: '订单', link: 'order', icon: 'la la-clipboard' },

      ]
    }
  },
  watch: {
    $route(to) {
      this.navRouter(to.name)
    }
  },
  components: { 
    MyModal
  },
  methods: {
    // 退出登录
    logout() {
      $('#myModal').modal('show')
    },
    cancel() {},
    // 确认退出登录
    confirm() {
      $('#myModal').modal('hide')
      this.$router.push({ name: 'login' })
      api.removeItem('adminId')
    },
    navRouter(name){ // 路由变化时改变nav的选中
      if (!name) { name = 'index' } // 响应空
      name = name.split('_')[0] // 响应子节点
      var _this = this
      this.navClear()
      this.nav_list.map((item,index)=>{
        if (item.link) {
          if (item.link == name) {
            _this.$set( this.nav_list[index], 'active', true )
          }
        } else if (item.list) {
          item.list.map((item,idx)=>{
            if (item.link == name) {
              _this.$set( this.nav_list[index], 'active', true )
              _this.$set( this.nav_list[index].list[idx], 'active', true )
              $('#Example'+index).addClass('show')
            }
          })
        }
      })
    },
    navClear() { // 清除nav之前的选中
      var _this = this
      this.nav_list.map((item,index)=>{
        if (item.active) {
          _this.$set( this.nav_list[index], 'active', false )
        }
        if (item.list) {
          item.list.map((item,idx)=>{
            if (item.active) {
              _this.$set( this.nav_list[index].list[idx], 'active', false )
            }
          })
        }
      })
    },
  },
  mounted () { 
    // 初始化nav
    this.navRouter(this.$router.currentRoute.name)

    var adminId = api.getItem('adminId')
    if (!adminId) { this.$router.push({ name: 'login' }) }
  },
}
</script>

<style scoped>

</style>
