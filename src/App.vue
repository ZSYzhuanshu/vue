<template>
  <div id="app">
    <div id="nav">
      练习：
      <router-link to="/">echartsDemo</router-link> |
      <router-link to="/dialog">dialog</router-link>
      <br>
      案例：
      <router-link to="/value-html-text">value-html-text</router-link> |
      <router-link to="/model-once">model-once</router-link> ｜
      <router-link to="/bind-on">bind-on</router-link> ｜

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
