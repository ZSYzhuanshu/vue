<template>
    <div class="box">
        <h1>v-bind,v-on指令</h1>
        <h4>1.v-bind属性绑定</h4>
        <!-- 
		通过v-bind将属性变为动态注入 
		操作方式
		通过v-bind:属性名="Vue实例内data中的指定属性"来实现将指定变量的结果设置到当前的标签内部
		如 v-bind:href="url"意思为将data中url的值设置到当前a标签的href中
		v-bind绑定的属性也可以直接写常量，如字符串需要用''修饰，没有通过''修饰的字符串会默认被认为是变量
		v-bind可以修饰所有的html标签属性以及自定义组件的属性
		-->

        <!-- v-bind:属性="变量" 可以直接简写为 :属性="变量" 来节省代码空间 -->
        <div>
            <!-- <el-input 
                style="width: 300px;"
                v-bind:value="value" 
                clearable
            ></el-input> -->
            <el-input 
                style="width: 300px;"
                :value="value" 
                clearable
            ></el-input>
            value的值：{{value}}
        </div>
        <h4>2.v-on事件绑定</h4>
        <!-- v-on:事件 可简写为  @事件 来节省代码空间，所有的html原生事件都可以用v-on来修饰 
			当需要给事件传参数的时候需要给对应的事件名加()在括号中传入参数
		-->
        <div>
            <el-button type="primary" v-on:click="handlePlus">+</el-button>
            {{count}}
			<el-button type="info" @click="handleJian">-</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'model-once',
    components: {},
    data() {
        return {
            value: '11111',
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