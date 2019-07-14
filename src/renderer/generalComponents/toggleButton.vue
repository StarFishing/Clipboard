<template>
  <div class="kr-view"
       style="padding-left: 10px; align-items: center;">
    <div class="kr-view wrapperCircle"
         @click="toggle"
         ref="wrapper">
      <div class="kr-view cricleposition"
           ref="circle"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    filter: false
  },
  data () {
    return {
      toggleflag: this.filter
    }
  },
  mounted () {
    this.changestate()
  },
  watch: {
    toggleflag () {
      this.changestate()
    }
  },
  methods: {
    toggle () {
      this.toggleflag = !this.toggleflag
      this.$emit('filteritems')
    },
    changestate () {
      if (this.toggleflag) {
        this.$refs.circle.style.transform = 'translateX(16px)'
        this.$refs.wrapper.style.background = 'rgb(61, 204, 61)'
      } else {
        this.$refs.circle.style.transform = 'translateX(0)'
        this.$refs.wrapper.style.background = 'rgb(213, 218, 220)'
      }
    }
  }
}
</script>
<style scoped>
@import url("./style.css");
.cricleposition {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: all 0.3s ease;
  border-radius: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  transform: translateX(0);
}
.wrapperCircle {
  transition: all 0.3s ease;
  width: 40px;
  height: 24px;
  align-items: center;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: rgba(61, 71, 77, 0.1) 0px 0px 0px 1px inset;
  background-color: rgb(213, 218, 220);
}
</style>
