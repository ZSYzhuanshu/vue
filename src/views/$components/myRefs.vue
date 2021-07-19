<template>
    <div class="box">
        <h1>ref指令</h1>
        <h4 ref="h4ref">1.ref获取dom节点</h4>
            <div>

            </div>
        <h4>2.ref调用组件内事件</h4>
            <div>

            </div>
    </div>
</template>

<script>
export default {
    name: 'myRefs',
    props: {
    },
    components: {},
    created() {
        this.$nextTick(() => {
            console.log('created', this.$refs.h4ref)
        })
    },
    // mounted() {
    //     console.log('mounted', this.$refs.h4ref)
    // },
    data() {
        return {
        }
    },
    methods: {
        handleClick() {
            this.$notify({
                title: '提示',
                message: '我通过ref触发',
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