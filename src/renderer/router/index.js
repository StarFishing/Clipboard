import Vue from 'vue'
import Router from 'vue-router'
// import Clipboard from '@/components/Clipboard/index'
Vue.use(Router)
const Clipboard = () => import('@/components/Clipboard/index')
const Home = () => import('@/components/Home')
const TaskList = () => import('@/components/TaskList/index.vue')
// const Property = () => import('@/components/property/index.vue')
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true,
    children: [
      {
        path: '/Clipboard',
        name: 'Clipboard',
        component: Clipboard,
        meta: { title: '粘贴板', icon: 'clipboard', name: 'Clipboard' }
      },
      {
        path: '/TaskList',
        name: 'TaskList',
        component: TaskList,
        meta: { title: '任务列表', icon: 'task2', name: 'TaskList' }
      }
      // {
      //   path: '/Property',
      //   name: 'Property',
      //   component: Property,
      //   meta: { title: '储备仓', icon: 'property', name: 'Property' }
      // }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
export default new Router({
  routes
})
