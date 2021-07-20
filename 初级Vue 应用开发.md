## 初级Vue 应用开发

## 1Vue基本介绍

![](\src\assets\logo.png)

### 1.1Vue是什么  

Vue 是一门以数据驱动页面渲染为核心的，为浏览器提供的模版渲染框架。

### 1.2为什么要使用Vue

由于时代的发展，现代web项目中在网页中的项目规模持续膨胀，对前端项目的可维护性以及性能要求逐渐升高，传统的html+css+JQ(JQuery)的形式没有模块化开发的能力导致大型web项目中大量面向过程的代码在同一个网页中堆积降低了项目的___可维护性___和___持续迭代性___，并且大量的DOM操作降低了浏览器的渲染性能，而Vue等以数据为核心驱动页面渲染的MVVM框架更加适合复杂繁琐的现代项目

### 1.3与JQuery的比较

Vue在第一次初始化的时候便通过一套虚拟dom层绑定了页面层(表示层)，整个框架运行过程不在使用dom方式操作网页，而JQuery每次更改页面都需要进行dom操作，在进行dom操作的过程中，每次获取节点都需要遍历html中的dom树并对页面元素进行更新，而Vue在绑定了虚拟dom之后只会针对有数据变更的节点进行更新也不会多次遍历dom树，从而使页面渲染速度得到了提升，并且Vue工程化的结构相对JQuery的方式也使web项目具有更好的维护性，下面我们来参考案例体验一下JQuery与Vue在写法上的不同。

> 工程化：
>
> 工程化就是，将一个项目的内容按照功能和业务拆分成一个一个的小模块，这样可以让项目的结构更加清晰，并且每个模块也是可以重复使用的

> ​	与Jquery对比如下

vue:

```vue
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>

<body>
    <div id="app">
        <ul>
            <!--根据数组数据自动渲染页面-->
            <li v-for="item in message">{{item}}</li>
        </ul>
        <button @click="add">添加数据</button>
    </div>
</body>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" type="text/javascript" charset="utf-8"></script>
<script>
    new Vue({
        data() {
			return {
               	message: ["第1条数据","第2条数据"],
            	i:2,
            }
        },
        methods:{
            //向数组添加一条数据即可
            add(){
                this.i++
                this.message.push("第"+this.i+"条数据")
            }
        }
    })
</script>
```

jquery:

```jQuery
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>

<body>
    <div id="app">
        <ul id="list">
            <li>第1条数据</li>
            <li>第2条数据</li>
        </ul>
        <button id="add">添加数据</button>
    </div>

</body>

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script>
  $(document).ready(function() {  
    var i=2;
    $('#add').click(function() { 
       i++; 
       //通过dom操作在最后一个li元素后手动添加一个标签
      $("#list").children("li").last().append("<li>第"+i+"条数据</li>")
    });  
  }); 
</script>
```

<span style="color:red">__在Vue中无需使用dom操作就可以实现页面的变更__</span>。

### 1.3Vue基于的设计模式MVVM介绍

MVVM全称是Model（数据层）-View（视图层）-ViewModel（视图的数据对象）

Vue是以数据为驱动的，Vue自身将DOM和数据进行绑定，一旦创建绑定，DOM和数据将保持同步，每当数据发生变化，DOM会跟着变化。 ViewModel是Vue的核心，它是Vue的一个实例。Vue实例时作用于某个HTML元素上的这个HTML元素可以是body，也可以是某个id所指代的元素。

<img src="\src\assets\mvvm.png" alt="mvvm" style="zoom: 80%;" />

## 2Vue快速上手

### 2.1Vue在网页中的引入方式

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

> 关于开发环境和生产环境的区别

+ 开发环境：指程序员在公司进行开发过程中使用的依赖包，开发环境统称development环境，简称dev环境。开发环境使用的依赖包中包含了更多的错误提示，语法检测，以及代码规范警告等功能。
+ 生产环境：指当项目上线时在物联网运行项目时使用的依赖包，生产环境统称为production环境，简称prod环境。在生产环境中依赖包会去掉所有的调试功能来精简包的体积，避免调试信息泄漏，也会使依赖包加载速度更快更安全。

