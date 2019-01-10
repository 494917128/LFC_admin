<template>

  <div class="container-fluid">
    <h4 class="page-title">商品列表</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'goods_add' }" class="btn btn-success">添加</router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>品牌</th>
                    <th>商品名</th>
                    <th>商品图</th>
                    <th>商品价格</th>
                    <th>商品介绍（pc端）</th>
                    <th>商品介绍图（小程序端）</th>
                    <th>商品尺码</th>
                    <th>商品颜色</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in list' :key='index'>
                    <th scope="row">
                      <span>{{item.id}}</span>
                    </th>
                    <td>{{item.brank}}</td>
                    <td>{{item.name}}</td>
                    <td><img :src="item.image"></td>
                    <td>{{item.price}}</td>
                    <td><span v-for='(item,index) in item.type' :key='index'><span v-if='index!=0'>,</span>{{item}}</span></td>
                    <td><img :src="item" v-for='(item,index) in item.detail' :key='index'></td>
                    <td><span v-for='(item,index) in item.sizes' :key='index'><span v-if='index!=0'>,</span>{{item}}</span></td>
                    <td><span v-for='(item,index) in item.colors' :key='index'><span v-if='index!=0'>,</span>{{item}}</span></td>
                    <td>
                      <router-link :to="{ name: 'goods_add', query: {id:'1'} }" class="btn btn-primary">修改</router-link>
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
      //   url: 'admin/product/delete',
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
      //   url: 'admin/product',
      //   success(res){
          var list = [{id:1,brand:'LFC',name: '衣服',image:require('@/images/index_bg.jpg'),price:45,type:['100%纯棉','纯手工打造'],detail:[require('@/images/index_bg.jpg'),require('@/images/index_bg.jpg')],sizes:['S','M'],colors:['白色','黑色']}, 
            {id:1,brand:'LFC',name: '衣服',image:require('@/images/index_bg.jpg'),price:45,type:['100%纯棉','纯手工打造'],detail:[require('@/images/index_bg.jpg'),require('@/images/index_bg.jpg')],sizes:['S','M'],colors:['白色','黑色']}]
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
