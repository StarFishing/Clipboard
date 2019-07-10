/*eslint-disable */
const { BrowserWindow, clipboard } = require('electron')
var win = BrowserWindow.getAllWindows()[0]
let timer
let count = 0
let clipcach = '' // 暂存上次更改
let interval = 1000 // 设置间隔
let dely = 60 // 设置误操作的时间
// 窗口获得焦点时清除定时器
win.on('focus', () => {
  win.webContents.send('windowFocus')
  clearInterval(timer)
  interval = 1000
  sendMessage()
})
// 窗口失去焦点进行剪贴板监听
win.on('blur', () => {
  timer = setInterval(function() {
    // if (count === dely) {
    //   // 长时间无操作时进行延时
    //   dely = dely * 3
    //   interval = interval * dely
    // }
    // 判断剪贴板是否为空，并且与上次不同
    sendNotify()
    sendMessage()
  }, interval)
})
function sendMessage() {
  // 判断剪贴板是否为空，并且与上次不同
  if (clipboard.readText() !== '' && clipcach !== clipboard.readText()) {
    clipcach = clipboard.readText()
    let content = clipboard.readText()
    win.webContents.send('addClip', { content: content })
  } else {
    count++
  }
}
function sendNotify() {
  if (count !== 0 && count % 1800 === 0) {
    win.webContents.send('longtime')
  }
}