### 2.2动手实现一个Vue的HelloWorld

1. 首先在案例文件夹中创建hello-vue.html文件
2. 将以下代码粘贴到hello-vue.html文件中并在vsCode中运行，之后参考代码中的注释阅读代码

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<!-- Vue渲染内容依赖的html容器 -->
		<div id="app">
			<!-- 通过{{}}值表达式将title的内容渲染在网页中 -->
			{{title}}
		</div>
    <!-- 由于Vue对象通过$mount指定渲染范围，所以在Vue的渲染范围之外无法实现对内部数据的渲染 -->
    {{title}}
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			//初始化Vue对象
			new Vue({
				//在data中return的对象的属性才能在页面中通过“值表达式”的方式展示
				data(){
					return {
						title:'Hello World! This is my first Vue page!'
					}
				}
				//$mount('css选择器')指要将当前Vue对象中的数据渲染在id为app的元素内
			}).$mount('#app')
		</script>
	</body>
</html>
```

## 3.Vue基础指令(指令可以理解为vue中可以使用的html属性，他并不是html的属性一般都会带有v-开头)

### 3.1值表达式,v-html,v-text指令

#### 3.1.1值表达式"{{}}"

值表达式可以理解为Vue实例中data选项内数据在网页上展示的一个通道，通过{{属性}}的形式将属性的值展示在网页上，{{}}内部可以使用data中的属性，String,Date,Math,Array等基础全局对象的Api，运算符表达式，以及Vue中computed选项中定义的计算属性(在计算属性中详解)。

> 案例参考

打开案例中的[value-html-text](http://localhost:8080/#/value-html-text) 运行并查看代码

#### 3.1.2v-html指令

v-html指令为Vue定义的取值指令，可以将data选项中定义的属性输出到指定的标签内部，并且可以解析属性中写的html代码，相当于js中的innerHTML操作

#### 3.1.3v-text指令

v-text指令为Vue定义的取值指令，可以将data选项中定义的属性输出到指定的标签内容，与v-html不同的是他会将属性的值完全以字符串的形式输出到网页，不会执行任何解析代码操作

> 案例参考

打开案例中的[value-html-text](http://localhost:8080/#/value-html-text)运行并查看代码

> v-html和v-text都是依赖标签进行值的渲染的

### 3.2v-model,v-once指令

#### 3.2.1v-model 指令

实现双向绑定的指令，可以将data选项中定义的属性绑定到表单控件上，并且当可输入或可变更的表单控件在页面中通过人为将其内部的内容改变时，同时也会将绑定在标签的这个data中的属性的值一起改变，同时如果data中的属性发生变化时页面也会随之改变，所以称之为双向绑定

#### 3.2.2.v-once指令

只渲染一次的指令，被v-once修饰的html标签以及他的子孙元素，在Vue第一次渲染页面之后的所有变更都会跳过这个标签，不会出发这个标签的重新变更，该指令可以提升Vue渲染网页的速度，让不需要频繁变更的组件跳过Vue的重新渲染

> 案例参考

打开案例中的[model-once](http://localhost:8080/#/model-once)运行并查看代码

### 3.3v-bind,v-on指令

#### 3.3.1v-bind属性绑定指令

实现数据单向绑定的指令，可以将data选项中声明的属性的值绑定到v-bind修饰的html属性上，当data中的属性值发生变化时，被绑定的html属性也会同时改变，但是人为修改标签上属性的值时不会出发data中属性值的变化，这点与v-model不同所以称之为单向绑定，另一点不同的是v-model相当于绑定了表单控件的value属性，而v-bind可以绑定html标签上的任何属性

```vue
<!-- 使用格式 v-bind:(html属性)="data选项中的属性" -->
<a v-bind:href="data中的属性"></a>
```

#### 3.3.2v-on事件绑定指令

v-on指令是向html标签上绑定事件的指令，与html原生的“on事件名”不同的是被v-on修饰的事件会直接绑定在Vue实例中的methods选项中并且在被绑定的事件中可以直接访问Vue实例中data选项的值，所以可以通过Vue的事件直接操作Vue的数据来实现对页面数据的更新，从而不再需要获取dom对象

> 案例参考

打开案例中的[bind-on](http://localhost:8080/#/bind-on)运行并查看代码

### 3.4v-for,v-if,v-show指令

#### 3.4.1v-for列表渲染指令

列表渲染指令是Vue模版语法在html标签中提供的语法糖，被他修饰的标签可以直接通过data选项中定义的数组类型数据在html标签上直接进行循环输出，无需通过dom方式用js append到html代码中。被v-for修饰的标签上还需要绑定key属性，key属性为唯一标识，主要用于提升列表变更时的渲染速度，key必须时唯一的不可以为空

```vue
<!--item代表数组中的每个元素，index为数组当前循环到的下标 -->
<span v-for="(item[,index]) in 数组" v-if="" :key="唯一标识(可以使用index或者数组中具有唯一性的元素)">
	{{item}}{{index}}
