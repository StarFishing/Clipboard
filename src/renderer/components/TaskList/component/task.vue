<template>
  <div class="taskWrapper">
    <!-- <div class="container"> -->
    <div style="position:relative">
      <pre class="pre"
           ref=pre></pre>
      <textarea tabindex="0"
                ref='content'
                rows="3"
                @input="changeContent"
                class="tooltiptext"></textarea>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    changeContent () {
      this.$refs.pre.innerHTML = this.$refs.content.value
    }
  }
}
</script>
<style scoped>
.taskWrapper {
  width: 80px;
  position: relative;
  min-height: 20px;
  /* height: 20px;
  padding-right: 30px; */
}
/* .container {
  position: relative;
  width: 100%;
  min-height: 20px;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: transparent;
  outline: 0;
  resize: none;
  overflow: hidden;
} */
.taskWrapper pre {
  position: relative;
  width: 100%;
  display: block;
  visibility: hidden;
  font-size: 14px;
  height: 100%;
  color: #333333;
  min-height: 20px;
  line-height: 1.3;
  word-wrap: break-word;
  padding: 0;
  font-family: fantasy;
}
.taskWrapper .tooltiptext {
  background-color: white;
  border-width: 0px;
  border-color: rgb(0, 170, 255);
  border-style: solid;
  color: rgb(61, 71, 77);
  border-radius: 0px;
  /* padding: 0px 10px; */
  font-size: 14px;
  font-family: fantasy;
  resize: none;
  width: 100%;
  outline: 0px;
  min-height: 20px;
  overflow-y: hidden;
  line-height: 1.3;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  outline: 0;
  resize: none;
  overflow: hidden;
  /* height: 22px; */
}
</style>

