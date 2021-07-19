<template>
    <div>
        <div ref="pieChart" style="width: 100%; height: 300px;"></div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            required: false,
            type: Array,
            default: () => { return [] }
        }
    },
    data() {
        return {
            chartInstance: null,
            option: {}
        }
    },
    mounted() {
        this.initChart()
        this.updateChart()
        window.addEventListener('resize', this.handleResize)
    },
    methods: {
        initChart () {
            this.chartInstance = this.$echarts.init(this.$refs.pieChart)
        },
        updateChart () {
            this.option = {
                backgroundColor: '#2c343c',
                title: {
                    text: 'Customized Pie',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: this.data.sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function () {
                            return Math.random() * 200;
                        }
                    }
                ]
            }
            this.chartInstance.setOption(this.option)
        },
        // 当浏览器大小发生变化会调用该方法，完成屏幕适配
        handleResize () {
            this.chartInstance && this.chartInstance.resize()
        }
    },
    beforeDestroy() {
        this.chartInstance && this.chartInstance.dispose()
        this.chartInstance = null
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style lang="">
    
</style>