<template>
    <div class="box">
        <h1>
            <!-- 写在<mySlot></mySlot>标签中间的所有html元素以及自定义组件都会渲染到slot上 -->
            <slot></slot>
        </h1>
        <h4>1.具名插槽</h4>
        <div>
            <div>
                <el-tag type="success">
                    <slot name="title"></slot>
                </el-tag>
            </div>
            <br>
            <div>
                <el-tag type="info">
                    <slot name="content"></slot>
                </el-tag>
            </div>
        </div>
        <h4>2.作用域插槽</h4>
        <div>
            <!-- 当传入的数据展示通过slot标签修饰之后如果组件正常使用slot内部的内容会正常按照组件设计的内容去渲染
			当组件外部嵌套了template并且使用了与自定义组件中name相同的插槽slot中的内容便不会被渲染
			我们可以通过对slot绑定自定义属性的方式将值传到template中我们就可以通过template来实现让组件内部的数据可以
			被开发者更自由的使用 -->
			<div v-for="item in list" :key="item.id">
				<slot name="item" :item="item">
					{{item.name}}:{{item.phone}}
				</slot>
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
            list: [
                {name: 'asd', phone: '123456', email: '123@163.com'},
                {name: 'qwe', phone: '358325', email: 'dc76ca7@163.com'},
                {name: 'zxc', phone: '578635', email: 'S6887@163.com'},
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