</span>
```

#### 3.4.2v-if条件渲染指令

v-if条件渲染指令包含v-if,v-else-if,v-else三个指令，与js的ifelse语法相同，唯一不同的是该指令是用在html标签上的并且只有条件生效的指令修饰的标签最终会渲染到网页中

```vue
<!-- v-if 和 v-else-if需要设置值，可以直接使用布尔常量或比较表达式，表达式内使用的变量为data选项中定义的变量 v-else-if 是非必要指令可以省略，v-if也可以单独使用不与v-else连写 -->
<div v-if="条件">
  内容
</div>
<div v-else-if="条件">
  内容
</div>
<div v-else>
  内容
</div>
```

> 案例参考

打开案例文件夹中的[for-if-show](http://localhost:8080/#/for-if-show)运行并查看代码

#### 3.4.3v-show条件渲染指令

v-show指令与v-if有类似的能力都可以通过布尔结果决定标签是否展示，与v-if不同的是v-show不存在else的情况

要么显示要么不显示，还有一点就是v-show修饰的标签在判断为false的情况是通过display:none来隐藏的而v-if修饰的标签在判断为false的情况是不会插入html文档中的，因此涉及到频繁显示隐藏的元素推荐使用v-show来修饰这样可以见效html标签创建和删除的性能开销

```vue
<!--使用方式参考 -->
<div v-show="布尔值">
  内容
</div>
```



> 案例参考

打开案例中的[for-if-show](http://localhost:8080/#/for-if-show)运行并查看代码

## 4.Vue基础选项

### 4.1data选项

Vue 实例的数据对象。Vue 将会递归将 data 的 property 转换为 getter/setter，从而让 data 的 property 能够响应数据变化。**对象必须是纯粹的对象 (含有零个或多个的 key/value 对)**：浏览器 API 创建的原生对象，原型上的 property 会被忽略。大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象。

一旦观察过，你就无法在根数据对象上添加响应式 property。因此推荐在创建实例之前，就声明所有的根级响应式 property。

__总结：data属性相当于Vue实例的核心数据源，在Vue中的所有数据都是在data中提供的，只有在data中声明的属性才能在html中产生关联关系,并且data属性不可以在Vue实例化之后去追加属性__

> 案例参考

打开案例中的[data](http://localhost:8080/#/data)运行并查看代码

### 4.2computed选项

计算属性，computed是与data平级的一个json对象，在computed中可以创建一个函数，函数必须有返回值，该函数可以直接在页面中与data同等的方式引用。computed主要用于对data中的属性进行改造或扩展，并且当data的属性有改变时同时会触发computed的重新计算。computed虽然定义的是函数形式，但是使用方法和使用属性完全一致，并且也将它视为属性，所以叫计算属性

```vue
<!-- 使用方式 -->
<div id="app">
  {{name}}{{getName}}
</div>
<script>
	new Vue({
    data(){
      name:'小明'
    },
    computed:{
      getName(){
        return '我的名字是'+this.name
      }
    }
  }).$mount('#app')
