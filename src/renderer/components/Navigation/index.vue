<template>
  <div class="navigationWrapper">
    <div id="mytitle"
         style="display:inline-block">
    </div>
    <div class="action">
      <div class="changebackgroud"
           @click="changebackgroud">
        <svg-icon icon-class="更新"
                  style="width:22px;height:22px"></svg-icon>
      </div>
      <div class="icon-mini"
           v-if="os"
           @click="miniWindow">
        <span class="mini"></span>
      </div>
      <div class="icon-close"
           v-if="os"
           @click="closeWindow">
        <span class="close"></span>
      </div>

    </div>

  </div>

</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: 'Mytitle',
  data () {
    return {
      os: false,
      toggle: false
    }
  },
  methods: {
    closeWindow () {
      ipcRenderer.send('closewindow', { information: 'close' })
    },
    miniWindow () {
      ipcRenderer.send('minwindow', { information: 'mini' })
    },
    changebackgroud () {
      this.toggle = !this.toggle
      const csstext = '#app{height:100%;background-image: url("https://img.pc841.com/2018/0730/20180730081702510.jpg");background-repeat: no-repeat;background-size: cover;}.homepage {background: none} .sidebarWrapper {background: none;}.navigationWrapper {background: none;}   .shadow {background-color: rgba(255, 255, 255, 0.32);}'
      if (this.toggle) {
        if (document.head.lastChild.innerText !== '') {
          const style = document.createElement('style')
          style.innerText = csstext
          document.head.appendChild(style)
        } else {
          document.head.lastChild.innerText = csstext
        }
      } else {
        document.head.lastChild.innerText = ''
      }
    }
  },
  created () {
    if (require('os').platform() !== 'darwin') {
      this.os = true
    }
  }
}
</script>
    
<style scoped>
.action {
  display: flex;
  position: absolute;
  height: 50px;
  align-items: center;
  right: 20px;
  top: 0;
  border-radius: 0 25px 0 0;
}
.icon-close,
.icon-mini,
.changebackgroud {
  -webkit-app-region: no-drag;
  display: inline-block;
  cursor: pointer;
  width: 30px;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  border-radius: 50%;
}
.icon-close:hover {
  background-color: #5e4e6d;
}
.icon-mini:hover {
  background-color: #5e4e6d;
}
.icon-close .close {
  background-size: cover;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("../../assets/关闭.png");
}
.icon-mini .mini {
  background-size: cover;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("../../assets/最小化.png");
}
</style>
<style>
.navigationWrapper {
  position: relative;
  width: 100%;
  height: 50px;
  /* background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%); */
  background: #7a5e87;
  -webkit-app-region: drag;
  border-radius: 0 25px 0 0;
  /* box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5); */
}
</style>
