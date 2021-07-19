<template>
  <div class="about">
    <h1>值表达式,v-html,v-text指令</h1>
    <h4>1.值表达式(基本用法)</h4>
    <div>
      {{count}}
    </div>
    <h4>2.值表达式(表达式用法)</h4>
    <div>
      <!-- 正确示例 -->
      <!-- 值表达式可以使用Math Date String的api或运算符表达式，不可以使用流程结构语句 -->
      我的生日是(以年月日形式展示): {{birthday.split('-')[0]+'年'+birthday.split('-')[1]+'月'+birthday.split('-')[2]+'日'}}<br/>
      {{Math.random()*10}}<br/>
      {{new Date()}}<br/>
      {{'你好'+'啊'}}<br/>
      {{count === 0 ? '关闭': '开启'}}<br/>
      {{formatCarName(carName)}}
        <!-- 错误示例打开错误示例后网页将无法正常显示 -->
				<!-- {{var a = 1}} -->
				<!-- {{if(true){ return "a" }}} -->
    </div>
    <h4>3.v-html与v-text</h4>
    <div>
				<!-- v-html中可以解析并渲染html文档数据 -->
				<div v-html="content"></div>
				<!-- v-text中会以纯文本的形式输出变量数据的原始内容 -->
				<div v-text="content"></div>
			</div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      count: 0,
      carName: ['奔驰','宝马','奥迪'],
      birthday:'2020-01-01',
      content:`
							<p>
								<b>
									<u>
										<i>
											<s>
												我是html文档数据
											</s>
										</i>
									</u>
								</b>
							</p>
						`,
    }
  },
  computed: {
    formatCarName() {
      return (val) => {
        return val.join('、')
      }
    }
  },
  watch:{},
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.about{
  h1{
    text-align: center;
  }
}
</style>
