<template>

  <div class="container-fluid">
    <h4 class="page-title">主页轮播图</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'swiper_add' }" class="btn btn-success">添加</router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>图片</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in 4' :key='index'>
                    <th scope="row">
                      <span>{{index+1}}</span>
                    </th>
                    <td><img src="@/images/classify_0.png"></td>
                    <td>
                      <router-link :to="{ name: 'swiper_add', query: {id:'1'} }" class="btn btn-primary">修改</router-link>
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
      page: 1,
      page_length: 20,
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
      api.request({
        url: '',
        success(res){
          _this.$swal({
            title:"删除成功",
            text:"您已经删除了这条记录。",
            type:"success"
          },function(){
            _this.page = this.page - 1
            _this.pageData && _this.pageData()
          })
        }
      })
    },
    pageData(){
      api.request({
        url: '',
        success(res){}
      })
    }
  },
  mounted () { 
    this.pageData()
  },
}
</script>

<style scoped>

</style>
