## 一、 为何使用Vuex

关于Vuex的详细介绍官网是这么介绍的：

> Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

现如今的web应用大多就是操作数据，对数据进行保存、操作和**管理**就是web应用的核心思想。

为什么需要vuex?

使用Vue开发的过程中，我们经常会遇到一个状态可能会在多个组件之间使用，比如我们在做项目时使用到的用户的信息，什么昵称、头像这些，这些信息会在不同的组件用到，一旦改变这些状态，我们希望其他组件也跟随变化，比如用户充值了100元，或者改变了昵称，所以这个时候就需要状态管理模式来集中管理。

这样的数据有了个100、1000个会怎么办！这里面的数据如果还有的相互依赖我们有会怎么办？那就需要花费大量的时间和精力进行分析封装和管理。



而Vuex就是把数据和数据处理逻辑全部集中到一个单独的模块管理对象上，让这个对象进行管理。



> 由于Vue是单向数据流，因为用户一些行为（Actions）导致了数据发生了变化（State），数据驱动页面视图（View）改变，视图更新后又有会有一些行为（Actions）用户可以触发，以此循环。
>
>  
>
> - **state**，驱动应用的数据源；
> - **view**，以声明方式将 **state** 映射到视图；
>
> - **actions**，响应在 **view** 上的用户输入导致的状态变化。
>
>  
>
> ![img](https://camo.githubusercontent.com/e6c522fcdf513e494528be82c9bbf84649f8ec771563f171dc5b32945813155d/687474703a2f2f616c6979756e2e696d6167652e657965736b792e736974652f696d616765732f323032302f30352f32392f696d6167652e706e67)
>
>  
>
> 在这种单向数据流的模式下，如果多个组件视图中都依赖同一个状态（state），这个状态（state）改变需要更改多个视图或怎么样？同样的，多个视图的一些行为会更改同一个状态又会怎么样？
>
>  
>
> 在这种多组件共享状态的情况下，其实Vue中仍然有一些方法可以解决。
>
>  
>
> 如果一个状态（state）改变需要更改多个视图，可以利用组件传值的方法：就是如果我这里数据发生了改变，我把它传给同时需要这个数据状态的组件，告诉他需要的这个state发生了改变，让其更改视图。
>
>  
>
> 组件间的传值主要有
>
>  
>
> - 兄弟组件 ---兄弟组件（bus.js）
> - 父组件---子组件（props down）
>
> - 子组件---父组件（emit on）
>
>  
>
> 如果多个视图Actions更改同一个状态，可以利用本地化存储localStorage以及监听或变更和同步多个拷贝状态。
>
>  
>
> 以上都比较麻烦且不容易维护，所以Vue把这种共享状态分离出来，用一个全局对象状态树管理，这就是状态管理模式Vuex。

## 二、学习之前的准备

本次我的学习都是在官方提供的脚手架搭建的项目下学习的，关于脚手架的使用本次就不再赘述，可以移步到[Vue CLI](https://link.juejin.cn/?target=https%3A%2F%2Fcli.vuejs.org%2Fzh%2F)，在使用Vue CLI生成的项目时会让你选择store，选择了后会在页面给你生成一个store.js，这就是最初的store，里面结构如下：

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
```

## 三、State

Vuex的核心就是仓库store，这个store实例会被注入到所有子组件里面，里面的state属性保存着我们的状态，比如我们定义一个状态count：

```js
export default new Vuex.Store({
  state: {
    count: 10
  },
})
```

这样我们就有一个集中管理的状态count，那其他组件如何取到这个count呢，可以计算属性来获得：

```js
export default {
  data() {
    
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
```

因为根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。通过计算属性，我们就可以在模板里面使用模板语法来调用count了，如下：

```vue
<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>
```

### **mapState**

有时候需要获取多个状态，但是使用计算属性会调用多次，显得麻烦，这里借助mapState方法来获取state。 使用mapState需要引入该方法

```js
import { mapState } from 'vuex';
```

> 注意：这里使用了mapState方法后，computed的写法有点区别，比如默认情况你的computed属性是这样写的：

```js
data(){
  return{
    msg: 'hello '
  }
}
computed: {
  msg() {
    return this.msg + 'world!';
  }
}
```

那么你使用了mapState后需要这样写computed，把msg()放入mapState，不然会报错。

```js
data(){
  return{
    msg: 'hello ',
    localCount: 20
  }
}
computed: mapState({
  msg() {  // 最初的
    return this.msg + 'world!';
  },
  // 使用mapState从store中引入state
  count(state) {
    return state.count;
  },
  name(state) {
    return state.firstName + ' ' + state.lastName;
  },
  mixCount(state) { // 结合store和组件状态进行计算
    return state.count + this.localCount;
  },
})
```

> 如果你使用了展开运算符...，那么computed属性不需要改造，按正常写法写

```js
computed: { // 使用展开的话可以按这种方式写，否则要使用另外一种方式，不然要报错
  msg() {
    return this.$store.state.msg;
  },
  // 这里返回一个状态count，
  // 返回多个你可以这样写...mapState(['count', 'firstName', 'lastName'])
  ...mapState(['count'])
},
```

## 四、Getter

getter就是对状态进行处理的提取出来的公共部分，当状态要进行筛选这些操作时，我们可以通过getter处理过后再返回给组件使用，比如我们在state部分定义了一个list数组：

```js
export default new Vuex.Store({
  state: {
    list: [1, 2, 3, 4, 5, 6, 7, 8]
  },
});
```

我们想要筛选出数组里面的偶数然后再在组件里面使用，那么筛选的这个工作可以放在getter里面来完成。

```js
export default new Vuex.Store({
  state: {
    list: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  getters: { //  这个主要是对状态的处理，相当于把状态处理的方法抽成公共部分来管理了
    modifyArr(state) { // 一般化getter
      return state.list.filter((item, index, arr) => {
        return item % 2 == 0;
      })
    },
    getLength(state, getter) { // 方法里面传getter，调用modifyArr来计算长度
      return getter.modifyArr.length;
    }
});
```

之后再在其他组件的computed里面去调用getter来获取想要的状态

```js
computed: {
    list() {
      return this.$store.getters.modifyArr;
    },
}
```

### **mapGetters**

mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性，当我们想在组件里面引入多个getter时，可以使用mapGetter：

```js
import {mapGetters} from 'vuex';
```

比如像刚才在在上面定义的modifyArr，getLength。我们想引入这个两个并获取其值：

```js
computed: {
  ...mapGetters(['modifyArr', 'getLength'])
}
```

你当然可以为其指定别名，不一定非得用store里面getters定义的名字：

```js
computed: {
  ...mapGetters({
    arr: 'modifyArr',   // 把 `this.arr` 映射为 `this.$store.getters.modifyArr`,下面同理
    length: 'getLength'
  })
}
```

如果你的computed属性包含其他计算方法，那你就只能使用展开运算符的写法，这里跟mapState有点区别，其他计算属性如果写在mapGetter里面会报错，说不存在的getter，所以用以下的写法：

```js
computed: {
  number() {
    return this.num * 10;
  },
  ...mapGetters([
    'modifyArr',
    'getLength'
  ])
}
```

或者指定别名

```js
computed: { 
  msg() {
    return this.num * 10;
  },
  ...mapGetters({
    getList: 'modifyArr',
    length: 'getLength'
  })
}
```

然后再模板里面调用：

```js
<template>
  <div>
    <h2>mapGetters的使用演示</h2>
    <p>你的数字：{{ msg }}</p>
    <p>你的数组长度为：{{ length }}</p>
    <ul>
      <li v-for="(item, index) in getList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
```

## 五、Mutation

当我们需要修改store里面的状态时，我们不是在组件里面直接去修改它们，而是通过mutation里面的方法来进行修改，这样有利于追踪状态的改变。 比如state里面有一个count变量，我们点击加减按钮来控制它的值：

```js
mutations: {
  add(state) {
    state.count++;
  },
  reduce(state) {
    state.count--;
  }
},
```

在其他组件里面，我们通过定义methods并绑定时间来触发改变，这里需要使用commit：

```js
methods: {
  add() {
    this.$store.commit('add');
  },
  reduce() {
    this.$store.commit('reduce');
  }
}
```

### **提交载荷**(传参)

这个就是在commit时提交额外的参数，比如我传了额外的值加到count上面：

```js
mutations: {
  loadAdd(state, payload) {  // 提交载荷，额外参数
    state.count += payload;
  }
},
```

然后再组件里面使用：

```js
methods: {
  loadAdd() {
    this.$store.commit('loadAdd', 100); // 传递额外参数
  }
}
```

再这里官方文档建议载荷（也就是那个额外参数）最好使用对象来传，这样可以包含多个字段并且记录的 mutation 会更易读，像这样：

```js
this.$store.commit('loadAdd', {
  extraCount: 100
}); // 传递额外参数
```

调用commit时我们也可以把所有参数写在一个对象里面：

```js
this.$store.commit( {
  type: 'addLoad',
  extraCount: 100
}); // 传递额外参数
```

### Mutation需遵守 Vue 的响应规则

这个主要是说你再开发过程中需要向state里面添加额外数据时，需要遵循响应准则。 这里我直接照搬官方文档的说明： Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

- 最好提前在你的 store 中初始化好所有所需属性。
- 当需要在对象上添加新属性时，你应该使用 Vue.set(obj, 'newProp', 123), 或者以新对象替换老对象。例如，利用对象展开运算符

我们可以这样写：

```js
state.obj = { ...state.obj, newProp: 123 }
```

还是举个栗子： 我在mutation里面声明了一个方法

```js
addNewState(state, payload) { // 我打算再这儿添加新的属性到state
  Vue.set(state, 'newProp', '添加一个新值！'); // 这是一种写法
  // 这种写法用新对象替换老对象
}
```

然后再组件里面去调用，定义一个method：

```js
addNewProp() {
  this.$store.commit('addNewState', {});
}
```

这样再执行了这个方法后，会及时更新到state，再组件的computed属性里面定义：

```js
newMsg() {
  return this.$store.state.newProp || '还没添加新值';
}
```

在模板里面即时展示，并且不会影响其他状态：

```js
<p>添加的新值：{{ newMsg }}</p>
<div><button @click="addNewProp">添加新值</button></div>
```

### Mutation 必须是同步函数

> 为什么？

下面这种写法必须避免（直接官方例子加持）：

```js
mutations: {
  someMutation (state) {
    api.callAsyncMethod(() => {
      state.count++
    })
  }
}
```

### mapMutations

这个跟前面的那几个函数一个道理，都是为了简化调用，使用方法如下：

```js
import {mapMutations} from 'vuex';
```

然后在组件的methods里面使用，这里使用官方代码：

```js
export default {
  // ...
  methods: {
    ...mapMutations([
      'add', // 将 `this.add()` 映射为 `this.$store.commit('add')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

## 六、Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。 前面说过mutation只能包含同步事务，所以在处理异步事务就需要Action，通过Action控制了异步这一过程，之后再去调用mutation里面的方法来改变状态。 这里我直接贴代码来一目了然，首先我定义了一个状态product：

```js
state: {
  product: 'car'
}
```

然后再mutation中定义一个方法：

```js
changeProduct(state, payload) {
  state.product = payload.change;
}
```

在action中定义：

```js
actions: {
  changeProduct(context, payload) { // 这个context是一个与 store 实例具有相同方法和属性的对象
    // 调用mutation里的changeProduct方法
    // context.commit('changeProduct', {change: 'ship'});
    // 改成异步方式
    // setTimeout(() => {
    //   context.commit('changeProduct', {change: 'ship'});
    // }, 1500)
    // 使用载荷
    let temp = 'ship+' + payload.extraInfo; 
    setTimeout(() => {
      context.commit('changeProduct', {change: temp});
    }, 1500)
  }
}
```

在组件methods中定义事件触发分发：

```js
methods: {
  selectProduct() {
    // this.$store.dispatch('changeProduct')
    // 载荷方式分发
    // this.$store.dispatch('changeProduct', {
    //   extraInfo: 'sportcar'
    // })
    // 或者这种
    this.$store.dispatch({
      type: 'changeProduct',
      extraInfo: '->sportcar'
    })
  }
},
```

这样一个简易的action就完成了！

### mapActions

这里就不再赘述了，看名字就知道跟前面几个叫map开头的辅助函数类似，用来映射action里面的方法，这里也直接贴官方代码了：

```js
import {mapActions} from 'vuex';

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

有时候我们想知道action里面异步执行后的状态然后再去修改其他信息，这个可以借助Promise来实现。这里在state里面声明一个状态：

```js
state: {
  userInfo: { // 这个变量用来测试组合变量
    name: 'lee',
    age: 23
  }
}
```

接着声明mutation:

```js
mutations: {
    // 以下用来测试组合action
    changeInfo(state, payload) {
      state.userInfo.name = 'lee haha';
    }
}
```

声明action：

```js
actions: {
  changeInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('changeInfo');
        resolve();
      }, 2000)
    })
  }
}
```

这时我们在组件里面定义方法去派发这个action：

```js
data() {
  return {
    status: '信息还没修改！'
  }
}
methods: {
  modifyInfo() {
    this.$store.dispatch('changeInfo').then(() => {
      this.status = '信息修改成功';
    });
  }
}
```

模板展示：

```vue
<template>
  <div>
    <h2>组合action</h2>
    <p>{{ status }}</p>
    <p>{{ userInfo.name }}</p>
    <div><button @click="modifyInfo">修改信息</button></div>
  </div>
</template>
```

当我们点击修改信息后，就会派发action，当修改成功的时候会同步修改上面说的展示信息。 当然其他定义的action方法也可以互相使用，这里直接贴官方代码了：

```js
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  },
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
```

## 七、Module

模块这部分正如其名，当所有状态集中在一个对象中时，会变的相当臃肿，这个时候就需要模块的管理办法。这里我还是用代码来说明，比如我在store里面定义了两个模块：

```js
// 定义的模块A
const moduleA = {
  state: {
    name: 'lee',
    age: 23,
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
};

// 定义模块B
const moduleB = {
  state: {
    name: 'wang',
    age: 22
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
}
```

然后再Vuex里面声明模块：

```js
export default new Vuex.Store({
  modules: {
    ma: moduleA,
    mb: moduleB
  },
  state: {
    ........... // 其他状态
  }
});
```

这样一来，如果我们想要在组件里面访问其他模块的状态，可以这样，比如这里我想调用B模块里的状态：

```js
computed: {
  msg() {
    return this.$store.mb; // 这里返回的是：{name: 'wang', age: 22}
  }
}
```

关于模块内部的局部状态，这里跟普通的store用法没有多大的区别，主要区别以下外部传进来的状态，比如对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState，这里截取官方代码：

```js
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```

对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：

```js
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```

那么对于getters、mutations、actions里面的方法我们像基本的store那样调用就可以了，不存在作用域限制，还是贴代码栗子吧，下面是我在store.js里面定义的模块B：

```js
const moduleB = {
  state: {
    name: 'wang',
    age: 22,
    desc: 'nope'
  },
  mutations: {
    modifyDesc(state, payload) {
      state.desc = payload.newMsg;
    }
  },
  getters: {

  },
  actions: {

  }
}
```

在组件里面，我定义了以下内容：

```vue
<template>
  <div>
    <h2>7、module使用示例</h2>
    <div>
      <p>名字：{{ name }}</p>
      <p>描述：{{ desc }}</p>
      <button @click="handleClick">修改描述</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.state.mb.name,
      // desc: this.$store.state.mb.desc 注意这个如果涉及到要在store里面会被改变的状态，一定要写在
      // computed属性里面，不然不能及时反馈到视图上
    }
  },
  computed: {
    desc() {
      return this.$store.state.mb.desc;
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('modifyDesc', {newMsg: 'lao wang is beautiful!'});
    }
  },
}
</script>
```

这样，就可以调用mutation里面的方法了，getters和actions同理
