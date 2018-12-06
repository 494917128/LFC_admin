<template>

  <div class="container-fluid">
    <h4 class="page-title">管理员</h4>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <div class="card-title">
              <router-link :to="{ name: 'admin_add' }" class="btn btn-success">添加</router-link>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>管理员ID</th>
                    <th>管理员账号</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for='(item,index) in 4' :key='index'>
                    <th scope="row">{{index+1}}</th>
                    <td>{{index+1}}</td>
                    <td>123456</td>
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
