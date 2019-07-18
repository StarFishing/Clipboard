import { routes } from '@/router/index'
function filterRoute (route) {
  let temp = []
  route.forEach(route => {
    if (route.children) {
      temp = filterRoute(route.children)
    }
    if (route.meta) {
      temp.push(route.meta)
    }
  })
  return temp
}
const sidebar = filterRoute(routes)
export default sidebar
