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
  }

}
</script>

<style>
/* CSS */
</style>
