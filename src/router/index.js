import Vue from 'vue'
import VueRouter from 'vue-router'
import echartsDemo from '../views/echartsDemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'echartsDemo',
    component: echartsDemo
  },
  {
    path: '/value-html-text',
    name: 'value-html-text',
    component: () => import(/* webpackChunkName: "value-html-text" */ '../views/value-html-text.vue')
  },
  {
    path: '/model-once',
    name: 'model-once',
    component: () => import(/* webpackChunkName: "model-once" */ '../views/model-once.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '../views/dialog.vue')
  },
  {
    path: '/bind-on',
    name: 'bind-on',
    component: () => import(/* webpackChunkName: "bind-on" */ '../views/bind-on.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
