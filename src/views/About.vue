<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" size="mini" @click="handleClick">按 钮</el-button>
    <el-button type="danger" size="mini" @click="handleClick1">点击打开弹窗</el-button>
    {{count}}
    <Dialog :dialogVisible.sync="visible">新增商品</Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue'

export default {
  components: {
    Dialog,
  },
  data() {
    return {
      count: 0,
      visible: false,
    }
  },
  computed: {},
  watch:{},
  methods: {
    handleClick() {
      this.count += 1
    },
    handleClick1() {
      this.visible = true
      // this.$message({
      //   type: 'success',
      //   message: '弹窗打开了',
      // })
    }
  },
}
</script>

<style lang="" scoped>
  
</style>
