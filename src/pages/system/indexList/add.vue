<template>
  <div class="container-fluid">
    <h4 class="page-title">主页列表</h4>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <form id="ajaxForm" method="post" :action="url+'admin/indexList/set'" enctype="multipart/form-data">
            <div class="card-header">
              <a @click="$router.go(-1)" class="card-title"><i class="iconfont icon-back"></i>返回</a>
            </div>
            <div class="card-body">
              <input type="hidden" name='id' :value='id'>
              <div class="form-group">
                <label for="title">标题</label>
                <input type="text" class="form-control" name='title' id="title" placeholder="标题" :value='data.title||""'>
              </div>
              <ImageUpload name='image' :multiple='false' :avatarList='avatarList' @changeImage='changeImage' />
              <div class="form-group">
                <label for="title">商品</label>
                <select class="form-control" name='goods_id' id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
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
      data: {},
      avatarList: [], // 图片（base64）列表
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
    submit() {
      if (this.avatarList.length == 0&&!this.id) {
        this.$swal({
          title:"提示",
          text:"必须上传图片",
          type:"warning"
        });
        return; 
      }
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
    pageData() {
      var _this = this 
      // api.request({
      //   url: 'admin/indexList/detail',
      //   data: { id: this.id },
      //   success(res){
          var data = {
            id: 1,
            title: '专题推荐',
            image: require('@/images/index_bg.jpg'),
            list: [{id: 1,image:require('@/images/index_bg.jpg'),brank:'lfc',name:'衣服'}]
          }
          this.data = data
          _this.avatarList = [this.data.image]
      //   },
      // })
    },
  },
  mounted () { 
    this.id = this.$route.query.id||''
    if (this.id) {
      this.pageData()
    }
  },

}
</script>