// module.exports = (function () {
//   const path = require('path')
//   const { BrowserWindow, Tray } = require('electron')
//   // BrowserWindow
//   // 创建系统托盘
//   let tray = new Tray(path.resolve(__static, 'favicon-a.png'))
//   var win = BrowserWindow.getAllWindows()
//   tray.setToolTip('star pages')
//   tray.on('click', () => {
//     win[0].show()
//   })
// })
;(function () {
  const path = require('path')
  const { BrowserWindow, Tray } = require('electron')
  // BrowserWindow
  // 创建系统托盘
  let tray = new Tray(path.resolve(__static, 'favicon-a.png'))
  var win = BrowserWindow.getAllWindows()
  tray.setToolTip('star pages')
  tray.on('click', () => {
    win[0].show()
  })
})()
