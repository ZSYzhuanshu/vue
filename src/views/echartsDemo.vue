<template>
  <div class="home">
    <h1>echarts组件</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <pieChart :data="data"/>
  </div>
</template>

<script>
import pieChart from '@/components/echarts/pieChart.vue'

export default {
  name: 'echartsDemo',
  components: {
    pieChart
  },
  data() {
    return {
      data: []
    }
  },
  created() {
    this.data = [
      {value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 274, name: '联盟广告'},
      {value: 235, name: '视频广告'},
      {value: 400, name: '搜索引擎'}
    ]
    this.$store.dispatch('addCount')
    console.log(this.$store.state.setting.count)
  },
}
</script>

<style lang="scss" scoped>
.home{
  h1{
    text-align: center;
  }
}
</style>
