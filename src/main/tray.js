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
// ;(function () {
//   const path = require('path')
//   const { BrowserWindow, Tray, Menu, app } = require('electron')
//   // BrowserWindow
//   // 创建系统托盘
//   let tray = new Tray(path.resolve(__static, 'favicon-l.png'))

//   const menu = Menu.buildFromTemplate([
//     {
//       label: '退出',
//       click: function () {
//         // BrowserWindow.getFocusedWindow().webContents().send('close-main-window');
//         app.quit()
//       }
//     }
//   ])
//   return (function () {
//     var win = BrowserWindow.getAllWindows()
//     tray.setToolTip('star pages')
//     tray.setContextMenu(menu)
//     tray.on('click', () => {
//       win[0].show()
//     })
//   })()
// })()
const path = require('path')
const { BrowserWindow, Tray, Menu, app } = require('electron')
// BrowserWindow
// 创建系统托盘
let tray = new Tray(path.resolve(__static, 'favicon-l.png'))

const menu = Menu.buildFromTemplate([
  {
    label: '退出❤',
    click: function () {
      // BrowserWindow.getFocusedWindow().webContents().send('close-main-window');
      app.quit()
    }
  }
])
var win = BrowserWindow.getAllWindows()
tray.setToolTip('star pages')
tray.setContextMenu(menu)
tray.on('click', () => {
  win[0].show()
})
