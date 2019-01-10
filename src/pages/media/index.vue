<template>

  <div class="container-fluid">
    <h4 class="page-title">商品列表</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'media_add' }" class="btn btn-success">添加</router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>发送人</th>
                    <th>媒体内容</th>
                    <th>媒体图片</th>
                    <th>媒体视频</th>
                    <th>视频封面</th>
                    <th>总评论数</th>
                    <th>总点赞数</th>
                    <th>添加时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in list' :key='index'>
                    <th scope="row">
                      <span>{{item.id}}</span>
                    </th>
                    <td>{{item.user.username}}</td>
                    <td>{{item.text}}</td>
                    <td><img :src="item" v-for='(item,index) in item.images' :key='index'></td>
                    <td><img :src="item.video"></td>
                    <td><img :src="item.video_poster"></td>
                    <td>{{item.comment_num}}</td>
                    <td>{{item.like_num}}</td>
                    <td>{{item.add_time}}</td>
                    <td>
                      <router-link :to="{ name: 'comment', query: {id:'1'} }" class="btn btn-info">查看评论</router-link>
                      <router-link :to="{ name: 'media_add', query: {id:'1'} }" class="btn btn-primary">修改</router-link>
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
    <MyPagination :pageLength="page_length" :page="page" @clickPage="clickPage" />
  </div>

</template>

<script>
import MyPagination from '@/components/MyPagination'
export default {
  data () {
    return {
      list: [],
      page: 1,
      page_length: 1,
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
      //   url: 'admin/media/delete',
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
      var _this = this
      // api.request({
      //   url: 'admin/media',
      //   success(res){
          var list = [{id:1,user:{username:'aaa'},text: '内容',images:[require('@/images/index_bg.jpg'),require('@/images/index_bg.jpg')],video:require('@/images/index_bg.jpg'),video_poster:require('@/images/index_bg.jpg'),comment_num:31,like_num:1,add_time:'2018-09-13 16:11:33'}, 
            {id:1,user:{username:'aaa'},text: '内容',images:[require('@/images/index_bg.jpg'),require('@/images/index_bg.jpg')],video:require('@/images/index_bg.jpg'),video_poster:require('@/images/index_bg.jpg'),comment_num:31,like_num:1,add_time:'2018-09-13 16:11:33'}]
          _this.list = list
          _this.page_length = 20
      //   }
      // })
    }
  },
  mounted () { 
    this.page = 1

    this.pageData()
  },
}
</script>

<style scoped>

</style>
