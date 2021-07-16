<template>
    <div class="box">
        <h1>
            <!-- 写在<mySlot></mySlot>标签中间的所有html元素以及自定义组件都会渲染到slot上 -->
            <slot></slot>
        </h1>
        <h4>具名插槽</h4>
        <div>
            <div>
                <el-tag type="success">
                    <slot name="title"></slot>
                </el-tag>
            </div>

            <div>
                <el-tag type="info">
                    <slot name="content"></slot>
                </el-tag>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mySlot',
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