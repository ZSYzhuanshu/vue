<template>
    <div class="box">
        <h1>watch选项</h1>
        <h4>watch用法</h4>
        <div>
            <el-button type="primary" size="mini" @click="handlePlus">+</el-button>
            {{count}}
            <el-button type="danger" size="mini" @click="handleJian">-</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'watch',
    components: {},
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        handlePlus() {
            this.count += 1
        },
        handleJian() {
            this.count -= 1
        }
    },
    computed: {
    },
    // watch为与data平级的json对象，内部定义的函数名必须与要监听的data中的属性同名，
    // 并且在data中的属性有变更时就会触发watch中定义的监听函数。他的能力与computed类似不同的是watch并不是取值功能而是监听变化功能。
    watch: {
        count: function(val) {
            this.$message({
                type: 'success',
                message: `count改变了，变为${val}`
            })
        }
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