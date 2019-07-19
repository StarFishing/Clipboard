import { routes } from '@/router/index'
// function filterRoute (route) {
//   let temp = []
//   route.forEach(route => {
//     if (route.children) {
//       temp = filterRoute(route.children)
//     }
//     if (route.meta) {
//       temp.push(route.meta)
//     }
//   })
//   return temp
// }
function getmeta (routes) {
  let res = []
  // 遍历路由表
  routes.forEach(route => {
    // 当有子路由时进行缓存子路由的meta信息
    let temp = []
    if (route.children) {
      // 有子路由时递归调用
      temp = getmeta(route.children)
    }
    // 接收每个路由包含子路由的meta信息,方便添加子路由信息
    let s = {}
    if (route.meta) {
      // 接收当前路由的meta信息
      s = route.meta
    }
    if (temp.length) {
      // 如果有子路由信息则添加childre字段
      s.children = temp
    }
    // 当当前路由存在meta信息时进行push
    if (Object.keys(s).length !== 0) {
      res.push(s)
    }
  })
  return res
}
const sidebar = getmeta(routes)
export default sidebar
