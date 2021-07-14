<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <pieChart :data="data"/>
  </div>
</template>

<script>
import pieChart from '@/components/echarts/pieChart.vue'

export default {
  name: 'Home',
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
  },
}
</script>
