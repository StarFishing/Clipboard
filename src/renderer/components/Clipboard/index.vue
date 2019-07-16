<template>
  <div class="clipWrapper"
       ref="wrapper">
    <div class="contentsWrapper"
         v-if="clipList.length">
      <div class="contentitems">
        <div class="items"
             v-for="(item,index) in clipList"
             :key="index">

          <div class="head">
            <span>Ctr</span>
            <span class="close"
                  @click="deleteitems(index)"></span>
          </div>

          <div class="content"
               v-text="item.content">
            <!-- <prism language="bash"
                 :plugins="['command-line']"
                 :code="item.content"></prism> -->
          </div>
        </div>
      </div>
    </div>
    <div class="loading"
         v-if="!clipList.length"></div>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron'
export default {
  created () {
    // let ipcRenderer = this.$electron.ipcRenderer
    ipcRenderer.on('windowFocus', (e, info) => {
    })
    ipcRenderer.on('addClip', (e, info) => {
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
  mounted () {
  },
  components: {
  },
  data () {
    return {
      clipList: []
    }
  },
  methods: {
    additems () {
      console.log('success')
    },
    deleteitems (index) {
      this.clipList.splice(index, 1)
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
.contentsWrapper {
  position: relative;
  height: 100%;
}
.contentitems {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: -20px;
  padding: 20px 20px 40px 60px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 100%;
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
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}
.head {
  height: 40px;
  background-color: aquamarine;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  position: relative;
}
.close {
  right: 5px;
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: right;
  transform: translateX(0);
  background-image: url("~@/assets/icons/叉号.png");
  transition: all 0.3s;
  color: white;
  overflow: hidden;
}
.close:hover {
  background-color: darkgrey;
  border-radius: 20px;
  width: 40px;
  background-image: none;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
.close:hover:before {
  content: "清除";
}
.content {
  padding: 5px 10px;
  font-size: 12px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  color: #333;
  line-height: 1.5;
  font-size: 13px;
  font-weight: 400;
  overflow-wrap: break-word;
}
.loading {
  background-image: url("~@/assets/背景.png");
  height: 100%;
  background-size: 300px 300px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
