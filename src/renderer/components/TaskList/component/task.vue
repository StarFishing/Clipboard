<template>
  <div class="taskWrapper">
    <div class="container">
      <pre class="pre"
           ref=pre><span /><br></pre>
      <textarea class="content"
                ref=content
                placeholder="请输入内容"
                @input="changeContent"></textarea>

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
  width: 40px;
  height: 20px;
  padding-right: 30px;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
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
}
.container pre {
  display: block;
  visibility: hidden;
}
</style>

