const colors = {
  options_0: {
    '--homepage-start': 'HSLA(316, 19%, 44%, 1.00)',
    '--homepage-end': 'RGBA(56, 58, 79, 1.00)',
    '--sidebar-start': 'HSLA(316, 19%, 44%, 1.00)',
    '--sidebar-end': 'RGBA(71, 75, 87, 1.00)'
  },
  options_1: {
    '--homepage-start': 'RGBA(124, 95, 137, 1.00)',
    '--homepage-end': 'RGBA(57, 59, 80, 1.00)',
    '--sidebar-start': 'RGBA(124, 95, 137, 1.00)',
    '--sidebar-end': 'RGBA(71, 76, 88, 1.00)'
  },
  options_2: {
    '--homepage-start': 'RGBA(92, 106, 142, 1.00)',
    '--homepage-end': 'RGBA(54, 58, 78, 1.00)',
    '--sidebar-start': 'RGBA(92, 106, 142, 1.00)',
    '--sidebar-end': 'RGBA(71, 76, 88, 1.00)'
  },
  options_3: {
    '--homepage-start': 'RGBA(78, 112, 130, 1.00)',
    '--homepage-end': 'RGBA(54, 58, 78, 1.00)',
    '--sidebar-start': 'RGBA(78, 112, 130, 1.00)',
    '--sidebar-end': 'RGBA(70, 76, 87, 1.00)'
  },
  options_4: {
    '--homepage-start': 'RGBA(79, 115, 120, 1.00)',
    '--homepage-end': 'RGBA(54, 58, 78, 1.00)',
    '--sidebar-start': 'RGBA(79, 115, 120, 1.00)',
    '--sidebar-end': 'RGBA(70, 76, 88, 1.00)'
  },
  options_5: {
    '--homepage-start': 'RGBA(94, 107, 143, 1.00)',
    '--homepage-end': 'RGBA(55, 59, 79, 1.00)',
    '--sidebar-start': 'RGBA(94, 107, 143, 1.00)',
    '--sidebar-end': 'RGBA(71, 76, 88, 1.00)'
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
