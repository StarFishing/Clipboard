const colors = {
  options_0: {
    '--homepage-start': '#7a5e87',
    '--homepage-end': '#393b50',
    '--sidebar-start': '#7a5e87',
    '--sidebar-end': '#464c57'
  },
  options_1: {
    '--homepage-start': '#393b50',
    '--homepage-end': '#7a5e87',
    '--sidebar-start': '#393b50',
    '--sidebar-end': '#464c57'
  }
}
function changeTheme (index) {
  let el = document.documentElement
  let option = `options_${index}`
  let color = colors[option]
  for (let item in color) {
    el.style.setProperty(item, color[item])
  }
}
export default changeTheme