</script>
```

> 案例参考

通过案例比较值表达式和计算属性的用途区别，

值表达式用于直接取值在页面显示，计算属性用于在当data中某个值需要做进一步处理时使用由于在值表达式中使用大量的表达式语法会使页面变得凌乱而且如果在页面中同样的值有多次使用的话通过计算属性的方式可以使处理过程复用。

打开案例中的[computed](http://localhost:8080/#/computed)运行并查看代码

### 4.3watch选项

watch选项主要用于监听data中定义的属性，watch为与data平级的json对象，内部定义的函数名必须与要监听的data中的属性同名，并且在data中的属性有变更时就会触发watch中定义的监听函数。他的能力与computed类似不同的是watch并不是取值功能而是监听变化功能。

```vue
<!-- 使用方式 -->
<script>
	new Vue({
    data(){
      name:'小明'
    },
    watch:{
      name(newValue){
        //当name的值发生变更时就会触发name函数执行，newValue就是name的新值
      }
    }
  }).$mount('#app')
</script>
```



> 案例参考

打开案例中的 [watch](http://localhost:8080/#/watch)运行并查看代码

### 4.5methods选项

methods主要用于Vue中的事件定义，methods为与data平级的json对象，methods中定义的事件为v-on中监听的事件。所以我们回头再去看一下v-on中的代码案例

> 案例参考

打开案例中的[bind-on](http://localhost:8080/#/bind-on)运行并查看代码

## 5.Vue的生命周期

Vue的生命周期是以钩子函数的形式在代码中执行的，`钩子`函数的意思是回调函数就是在new Vue()的时候进行到指定的阶段就会执行指定的函数，之所以称之为钩子是因为他展现了Vue实例化从头到尾的过程并且函数内部的逻辑并不会阻断Vue的生命周期。

首先我们看一下Vue的生命周期图

<img src="\src\assets\lifecycle.png" alt="life-cycle" style="zoom: 50%;" />

阅读图片后我们发现Vue主要的生命周期有以下几种

+ beforeCreate __在data选项内容创建之前执行__
+ created __data内数据创建完成执行__
+ beforeMount __在网页视图渲染前执行__
+ mounted __在网页视图渲染完成执行__
+ beforeUpdate __在网页视图发生变化前执行__
+ updated __在网页视图变化后执行__
+ beforeDestroy __在Vue对象销毁前执行__
+ Destroyed __在Vue对象销毁后执行__

生命周期主要用于帮助我们理解Vue的运行流程，并不是每个阶段都必须使用所以我们以下面的实例参考Vue的生命周期

> 案例参考

打开案例中的[lifeCycle](http://localhost:8080/#/lifeCycle)运行并查看代码

## 6.Vue组件

### 6.1什么是组件组件有什么好处

在之前的学习过程中我们只是学习了Vue的基础指令，和基本用法等内容已经初步的学会了Vue的使用，但是这并不是Vue真正的使用方式，在真正的项目开发过程中，网页的复杂度会非常的高所以我们在公司做开发的时候并不是把所有代码都写在new Vue()这个对象中。所以Vue特别推出了组件化的思想，将所有的html页面元素都按照业务或功能分成独立的模块，不同的模块就是一个单独的组件。

组件在Vue中被称为Component，通俗的讲就是通过Vue实现的自定义html标签。

组件化的好处：

1. 可以让大型的复杂系统清晰化，每个功能和业务都是单独拆分并将逻辑写在独立的组件内部，这样代码就特别容易定位和维护。
2. 重复的功能抽离成组件之后可以在系统中复用，同样的功能只需要写一个组件在需要的地方使用就可以了
3. 每个组件都有独立的生命周期，我们在Vue的生命周期学习中体验了beforeUpdate和updated两个生命周期，当data中的值发生变化时就会触发Vue的重新渲染，抽离成组件之后组件内部的data数据更新只会触发组件内部重新渲染并不会让Vue对象将所有元素重新渲染一次，这样大大减小了页面渲染的开销

### 6.2在Vue中使用组件

Vue的全局api中提供了自定义组件的注册方式:Vue.component('组件名',{组件内容})。

#### 6.2.1组件命名规范

组件名称就相当于我们定义的自定义标签的标签名。命名规范为全小写多单词组合的名称用-分开

例如: toast,my-button。

**组件名称不可以是html元素中已存在的标签名，如：button,input等。**

#### 6.2.2组件内容定义

组件内容是一个json对象，与Vue实例中的对象类似可以使用data,computed,methods,watch以及生命周期。还有组件特有的属性，自定义组件不能直接操作网页html中的元素，所以自定义组件中提供了template属性来描述组件的html内容

```vue
<!-- 定义方式 -->
<div id="app">
  <!-- 当前组件最终会输出为<div>我是组件</div>-->
  <my-component></my-component>
