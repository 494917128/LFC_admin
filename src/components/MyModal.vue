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
  name: 'MyModal',
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
  .modal_cover{
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    transition: all 0.3s;
    opacity: 0;
    visibility: hidden; }
  .show{
    visibility: visible;
    opacity: 1; }
  .modal_container{
    width: 300px;
    background-color: #E8E8E8;
    border-radius: 10px;
    overflow: hidden; }
  .title{
    height: 55px;
    font-size: 16px; }
  .content{
    padding: 0 15px 15px;
    text-align: center;
    font-size: 16px; }


  .modal-button{
    flex: 1;
    height: 45px;
    color: #0894ec;
    font-size: 16px; }
  .modal-button:hover { 
    background-color: rgba(0, 0, 0, .05); }
  .modal-line{
    height: 30px;
    width: 1px;
    background-color: #ccc; }
  .hover{
    background-color: #D4D4D4; }
</style>
