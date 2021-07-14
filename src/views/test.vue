<template>
    <div class="box">
        <div v-for="(item, index) in arr" :key="index">
            <div v-if="item.name === 'asd'">
                {{`${item.name}今年${item.age}岁`}}
            </div>
        </div>
        {{formatName(name)}}
        <br>
        <el-button type="primary" size="mini" @click="handleClick">按 钮</el-button>{{count}}
        <div>
            <div class="book"></div>
            <div class="div1"></div>
            <div class="div2"></div>
            <div class="div3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    component: {},
    data() {
        return {
            arr: [
                { name: 'asd', age: 18 },
                { name: 'zxc', age: 43 },
                { name: 'qwe', age: 25 },
            ],
            name: ['阿斯顿','按顺序','德芙'],
            count: 0,
        }
    },
    methods: {
        handleClick() {
            this.count+=1
        },
    },
    computed: {
        formatName() {
            return function(val) {
                return val.join('、')
            }
        }
    },
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
    .book{
        width: 100px;
        height: 100px;
        background-color: rgb(20, 5, 5);
        position: fixed;
        right: 8px;
        top: 25%;
    }
    .div1{
        height: 300px;
        background: #fff;
        // background-color: rgb(211, 136, 136);
    }
    .div2{
        position: relative;
        z-index: 6;
        box-shadow: 0 0 20px 20px #fff;
        background: #fff;
        height: 300px;
        // background-color: rgb(92, 31, 31);
    }
    .div3{
        height: 900px;
        background: #fff;
        // background-color: rgb(129, 68, 68);
    }
}
</style>