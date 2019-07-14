<template>
  <div class="taskicon kr-view"
       @click='handler'>
    <div class="circle"
         ref=circle></div>
    <div ref="finish"
         class="finish">
      <svg-icon icon-class="成功"
                class="resizeclass"></svg-icon>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    flag: false// 接受参数注入，改变状态
  },
  data () {
    return {
      isselect: this.flag
    }
  },
  mounted () {
    // 挂载后过度状态
    this.changestate()
  },
  watch: {
    isselect () {
      this.changestate()
    }
  },
  methods: {
    handler () {
      this.isselect = !this.isselect
      // 绑定父组件参数
      this.$emit('update:flag', this.isselect)
    },
    changestate () {
      // 过渡效果
      if (this.isselect) {
        this.$refs.circle.style.transform = 'scaleX(0) scaleY(0)'
        this.$refs.circle.style.opacity = '0'
        this.$refs.finish.style.transform = 'scaleX(1) scaleY(1)'
        this.$refs.finish.style.opacity = '1'
      } else {
        this.$refs.circle.style.transform = 'scaleX(1) scaleY(1)'
        this.$refs.circle.style.opacity = '1'
        this.$refs.finish.style.transform = 'scaleX(0) scaleY(0)'
        this.$refs.finish.style.opacity = '0'
      }
    }
  }
}
</script>
<style scoped>
@import url("./style.css");
.taskicon {
  margin-top: 9px;
  width: 22px;
  height: 22px;
  display: block;
  position: relative;
  cursor: pointer;
}
.circle {
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 100%;
  border-width: 2px;
  border: 2px solid;
  transition: all 0.3s;
  border-color: rgb(0, 170, 255);
  transform: scaleX(1) scaleY(1);
  opacity: 1;
}
.finish {
  position: absolute;
  transform: scaleX(0) scaleY(0);
  transition: all 0.3s;
}
.resizeclass {
  width: 22px;
  height: 22px;
  vertical-align: sub;
}
</style>
