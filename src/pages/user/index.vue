<template>

  <div class="container-fluid">
    <h4 class="page-title">用户</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>用户ID</th>
                    <th>用户头像</th>
                    <th>用户名</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in 4' :key='index'>
                    <th scope="row">{{index+1}}</th>
                    <td>{{index+1}}</td>
                    <td><img src="@/images/classify_0.png"></td>
                    <td>用户名</td>
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

    }
  },
  components: {
  },
  methods:{

  },
  mounted () { 

  },
}
</script>

<style scoped>

</style>
