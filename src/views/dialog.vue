<template>
  <div class="about">
    <h1>dialog组件</h1>
    <el-button type="danger" size="mini" @click="handleClick">点击打开弹窗</el-button>
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
      this.visible = true
    }
  },
}
</script>

<style lang="scss" scoped>
.about{
//   h1{
    text-align: center;
//   }
}
</style>
