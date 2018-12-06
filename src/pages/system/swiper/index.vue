<template>

  <div class="container-fluid">
    <h4 class="page-title">主页轮播图</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'swiper_add' }" class="btn btn-info">添加</router-link>
              <button class="btn btn-primary" @click='batchBtn'>{{is_batch?'取消':'批量操作'}}</button>
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
                      <label class="form-check-label" v-if='is_batch'>
                        <input class="form-check-input" type="checkbox" value="">
                        <span class="form-check-sign"></span>
                      </label>
                      <span v-else>{{index+1}}</span>
                    </th>
                    <td><img src="@/images/classify_0.png"></td>
                    <td>
                      <button class="btn btn-primary">修改</button>
                      <button class="btn btn-danger">删除</button>
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
export default {
  data () {
    return {
      is_batch: false, // 判断是否批量操作
    }
  },
  components: {
  },
  methods:{
    batchBtn() {
      this.is_batch = !this.is_batch
    }
  },
  mounted () { 
  },
}
</script>

<style scoped>

</style>
