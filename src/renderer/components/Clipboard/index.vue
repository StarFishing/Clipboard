<template>
  <div class="clipWrapper">
    <div class="contentitems"
         v-if="clipList.length">
      <div class="items"
           v-for="(item,index) in clipList"
           :key="index">
        <div class="head">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron'
export default {
  created () {
    // let ipcRenderer = this.$electron.ipcRenderer
    ipcRenderer.on('windowFocus', () => {
      console.log('windowFocus')
    })
    ipcRenderer.on('addClip', (e, info) => {
      console.log(info)
      if (this.clipList.length) {
        if (info.content === this.clipList[this.clipList.length - 1].content) {
          return false
        } else {
          this.clipList.push(Object.assign({ 'title': 'dd' }, info))
        }
      } else {
        this.clipList.push(Object.assign({ 'title': 'dd' }, info))
      }
    })
  },
  data () {
    return {
      clipList: []
    }
  },
  methods: {
    additems () {
      console.log('success')
    }
  }
}
</script>
<style scoped>
.clipWrapper {
  /* margin-left: 200px; */
  height: 100%;
  overflow: hidden;
}
.contentitems {
  /* margin: 0 auto; */
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media screen and (max-width: 700px) {
  .contentitems {
    justify-content: space-around;
  }
}
.items {
  width: 220px;
  height: 220px;
  flex: 0 0 220px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}
.head {
  height: 40px;
  background-color: aquamarine;
  padding: 5px 10px;
  display: flex;
  align-items: center;
}
.content {
  padding: 5px 10px;
  font-size: 12px;
}
</style>
