const { clipboard } = require('electron')
export function clip () {
  let content = clipboard.readText()
  return { content: content }
}
