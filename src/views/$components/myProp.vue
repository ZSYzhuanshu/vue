<template>
    <div class="box">
        <h1>{{value}}</h1>
    </div>
</template>

<script>
export default {
    name: 'myProp',
    props: {
        value: {
            required: false,//该参数是否是必填参数
            type: String,//定义参数的类型如果允许多个类型可以使用[Stirng,Array]的写法，类型使用大写的对象名称
            default: () => { return '' }//组件的默认值，当required为true时不需要设置默认值  return后的内容为默认值
        }
    },
    components: {},
    data() {
        return {
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