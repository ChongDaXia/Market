import Vue from 'vue'
// 引入路由
import Router from 'vue-router'
// 引入项目的模块组件
import home from '@/components/home'

// 使用路由
Vue.use(Router)

// 实例化路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
