import Vue from 'vue'
import Router from 'vue-router'
// import Clipboard from '@/components/Clipboard/index'
Vue.use(Router)
const Clipboard = () => import('@/components/Clipboard/index')
const Home = () => import('@/components/Home')
const TaskList = () => import('@/components/TaskList/index.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Clipboard',
          name: 'Clipboard',
          component: Clipboard
        },
        {
          path: '/TaskList',
          name: 'TaskList',
          component: TaskList
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