</div>
<script>
  //定义一个名称为my-component的组件
	Vue.component('my-component',{
  	data(){
      return {
        title:'我是组件'
      }
    },
    template:'<div>{{title}}</div>',//template中只能有且只有一个根标签，其他内容都写在这个标签内部
    methods:{/**/},
    computed:{/**/},
    watch:{/**/}
  })
  new Vue({}).$mount('#app')
</script>

```

> 学习了以上组件的基本概念和定义方式，我们开始结合课堂案例进行代码的编写和体验

> 小贴士：template属性中需要编写html代码，需要注意的是template中的html代码必须有一个根标签包裹不可以在一个template中出现两个平级的根标签
>
> ```json
> //正确的
> {
> template:`
> 	<div>
> 		...内容
> </div>`
> }
> //错误的(template中最外层必须有且只有一个标签)
> {
> template:`
>  <div>...内容</div>
>  <div>...内容</div>`
> }
> ```
>
> 

打开案例中的[component](http://localhost:8080/#/component)运行并查看代码

> 总结：
>
> 在组件定义中，根结点如果一定要使用两个或多个
>
> 也是可以定义的，但是必须通过v-if或v-else-if来处理
>
> 通过条件来让组件只有一个能符合条件并被展示到网页中

#### 6.2.3组件的props选项（向组件内部传参）

我们已经学会了如何定义一个自定义组件，如果想更好更灵活的运用这个组件我们需要对组件传递参数来让组件增强他的通用性，如何向组件传入参数呢，可以参考一下的代码

```vue
<!-- 对组件传入参数的案例 -->
<div id="app">
  <!-- 组件定义了title参数之后就可以通过title对组件内部传参数，如果类型是字符串可以直接像html一样传值 -->
  <my-component title="你好"></my-component>
  <!-- 组件的参数同样可以通过v-bind绑定组件外部的data数据 -->
  <my-component :title="title"></my-component>
</div>
<script>
  Vue.component('my-component',{
   	//组件传参选项props,他可以是数组，或者对象
    //这里我们学习他的完整用法，对象用法
    props:{
      //props中定义参数名称key:{required:boolean,type:Type,default:function}
      title:{
        required:false,//该参数是否是必填参数
        type:String,//定义参数的类型如果允许多个类型可以使用[Stirng,Array]的写法，类型使用大写的对象名称
        default:function(){//组件的默认值，当required为true时不需要设置默认值
          return '我是默认值'
        }
      }
    },
    //props中定义的属性在组件中是与data同级别的，除了不可以更改之外其他用法与data中的属性相同
    template:'<div>{{title}}</div>'
  })
	new Vue({
    data(){
      return {
        title:'我是绑定的参数'
      }
    }
  })
</script>
```

> 下面我们进入课堂案例中查看更多的组件参数使用方法

打开案例中的[component](http://localhost:8080/#/component)运行并查看代码

#### 6.2.4组件的自定义事件（从组件向外传参数一）

在上一个案例中我们在容易出错的地方了解到自定义的组件是无法直接绑定click等常规事件的，主要的原因是因为自定义组件不是html原始标签，html的原始标签在dom对象中是存在一系列基本事件的，那么如果想给自定义组件绑定事件就需要在自定义组件中先定义事件。

具体操作先看下面的示例

```vue
<!-- 给自定义组件定义一个点击事件 -->
<div id="app">
  <my-component @click="handleClick"></my-component>
