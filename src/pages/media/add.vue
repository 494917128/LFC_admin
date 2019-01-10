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
              <input type="hidden" name='user_id' :value='1'>
              <div class="form-group">
                <label for="text">媒体内容</label>
                <input type="text" class="form-control" name='text' id="text" placeholder="媒体内容" :value='data.text||""'>
              </div>
              <ImageUpload name='images[]' :multiple='true' title='媒体图片' fileRef='image' :avatarList='imageList' @changeImage='changeImage' />
              <div class="form-group">
                <label for="video">媒体视频</label>
                <input type="file" name="video" class="form-control-file" id="video">
              </div>
              <ImageUpload name='video_poster' :multiple='false' title='媒体视频封面' fileRef='video_poster' :avatarList='posterList' @changeImage='changePoster' />
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
      imageList: [], // 图片（base64）列表
      posterList: [], // 图片（base64）列表
    }
  },
  watch: {

  },
  methods: {
    changeImage (e){
      var files = e.target.files,
        that = this
      this.imageList = []

      if (files.length == 0) {
        this.imageList = this.data.images
      }
      for (var i = 0; i < files.length; i++) {
        var file = files[i],
          reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e){
          that.imageList.push(this.result)
        }
      }
    },
    changePoster (e){
      var files = e.target.files,
        that = this
      this.posterList = []

      if (files.length == 0) {
        this.posterList = this.data.detail
      }
      for (var i = 0; i < files.length; i++) {
        var file = files[i],
          reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e){
          that.posterList.push(this.result)
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
    pageData() {
      var _this = this 
      // api.request({
      //   url: 'admin/media/detail',
      //   data: { id: this.id },
      //   success(res){
          var data = {
            id:1,
            user:{username:'aaa'},
            text: '内容',
            images:[require('@/images/index_bg.jpg'),require('@/images/index_bg.jpg')],
            video:require('@/images/index_bg.jpg'),
            video_poster:require('@/images/index_bg.jpg'),
          }
          this.data = data
          _this.imageList = this.data.images
          _this.posterList = [this.data.video_poster]
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