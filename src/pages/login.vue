<template>
  <div class="login-container justify-center">
    <img :src="require('@/images/index_bg.jpg')" class="login_bg">
    <div class="title">
      <div>LIVE FOR COOL</div>
      <div class="subtitle">后台管理系统登录</div>
    </div>
    <div class="content">
      <div class="input-view flexible">
        <i class="iconfont icon-bianji justify-center"></i>
        <input type="text" name="LFC_admin_name" placeholder="用户名" autocomplete="off"></input>
      </div>
      <div class="input-view flexible">
        <i class="iconfont icon-bianji justify-center"></i>
        <input type="password" name="LFC_admin_password" placeholder="密码" autocomplete="off"></input>
      </div>
      <button class="main_btn" @click='login'>登录</button>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    NavHeader,
  },
  methods:{
    login(){
      var _this = this
      // api.request({
      //   method: 'post',
      //   url: 'adminLogin',
      //   data: {
      //   },
      //   success (res) {
          api.setItem("adminId",1)
          _this.$router.push({ name: 'index' })
      //   }
      // })
    }
  },
  mounted () { 
    var adminId = api.getItem('adminId')
    if (adminId) {
      this.$router.push({ name: 'index' })
    }
  },
}
</script>

<style scoped>
  .login-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    flex-direction: column;
    color: #fff;
  }
  .login_bg {
    filter: blur(20px);
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    object-fit: cover;
  }
  .title {
    font-size: 30px;
    line-height: 1.6;
    z-index: 1;
    text-align: center;
  }
  .subtitle{
    font-size: 14px;
  }
  .content {
    flex-direction: column;
    padding: 40px 50px;
    margin-top: 20px;
    background-color: rgba(255,255,255,.3);
    z-index: 1;
  }
  .input-view {
    margin-bottom: 30px;
    width: 100%;
    height: 56px;
    padding: 8px;
    box-sizing: border-box;
    background-color: rgba(255,255,255,.3);
  }
  .input-view .iconfont{
    width: 40px;
    height: 30px;
    font-size: 20px;
    color: #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }
  .input-view input {
    flex: 1;
    height: 100%;
    background-color: transparent!important;
    color: #f2f2f2;
    padding: 0 10px;
    font-size: 16px;
  }

</style>
