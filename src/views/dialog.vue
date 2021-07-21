<template>
  <div class="about">
    <h1>dialog组件</h1>
    <el-button type="danger" size="mini" @click="handleClick">点击打开弹窗</el-button>
    <Dialog :dialogVisible.sync="visible">新增商品</Dialog>
    <lineChart :xDate="xDate"/>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue'
import lineChart from '../components/echarts/lineChart.vue'

export default {
  components: {
    Dialog,
    lineChart,
  },
  data() {
    return {
      count: 0,
      visible: false,
      xDate: ['Mon', '2', 'Wed', '1', 'Fri', 'Sat', 'Sun']
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
