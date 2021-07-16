<template>
    <div class="box">
        <h1>component组件</h1>
        <div>
            <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="component基本使用" name="myComponent">
                    <myComponent></myComponent>
                </el-tab-pane>
                <el-tab-pane label="组件的props选项" name="props">
                    <myProp :value="value"></myProp>
                </el-tab-pane>
                <el-tab-pane label="组件的自定义事件emit" name="emit">
                    <myEmit @mes="handleMes"></myEmit>
                </el-tab-pane>
                <el-tab-pane label="slot插槽" name="fourth">
                    <mySlot>
                        slot
                        <!-- v-slot:名称 代表当前的元素内容会指定显示到自定义组件中定义的name=title的插槽中 -->
                        <template v-slot:title>
                                我是标题
                        </template>
                        <!-- v-slot:名称 代表当前的元素内容会指定显示到自定义组件中定义的name=content的插槽中 -->
                        <template v-slot:content>
                                我是正文
                        </template>
                    </mySlot>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
// 引入组件
import myComponent from './$components/myComponent.vue'
import myProp from './$components/myProp.vue'
import myEmit from './$components/myEmit.vue'
import mySlot from './$components/mySlot.vue'

export default {
    name: 'compon',
    // 注册组件
    components: {
        myComponent,
        myProp,
        myEmit,
        mySlot,
    },
    data() {
        return {
            activeName: 'myComponent',
            value: 'props'
        }
    },
    methods: {
        handleMes(val) {
            this.$message({
                type: 'success',
                message: val,
            })
        }
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