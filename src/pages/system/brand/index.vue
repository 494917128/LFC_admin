<template>
  <div class="container-fluid">
    <h4 class="page-title">品牌列表</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'brand_add' }" class="btn btn-success">添加</router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>品牌ID</th>
                    <th>品牌名</th>
                    <th>品牌LOGO</th>
                    <th>品牌视频</th>
                    <th>品牌视频封面</th>
                    <th>小程序大图</th>
                    <th>品牌介绍</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in list' :key='index'>
                    <th scope="row">{{item.id}}</th>
                    <td>{{item.name}}</td>
                    <td><img :src="item.image"></td>
                    <td><img :src="item.video"></td>
                    <td><img :src="item.video_poster"></td>
                    <td><img :src="item.banner"></td>
                    <td>{{item.desc}}</td>
                    <td>
                      <!-- <button class="btn btn-info">查看</button> -->
                      <router-link :to="{ name: 'brand_add', query: {id:item.id} }" class="btn btn-primary">修改</router-link>
                      <button class="btn btn-danger" @click='listDelete(1)'>删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import MyPagination from '@/components/MyPagination'
export default {
  data () {
    return {
      list: [],
    }
  },
  components: {
    MyPagination
  },
  methods:{
    clickPage ({page}) {
      if (page >= 1 && page <= this.page_length) {
        this.page = page
        this.pageData()
      }
    },
    listDelete(id){
      var _this = this
      this.$swal({
        title:"提示",
        text:"是否删除这条记录。",
        type:"warning",
        showCancelButton:true,
        confirmButtonColor:"#DD6B55",
        confirmButtonText:"确定",
        cancelButtonText:"取消",
      }).then((res) => {
        if (res.value) { 
          _this.deleteData()
        }
      })
    },
    deleteData(){
      var _this = this
      // api.request({
      //   url: 'admin/brand/delete',
      //   success(res){
          _this.$swal({
            title:"删除成功",
            text:"您已经删除了这条记录。",
            type:"success"
          },function(){
            _this.pageData && _this.pageData()
          })
      //   }
      // })
    },
    pageData(){
      var _this = this;
      // api.request({
      //   url: 'admin/brand',
      //   data: { page: this.page },
      //   success(res){
            var list = [{id: 1,name:'标题',image: require('@/images/index_bg.jpg'),video:require('@/images/index_bg.jpg'),video_poster:require('@/images/index_bg.jpg'),banner:require('@/images/index_bg.jpg'),desc:'详情' },
              {id: 2,name:'标题',image: require('@/images/index_bg.jpg'),video:require('@/images/index_bg.jpg'),video_poster:require('@/images/index_bg.jpg'),banner:require('@/images/index_bg.jpg'),desc:'详情' }]
            _this.list = list
      //   }
      // })
    }
  },
  mounted () { 
    this.pageData()
  },
}
</script>

<style scoped>

</style>
