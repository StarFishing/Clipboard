'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
// let tray
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    minHeight: 563,
    useContentSize: true,
    width: 1000,
    minWidth: 1000,
    frame: false,
    transparent: true,
    resizable: true,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  })
  require('./tray.js')
  require('./Files/Clip.js')
  require('./Files/ClipFile.js')
  // tray()
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
// 主进程处理渲染进程广播数据
ipcMain.on('closewindow', (event, data) => {
  mainWindow = null
  app.quit()
})
// ipcMain.on('show', () => {
//   console.log('sss')
//   mainWindow.show()
// })
ipcMain.on('minwindow', (event, data) => {
  mainWindow.minimize()
  // app.minimize()
})
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
