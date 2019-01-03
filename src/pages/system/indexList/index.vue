<template>

  <div class="container-fluid">
    <h4 class="page-title">主页列表</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'indexList_add' }" class="btn btn-success">添加</router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>标题</th>
                    <th>banner图</th>
                    <th>商品</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in list' :key='index'>
                    <th scope="row">{{index+1}}</th>
                    <td>{{item.title}}</td>
                    <td><img :src="item.image"></td>
                    <td><img :src="item.image" v-for='(item,index) in item.list' :key='index'></td>
                    <td>
                      <!-- <button class="btn btn-info">查看</button> -->
                      <router-link :to="{ name: 'indexList_add', query: {id:item.id} }" class="btn btn-primary">修改</router-link>
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
      //   url: 'admin/indexList/delete',
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
      //   url: 'admin/indexList',
      //   success(res){
            var list = [{id: 1,title:'标题',image: require('@/images/index_bg.jpg'),list:[{id: 1,image:require('@/images/index_bg.jpg'),brank:'lfc',name:'衣服'}] },
              {id: 2,title:'标题',image: require('@/images/index_bg.jpg'),list:[{id: 1,image:require('@/images/index_bg.jpg'),brank:'lfc',name:'衣服'}] }]
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
