<template>
  <div>
    <div class="form-group">
      <label :for="fileRef">{{title}}</label>
      <input type="file" :name='name' :multiple="multiple" class="form-control-file" :id="fileRef" :ref="fileRef" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
    </div>
    
    <div class="form-group">
      <label :for="fileRef" v-if='avatarList.length'>
        <div class="bd-example bd-example-images">
          <img :src='item' class='upload-image img-thumbnail' v-for='(item,index) in avatarList' :key='index'></img>
        </div>
      </label>
      <label :for="fileRef" v-else>
        <div class='upload-image-none justify-center'>+</div>
     </label>
    </div>
  </div>
</template>
<style>
.bd-example >  img {
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
export default {
  props: {
    name:{ type: String, default: 'image' },
    multiple:{ type: Boolean, default: false },
    title:{ type: String, default: '图片链接' },
    fileRef:{ type: String, default: 'avatarInput' },
    avatarList: { type: Array }
  },
  components: {
    
  },
  data() {
    return {

    }
  },
  methods: {
    changeImage(e) {
      this.$emit('changeImage', e)
    }
  },

}
</script>