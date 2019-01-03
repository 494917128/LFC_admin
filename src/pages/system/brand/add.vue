<template>
  <div class="container-fluid">
    <h4 class="page-title">品牌列表</h4>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <form id="ajaxForm" method="post" :action="url+'admin/swiper/set'" enctype="multipart/form-data">
            <div class="card-header">
              <a @click="$router.go(-1)" class="card-title"><i class="iconfont icon-back"></i>返回</a>
            </div>
            <div class="card-body">
              <input type="hidden" name='id' :value='id'>
              <div class="form-group">
                <label for="name">品牌名</label>
                <input type="text" class="form-control" name='name' id="name" placeholder="品牌名" :value='data.name||""'>
              </div>
              <ImageUpload name='image' :multiple='false' title='品牌LOGO' fileRef='image' :avatarList='imageList' @changeImage='changeImage' />
              <div class="form-group">
                <label for="exampleFormControlFile1">品牌视频</label>
                <input type="file" name="video" class="form-control-file" id="exampleFormControlFile1">
              </div>
              <ImageUpload name='video_poster' :multiple='false' title='品牌视频封面' fileRef='video_poster' :avatarList='posterList' @changeImage='changePoster' />
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
        this.imageList = [this.data.image]
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
        this.posterList = [this.data.video_poster]
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
      //   url: 'admin/swiper/detail',
      //   data: { id: this.id },
      //   success(res){
          var data = {
            id: 1,
            name: 'LFC',
            image: require('@/images/index_bg.jpg'),
            video: require('@/images/index_bg.jpg'),
            video_poster: require('@/images/index_bg.jpg'),
          }
          this.data = data
          _this.imageList = [this.data.image]
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