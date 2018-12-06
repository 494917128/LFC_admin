<template>
  <div class="container-fluid">
    <h4 class="page-title">主页轮播图</h4>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <form id="ajaxForm" method="post" action="" enctype="multipart/form-data">
            <div class="card-header">
              <div class="card-title">添加</div>
            </div>
            <div class="card-body">
              <ImageUpload :multiple='true' :avatarList='avatarList' @changeImage='changeImage' />
            </div>
            <div class="card-action">
              <button @click='upload' class="btn btn-success" :disabled='avatarList.length'>保存</button>
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
      avatarList: [],
    }
  },
  watch: {

  },
  methods: {
    changeImage (e){
      var files = e.target.files,
        that = this
      this.avatarList = []

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
      if (this.avatarList.length == 0) { return }
      this.upload()
    },
    upload: function(){
      var _this = this

      // 调用上传接口,把data传递给接口
      $("#ajaxForm").ajaxSubmit(function (res) {
        if (res.status == 1) {
            alert('上传成功')
        } else {
            alert('上传失败')
        }
      });

    },
  }
}
</script>