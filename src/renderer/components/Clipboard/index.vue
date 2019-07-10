<template>
  <div class="clipWrapper"
       ref="wrapper">
    <div class="contentitems"
         v-if="clipList.length">
      <div class="items"
           v-for="(item,index) in clipList"
           :key="index">

        <div class="head">Ctr</div>
        <div class="content"
             v-text="item.content">
          <!-- <prism language="bash"
                 :plugins="['command-line']"
                 :code="item.content"></prism> -->
        </div>
      </div>
    </div>
    <div class="loading"
         v-if="!clipList.length"></div>
  </div>
</template>
<script>
import { ipcRenderer } from 'electron'
import BScroll from 'better-scroll'
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
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
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
    }
  },
  watch: {
    'clipList': {
      handler: function (newvalue, oldvalue) {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            mouseWheel: {
              speed: 20,
              invert: false,
              easeTime: 300
            },
            preventDefaultException: { className: /(^|\s)items(\s|$)/ },
            click: true
          })
        })
      },
      deep: true
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
}
.content {
  padding: 5px 10px;
  font-size: 12px;
  font-family: monospace;
}
.loading {
  background-image: url("~@/assets/背景.png");
  height: 100%;
  background-size: 300px 300px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
