<template>
    <div class="box">
        <h1>emit</h1>
        <el-button type="primary" @click="handleClick">按 钮</el-button>
    </div>
</template>

<script>
export default {
    name: 'myEmit',
    components: {},
    data() {
        return {
        }
    },
    methods: {
        handleClick() {
            //this.$emit('事件名',参数)
            this.$emit('mes', '这是一条消息提示')
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