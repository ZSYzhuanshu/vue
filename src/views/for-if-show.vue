<template>
    <div class="box">
        <h1>v-for,v-if,v-show指令</h1>
        <h4>1.v-for列表渲染指令</h4>
		<!-- 通过v-for修饰的标签及其子元素都会按照当前循环的数组的长度生成对应的个数 
			v-for格式为 v-for="(数组的每个元素,当前循环到数组的下标) in 数组"
			每个被v-for修饰的标签必须要设置key的值，key值需要保证唯一性以便提高vue的渲染性能-->
        <div>
            <div v-for="(item, index) in classList" :key="index">
                <span>{{`姓名：${item.name} 年龄：${item.age} 成绩：${item.score}`}}</span>
            </div>
        </div>
        <h4>2.v-if条件渲染指令</h4>
        <div>
            <div v-for="(item, index) in classList" :key="index">
                <span v-if="item.score > 60">{{`姓名：${item.name} 年龄：${item.age} 成绩：${item.score}`}}</span>
            </div>
        </div>
        <h4>3.v-show条件渲染指令</h4>
        <div>
            <div v-for="(item, index) in classList" :key="index">
                <span v-show="item.score > 60">{{`姓名：${item.name} 年龄：${item.age} 成绩：${item.score}`}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'for-if-show',
    components: {},
    data() {
        return {
            classList: [
                { name: '蔡徐坤', age: '30', score: 50 },
                { name: '马保国', age: '65', score: 90 },
            ]
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