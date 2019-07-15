const { BrowserWindow, clipboard } = require('electron')
var win = BrowserWindow.getAllWindows()[0]
let timer
let focustimer
let count = 0
let clipcach = '' // 暂存上次更改
let focusclip = '' // 在本应用复制的代码不会在失去焦点后在复制回来
let interval = 1000 // 设置间隔
// 窗口获得焦点时清除定时器
win.on('focus', () => {
  clearInterval(timer)
  win.webContents.send('windowFocus', { focusclip })

  count = 0
  listenfocus()
})
// 窗口失去焦点进行剪贴板监听
win.on('blur', () => {
  clearInterval(focustimer)
  timer = setInterval(function () {
    sendNotify()
    sendMessage()
  }, interval)
})
function sendMessage () {
  let text = clipboard.readText().trim()
  console.log(text)
  // 判断剪贴板是否为空，并且与上次不同
  if (text !== '' && clipcach.trim() !== text && focusclip !== text) {
    console.log(clipcach)
    console.log(focusclip)
    clipcach = text
    let content = text
    win.webContents.send('addClip', { content })
  } else {
    count++
  }
}
function sendNotify () {
  if (count !== 0 && count % 1800 === 0) {
    win.webContents.send('longtime')
  }
}
function listenfocus () {
  focustimer = setInterval(function () {
    console.log('testwww')
    focusclip = clipboard.readText().trim()
  }, interval)
}
