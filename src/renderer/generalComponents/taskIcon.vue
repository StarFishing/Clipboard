<template>
  <div class="taskicon kr-view"
       @click='handler'
       @mousedown="onmousedown"
       @mouseup="onmouseup"
       @mouseover="onmouseover"
       @mouseout="onmouseout"
       ref="taskwrapper">
    <svg-icon icon-class="任务"
              class="resizeclass"></svg-icon>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isselect: false
    }
  },
  methods: {
    onmousedown () {
      this.$refs.taskwrapper.style.transform = 'scaleX(0.9) scaleY(0.9)'
      this.$refs.taskwrapper.style.opacity = '0.5'
      this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0.3)'
    },
    onmouseup () {
      this.$refs.taskwrapper.style.transform = 'scaleX(1) scaleY(1)'
      this.$refs.taskwrapper.style.opacity = '1'
      this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0.2)'
    },
    handler () {
      this.isselect = !this.isselect
      if (this.isselect) {
        this.$refs.taskwrapper.style.opacity = '1'
        this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0.2)'
      } else {
        this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0)'
      }
    },
    onmouseover () {
      this.$refs.taskwrapper.style.transform = 'scaleX(1.05) scaleY(1.05)'
      this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0.2)'
    },
    onmouseout () {
      if (this.isselect) {
        this.$refs.taskwrapper.style.opacity = '1'
        this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0.2)'
      } else {
        this.$refs.taskwrapper.style['background-color'] = 'rgba(255, 255, 255, 0)'
      }
      this.$refs.taskwrapper.style.transform = 'scaleX(1) scaleY(1)'
    }
  }
}
</script>
<style scoped>
@import url("./style.css");
.taskicon {
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 36px;
  opacity: 1;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0);
  transform: scaleX(1) scaleY(1);
  cursor: pointer;
}
.resizeclass {
  color: white;
  width: 24px;
  height: 24px;
}
</style>
