import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


// 导入对应的组件
import register from '../components/register/register'
import login from '../components/login/loginName'
import index from '../components/index/index'

// 映射组件
const routes = [
  // 重定向到/login
  {path: '/', redirect: 'login'},
  {
    path: "/register",
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {path: '/index', component: index}
]

// 创建路由对象router
const router = createRouter({
  // es6的增强写法
  // routes: routes
  routes,
  history: createWebHistory()
})

export default router
