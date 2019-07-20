<template>
  <div class="sidebarWrapper">
    <div class="item"
         v-for="(item ,index) in items"
         :key="index"
         :class="shadow(index)"
         @click="changeBackground(item,index)">
      <span class="icon">
        <svg-icon :icon-class="item.icon"
                  style="  width: 20px;height: 20px;vertical-align: sub;"></svg-icon>
      </span>
      <span class="sidetitle"> {{item.title}} </span>

    </div>
  </div>
</template>
<script>
import changeTheme from '@/theme/colors'
import sidebar from '@/common/sidebar'
export default {
  data () {
    return {
      items: [],
      current: 0
    }
  },
  created () {
    this.$router.push({ name: 'Clipboard' })
    this.items = sidebar[0].children
  },
  methods: {
    changeBackground (item, index) {
      this.$router.push({ name: item.name })
      changeTheme(index)
      this.$emit('currenIndex', index)
      this.current = index
    },
    set_icon (index) {
      return this.items[index]['icon_name']
    }
  },
  computed: {
    shadow (index) {
      return function (index) {
        if (this.current === index) { return 'shadow' }
      }
    }
  }
}
</script>

<style>
.sidebarWrapper {
  float: left;
  width: 200px;
  background: linear-gradient(180deg, var(--sidebar-start), var(--sidebar-end));
  height: 100%;
}
.item {
  margin: 0 10px;
  padding: 5px 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
}
.shadow {
  background-color: #5e4e6d;
  border-radius: 10px;
}
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: 10px;
}
.sidetitle {
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  /* -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg, #81ffef 10%, #f067b4 100%);
  -webkit-background-clip: text; */
}
</style>

