<template>
  <div class="sidebarWrapper">
    <div class="item"
         v-for="(item ,index) in items"
         :key="index"
         :class="shadow(index)"
         @click="changeBackground(index)">
      <span class="icon"
            :class="set_icon(index)"></span>
      <span style="display:inline-block;vertical-align:middle"> {{item.name}} </span>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          'name': '粘贴板',
          'icon_name': 'clip_icon'
        },
        {
          'name': '任务列表',
          'icon_name': 'task_icon'
        }, {
          'name': '常用属性',
          'icon_name': 'attr_icon'
        }
      ],
      current: 0
    }
  },
  created () {
    this.$router.push({ name: 'Clipboard' })
  },
  methods: {
    changeBackground (index) {
      switch (index) {
        case 0:
          this.$router.push({ name: 'Clipboard' })
          break
        case 1:
          this.$router.push({ name: 'TaskList' })
          break
        case 2:
          this.$router.push({ name: 'Property' })
          break
        default:
          break
      }
      // this.$router.push({ name: 'Clipboard' })

      // if (this.index === 0) {
      //   this.$router.push({ name: 'Clipboard' })
      //   console.log(this.$router.path)
      // }
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
  background: linear-gradient(180deg, #7a5e87, #464c57);
  height: 100%;
}
.item {
  margin: 0 10px;
  padding: 5px 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
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
.clip_icon {
  background-image: url("~@/assets/icons/粘贴.png");
}
.task_icon {
  background-image: url("~@/assets/icons/任务.png");
}
.attr_icon {
  background-image: url("~@/assets/icons/属性.png");
}
</style>

