<template>
  <div class="navigationWrapper">
    <div id="mytitle"
         style="display:inline-block">
    </div>
    <div class="action"
         v-if="os">
      <div class="icon-mini"
           @click="miniWindow">
        <span class="mini"></span>
      </div>
      <div class="icon-close"
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
      os: false
    }
  },
  methods: {
    closeWindow () {
      ipcRenderer.send('closewindow', { information: 'close' })
    },
    miniWindow () {
      ipcRenderer.send('minwindow', { information: 'mini' })
    }
  },
  created () {
    if (require('os').platform() !== 'darwin') {
      this.os = true
    }
  }
}
</script>
    
<style>
.navigationWrapper {
  position: relative;
  width: 100%;
  height: 50px;
  /* background-image: linear-gradient(135deg, #5efce8 10%, #736efe 100%); */
  background-color: #7a5e87;
  -webkit-app-region: drag;
  border-radius: 0 25px 0 0;
  /* box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5); */
}
.action {
  display: flex;
  position: absolute;
  height: 50px;
  right: 0;
  top: 0;
}
.icon-close,
.icon-mini {
  -webkit-app-region: no-drag;
  display: inline-block;
  cursor: pointer;
  width: 30px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.icon-close:hover {
  background-color: rgba(192, 193, 76, 0.44);
}
.icon-mini:hover {
  background-color: rgba(192, 193, 76, 0.44);
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