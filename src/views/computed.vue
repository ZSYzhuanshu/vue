<template>
    <div class="box">
        <h1>computed选项</h1>
        <h4>computed用法</h4>
        <div>
		<!-- 比较两种取值方式，在这种情况值表达式会变得特别长并且复杂度高，
            如果本页有多处需要展示其他格式的时候这种写法会造成改动量大的弊端,
            通过计算属性可以使属性的扩展变成可复用的值，也会让本页的代码变更成本变得更低
		-->
            <div>
                值表达式的方式: {{name.join('、')}}<br>
                时间：{{`${new Date(time).getFullYear()}年-${new Date(time).getMonth()+1}月-${new Date(time).getDate()}日`}}
            </div>
            <div>
                计算属性的方式: {{formatName(name)}}<br>
                时间：{{formatTime(time)}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'computed',
    components: {},
    data() {
        return {
            name: [ '奔驰', '宝马', '奥迪' ],
            time: new Date().getTime(),
        }
    },
    methods: {
    },
    // computed主要用于对data中的属性进行改造或扩展，并且当data的属性有改变时同时会触发computed的重新计算。
    // computed虽然定义的是函数形式，但是使用方法和使用属性完全一致，并且也将它视为属性，所以叫计算属性
    computed: {
        formatName() {
            return function(val) {
                return val.join('、')
            }
        },
        formatTime() {
            return function(val) {
                let d = new Date(val)
                return `${d.getFullYear()}年-${d.getMonth()+1}月-${d.getDate()}日`
            }
        }
    },
    watch: {
    },
}
</script>

<style lang="scss" scoped>
.box{
    h1{
        text-align: center;
    }
}
</style>