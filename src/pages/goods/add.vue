<template>
  <div class="container-fluid">
    <h4 class="page-title">主页列表</h4>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <form id="ajaxForm" method="post" :action="url+'admin/product/set'" enctype="multipart/form-data">
            <div class="card-header">
              <a @click="$router.go(-1)" class="card-title"><i class="iconfont icon-back"></i>返回</a>
            </div>
            <div class="card-body">
              <input type="hidden" name='id' :value='id'>
              <div class="form-group">
                <label for="brand">品牌</label>
                <select class="form-control" name='brand_id' id="brand">
                  <option v-for='(item,index) in brand_list' :selected='item.id==data.brand_id' :value='item.id'>{{item.name}}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="name">商品名</label>
                <input type="text" class="form-control" name='name' id="name" placeholder="商品名" :value='data.name||""'>
              </div>
              <ImageUpload name='image' :multiple='false' title='商品图片' fileRef='image' :avatarList='avatarList' @changeImage='changeImage' />
              <div class="form-group">
                <label for="price">商品价格</label>
                <input type="number" class="form-control" name='price' id="price" placeholder="商品价格" :value='data.price||""'>
              </div>
              <div class="form-group">
                <label for="type">商品类型(PC)</label>
                <input type="text" class="form-control" name='type' id="type" placeholder="商品类型，多种类型用 小写“,” 隔开" :value='data.types||""'>
              </div>
              <ImageUpload name='detail[]' :multiple='true' title='大图介绍(小程序)' fileRef='detail' :avatarList='detailList' @changeImage='changeDetail' />
              <div class="form-group">
                <label for="sizes">尺码</label>
                <input type="text" class="form-control" name='sizes' id="sizes" placeholder="商品尺码，多种尺码用 小写“,” 隔开" :value='data.sizes||""'>
              </div>
              <div class="form-group">
                <label for="colors">颜色</label>
                <input type="text" class="form-control" name='colors' id="colors" placeholder="商品颜色，多种颜色用 小写“,” 隔开" :value='data.colors||""'>
              </div>
            </div>
            <div class="card-action">
              <div @click='submit' class="btn btn-success">保存</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>
<style>
.bd-example > img {
  margin: .25rem;
}
.upload-image{
  object-fit: cover;
  width: 200px;
  height: 200px;
}

.upload-image-none{
  width: 100px;
  height: 100px;
  font-size: 50px;
  border: 1px dashed #a0a0a0;
  border-radius: 10px;
}
</style>

<script>
import ImageUpload from '@/components/ImageUpload'
export default {
  components: {
    ImageUpload,
  },
  data() {
    return {
      id: '',
      url: config.url,
      brand_list: [],
      data: {},
      avatarList: [], // 图片（base64）列表
      detailList: [], // 图片（base64）列表
    }
  },
  watch: {

  },
  methods: {
    changeImage (e){
      var files = e.target.files,
        that = this
      this.avatarList = []

      if (files.length == 0) {
        this.avatarList = [this.data.image]
      }
      for (var i = 0; i < files.length; i++) {
        var file = files[i],
          reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e){
          that.avatarList.push(this.result)
        }
      }
    },
    changeDetail (e){
      var files = e.target.files,
        that = this
      this.detailList = []

      if (files.length == 0) {
        this.detailList = this.data.detail
      }
      for (var i = 0; i < files.length; i++) {
        var file = files[i],
          reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e){
          that.detailList.push(this.result)
        }
      }
    },
    submit() {
      this.upload()
    },
    upload: function(){
      var _this = this

      // 调用上传接口,把data传递给接口
      $("#ajaxForm").ajaxSubmit(function (res) {
        var _this = this
        if (res.status == 1) {
          this.$swal({
            title:"上传成功",
            text:"您已经上传了这条数据。",
            type:"success"
          },function(){_this.$router.go(-1)})
        } else {
          this.$swal({
            title:"上传失败",
            text:"发生未知错误",
            type:"error"
          })
        }
      });
    },
    brandData(){
      var _this = this 
      // api.request({
      //   url: 'admin/brand',
      //   data: { id: this.id },
      //   success(res){
          var list = [{id: 1,name:'标题',image: require('@/images/index_bg.jpg'),video:require('@/images/index_bg.jpg'),video_poster:require('@/images/index_bg.jpg'),banner:require('@/images/index_bg.jpg'),desc:'详情' },
            {id: 2,name:'标题',image: require('@/images/index_bg.jpg'),video:require('@/images/index_bg.jpg'),video_poster:require('@/images/index_bg.jpg'),banner:require('@/images/index_bg.jpg'),desc:'详情' }]

          _this.brand_list = list
      //   },
      // })
    },
    pageData() {
      var _this = this 
      // api.request({
      //   url: 'admin/product/detail',
      //   data: { id: this.id },
      //   success(res){
          var data = {
            id:1,
            brand_id:1,
            name: '衣服',
            image:require('@/images/index_bg.jpg'),
            price:45,
            type:['100%纯棉','纯手工打造'],
            detail:[require('@/images/index_bg.jpg'),require('@/images/index_bg.jpg')],
            sizes:['S','M'],
            colors:['白色','黑色']
          }
          data.types = data.type.join(',')
          data.sizes = data.sizes.join(',')
          data.colors = data.colors.join(',')
          this.data = data
          _this.avatarList = [this.data.image]
          _this.detailList = this.data.detail
      //   },
      // })
    },
  },
  mounted () { 
    this.id = this.$route.query.id||''
    this.brandData()
    if (this.id) {
      this.pageData()
    }
  },

}
</script>