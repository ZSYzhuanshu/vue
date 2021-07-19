<template>
    <div class="box">
        <h1>Vue的生命周期</h1>
        <h4>
            <el-button type="primary" size="mini" @click="handleClick">改变小明的值</el-button>
            {{name}}
            <el-button type="danger" size="mini" @click="handleDestory">销毁</el-button>
        </h4>
    </div>
</template>

<script>
export default {
    name: 'lifeCycle',
    components: {},
    data() {
        return {
            name:'小明'
        }
    },
    //data内容初始化之前
	beforeCreate() {
		console.log('beforCreate')
	//由于当前函数是在data内容没有初始化完成前所以this.name是无法访问到name的值的
		console.log(this.name)
        console.log(document.querySelector('h4'))
	},
	//data初始化完成
	created() {
		console.log('created')
	//由于当前函数是在data内容已经初始化完成this.name是可以访问到name的值的
		console.log(this.name)
        console.log(document.querySelector('h4'))
	},
	//页面容器渲染前
	beforeMount() {
		console.log('beforeMount')
        console.log(this.name)
	//当前获取的h4标签内部的值表达式是没有被渲染的
		console.log(document.querySelector('h4'))
	},
	//页面渲染完成
	mounted() {
		console.log('mounted')
        console.log(this.name)
	//当前获取的h4标签内部的值表达式是渲染完成的
		console.log(document.querySelector('h4'))
	},
	//页面变更前
	beforeUpdate() {
		console.log('beforeUpdate')
	},
	//页面变更完成
	updated() {
		console.log('updated')
	},
	//页面销毁前
	beforeDestroy() {
		console.log('beforeDestroy')
	},
	//页面销毁完成
	destroyed() {
		console.log('destroyed')
	},
    methods: {
		handleClick(){
			// 触发data的值的变化会造成页面的重新渲染
			this.name = '小黄'+Math.random()
		},
		handleDestory(){
			//销毁当前对象之后会执行销毁函数,销毁之后Vue的实例将不再有用
			this.$destroy()
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