</div>
<script>
  Vue.component('my-component',{
    //由于my-component组件最终渲染的是其内部定义的button标签，所以我们鼠标的点击其实发生在button标签上，想要让点击事件生效，首先要在button上定义点击事件。
    template:'<button @click="handleClick">点我</button>',
    methods:{
      handleClick(){
        //想要让my-component上定义的click事件执行需要通过$emit方法来通知到外部
        //this.$emit('事件名',参数)
        this.$emit('click',arguments)
      }
    }
  })
	new Vue({
    methods:{
      //在组件内部的click事件中$emit()执行了之后当前绑定在my-component上的click事件便会执行
      handleClick(){
        console.log('点击事件')
      }
    }
  }).$mount('#app')
</script>
```

> 下面结合实际的案例来练习一下吧

打开案例中的[component](http://localhost:8080/#/component)来深入的学习自定义事件的使用方式

## 7.Vue的其他常用功能

### 7.1slot插槽的基础使用

学习了自定义组件的基本功能之后，我们考虑另外一种情况，之前我们学习的自定义组件都是通过参数像组件内部传递参数，但是html标签还有一种特性就是可以通过父子标签嵌套的形式展示，那么我们先做一个试验看一下自定义标签是否可以实现嵌套其他标签。

> 案例试验

打开课堂案例的[component](http://localhost:8080/#/component)运行并查看代码

结合课堂案例的结果我们发现了，在自定义组件中间编写的html代码是无法被渲染到网页中的。

__这个现象我们可以结合传递props参数来分析，在组件内部未定义props的时候我们只能传入简单的参数如id和class这些是Vue为我们提供的初始功能，那么横向类比，既然参数需要定义才能传入的话标签中间的子元素如果想传入自定义组件仍然需要我们在组件内部定义某些属性或事件来实现接参并渲染。__

所以这里需要用到的就是slot插槽组件

#### 7.1.1slot基本使用方式

> slot是Vue全局提供的一个专门为组件处理嵌套写法的一个通道组件

```vue
<!-- slot的写法示例 -->
<div id="app">
  <my-component>
    <div>
      我是传入的内容
    </div>
  </my-component>
</div>
<script>
  Vue.component('my-component',{
    //写在my-component标签中间的所有html元素以及自定义组件都会渲染到slot上
    template:'<div><slot></slot></div>'
  })
	new Vue({}).$mount('#app')
</script>
```

接下来我们结合课堂案例来查看slot的基本使用方式

打开[component](http://localhost:8080/#/component)运行代码

> 从案例我们可以得知slot插槽的本质就是自定义标签内部传入内容的一个替换体，通过slot我们来指定自定义组件内部的子元素所有内容替换到组件内部的什么位置

#### 7.1.2具名插槽

上述案例我们学习到了什么是slot插槽，接下来我们来学习一下插槽的高级用法。

我们在使用嵌套形式的标签时可以通过slot来将子孙元素注入到标签内部，其实slot标签还有一个name属性用来指定组件内部的插槽分配到哪里去使用（默认不使用name属性的slot的name为default），也就是说我们可以通过slot的name属性来指定自定义组件子孙元素的分配规则。下面我们来看一下具名插槽的写法

```vue
<!-- 参考写法 -->
<div id="app">
  <my-component>
    <!-- v-slot:名称 代表当前的元素内容会指定显示到自定义组件中定义的name=title的插槽中 -->
    <template v-slot:title>
      我是标题
    </template>
    <!-- v-slot:名称 代表当前的元素内容会指定显示到自定义组件中定义的name=content的插槽中 -->
    <template v-slot:content>
			我是正文
    </template>
  </my-component>
</div>
<script>
  Vue.component('my-component',{
    template:`
			<div>
				<div class="title"><slot name="title"></slot></div>
    		<div class="content"><slot name="content"></slot></div>
			</div>`,
  })
	new Vue({}).$mount('#app')
