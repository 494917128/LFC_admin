<template>
  <!-- Modal -->
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{{title||'提示'}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{text}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click='cancel' v-if='!noCancel'>{{cancelText||'关闭'}}</button>
          <button type="button" class="btn btn-primary" @click='confirm'>{{confirmText||'确定'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modalId','title','text','noCancel','cancelText','confirmText'],
  data () {
    return {

    }
  },
  methods:{
    cover () {

    },
    cancel () {
      this.cover()
      this.$emit('cancel')
    },
    confirm () {
      this.cover()
      this.$emit('confirm')
    }
  },
  mounted () { 
   
  },
}
</script>

<style scoped>
.modal{
  z-index: 99999;
}
</style>
