<template>
  <div class="contenWrppaer"
       ref="contenWrppaer">
    <div style="position:relative;">
      <pre class="pre"
           ref=pre>{{text}}</pre>
      <textarea tabindex="0"
                ref='content'
                rows="3"
                v-model="text"
                @focus="onfocus"
                @blur="onblur"
                :disabled="edit"
                class="tooltiptext"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: ''
  },
  data () {
    return {
      edit: false,
      text: this.content
    }
  },
  mounted () {
    // 新添加的元素获得焦点
    if (this.text === '') {
      this.$refs.content.focus()
    }
  },
  methods: {
    getfoucus () {
      if (this.edit) {
        this.edit = false
        // 直接放在这里会有延迟导致聚焦失败
        this.$refs.content.focus()
      }
    },
    onfocus () {
      this.$refs.contenWrppaer.style.width = '210px'
      this.edit = false
    },
    onblur () {
      this.$refs.contenWrppaer.style.width = '180px'
      this.edit = true
      // 用于验证输入内容
      this.$emit('valitecontent', this.text)
      // 双向绑定数据到父组件
      this.$emit('update:content', this.text)
    }
  }
}
</script>
<style scoped>
.contenWrppaer {
  width: 180px;
  position: relative;
  min-height: 20px;
  padding: 5px 10px;
}
.contenWrppaer pre {
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
.tooltiptext {
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
}
</style>
