<template>
  <div id="app"
       style="border-radius: 0 25px 0 0;">
    <Navigation> </Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
/*eslint-disable */
import Navigation from './components/Navigation/index'
import { ipcRenderer } from 'electron'
export default {
  name: 'electron-vue',
  components: {
    Navigation
  },
  created () {
    let options = {
      title: 'Pages',
      body: '网络异常，请检查你的网络'
    }
    window.addEventListener('offline', function () {
      let myNotification = new window.Notification(options.title, options)
    })
    ipcRenderer.on('longtime', () => {
      let options = {
        title: 'Pages',
        body: '长时间未操作'
      }
      let myNotification = new window.Notification(options.title, options)
    })
  }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
body {
  height: 100%;
  font-family: "Source Sans Pro", sans-serif;
}
pre,
code {
  display: block;
  overflow: auto;
  background: #f4f4f4;
  padding: 5px 10px;
  border: 1px solid #eee;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
