<template>
    <div class="box">
        <h1>v-model,v-once指令</h1>
        <h4>1.v-model用法</h4>
        <!--v-model会自动将data中指定的属性值绑定到当前组件中，
        并且引用后会持续与html组件关联，如输入框中人为再页面中输入新的值
        inputValue的值会同步发生变化-->

        <!-- v-model默认支持所有的可输入表单控件以及vue的自定义组件，不支持普通的html元素-->
        <div>
            <el-input 
                style="width: 300px;"
                v-model.trim="value" 
                clearable
            ></el-input>
            <el-button type="primary" @click="handleClick">按 钮</el-button>
            <div>
                输入框的值：{{value}}    
            </div>            
        </div>
        <h4>2.v-once用法</h4>
        <!-- v-once修饰的元素只在第一次执行时渲染，不继续监听数据的变化 -->
        <div>
            <span v-once>我只渲染一次:{{value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'model-once',
    components: {},
    data() {
        return {
            value: ''
        }
    },
    methods: {
        handleClick() {
            this.value = '我通过点击按钮改变了值'
        },
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
    .el-input{
        margin-right: 5px;
    }
}
</style>