<template>
    <div class="box">
        <h1>data选项</h1>
        <h4>data选项的说明</h4>
        <div>
            {{name}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'myData',
    components: {},
    // data选项必须为函数形式，并且返回一个json对象，json对象中的所有属性在

    // vue组件为了保证每个实例上的data数据的独立性，规定了必须使用函数，而不是对象。 
    // 因为使用对象的话，每个实例（组件）上使用的data数据是相互影响的，
    // 这当然就不是我们想要的了。 对象是对于内存地址的引用，直接定义个对象的话组件之间都会使用这个对象，
    // 这样会造成组件之间数据相互影响。
    data() {
        return {
            name: '小明'
        }
    },
    methods: {
    },
    computed: {
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