</script>
```

> 小贴士：上述内容中使用的template标签是一个无实际意义的标签他负责包裹html模版内容，主要使用于分配插槽的场景

下面我们结合一个案例来具体体验一下具名插槽的用法

打开案例中的[component](http://localhost:8080/#/component)运行并查看代码

通过以上案例我们已经完成了slot的基础的更高级的使用方式slot标签在自定义组件中用处很多一定要掌握

#### 7.1.3作用域插槽

作用域插槽是slot更高级的用法，他可以实现将组件内部的值传递到组件外部。

我们来通过例子体验一下,打开[component](http://localhost:8080/#/component)

> 看一下总结：结合例子我们可以看到作用域插槽是用来开发高级组件使用的一种语法糖，他可以让开发者更集中的开发组件的核心能力，在ui渲染层面只需要提供一套基础方案，组件的使用者可以通过template拿到组件关键点中返回的组件数据并自定义ui界面，这个就是作用域插槽的核心用途。

### 7.2ref指令的使用

ref同样是Vue中相对比较常用的指令之一，ref指令的核心用途是用来在Vue中获得html脚本中的标签对象。

被ref修饰的标签可以通过this.$refs.ref的值的方式来得到当前标签的对象，如果ref修饰的是html标签那么得到的就是html的dom对象（相当于用document抓取到的对象）。如果ref修饰的是Vue中的自定义组件，那么通过this.$refs获取到的对象就是当前自定义组件的实例。

ref的核心用途有两点：

1. 补偿Vue中未知的不足，因为Vue是以数据为核心的来驱动页面渲染的框架，所以我们操作界面极多的情况是通过data中的数据或computed以及其他模版语法等来操作。但是这种方式可能对一些极端的情况不能很好的支持，比如如果我们想知道某个元素当前的宽高位置等信息，这种情况还需要抓去dom元素，这样不仅增大了开销而且语法上与Vue写法差异过大，所以Vue直接提供了通过ref可以直接得到想要节点的能力。
2. 扩展自定义组件的能力，我们通过ref修饰的自定义组件返回的对  象是自定义组件的本身实例也就是这样使用的话我们同样可以在组件外部通过ref对象来调用自定义组件的事件。这种在某些高级开源组件中经常会使用。

> 使用示例

```vue
<!-- 参考写法 -->
<div id="app">
  <div ref="d">
    内容
  </div>
</div>
<script>
	new Vue({
    mounted(){
      //会输出div这个dom对象
      console.log(this.$refs.d)
    }
  }).$mount('#app')
</script>
```

打开案例中的[component](http://localhost:8080/#/component)运行并查看代码

__通过观察以上示例我们强调一点，ref必须在mounted(页面渲染完成)之后来使用否则无法获取当前元素的对象，这点与js的dom操作类似__



## Vue Router

Vue Router 是 [Vue.js (opens new window)](http://cn.vuejs.org/)官方的路由管理器。

### 参考资料

- https://router.vuejs.org/zh/
- https://www.jianshu.com/p/4b833b23dc4a

## Vuex

### 介绍

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 参考资料

- https://vuex.vuejs.org/zh/


## 从零构建todolist应用

#### 主要目的

- 🔲vue-cli 脚手架基本认识

- 🔲vue 基本知识的练习

- 🔲vue-router熟悉及应用

- 🔲vuex熟悉及应用

#### 应用功能

1. 本地缓存，并动态存储到LocalStorage中

1. 新增代办事项

1. 点击完成代办事项，一键全部完成/未完成

1. 删除代办事项

1. 清空已完成的代办事项

1. 根据完成状态筛选代办事项列表

#### 参考资料

-  https://todomvc.com/examples/vue/ 

-  https://github.com/drehimself/todo-vue/blob/01-basics/src/components/TodoList.vue 

-  https://www.youtube.com/playlist?list=PLEhEHUEU3x5q-xB1On4CsLPts0-rZ9oos 