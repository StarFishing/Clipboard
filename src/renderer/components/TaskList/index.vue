<template>
  <div class="listWrapper">
    <div class="scroll">

      <div class="undoneWrapper"
           ref="getheight">
        <div class="title">
          <div class="description">My Tasks</div>
          <div class="titleicon">
            <toggle-button @filteritems="filteritems"
                           :filter="true"></toggle-button>
          </div>
        </div>
        <div class="add"
             style="cursor:pointer;user-select: none;"
             @click="additem">
          <div style="display:flex; align-items: center;justify-content: center;flex:0 0 40px">
            <svg-icon icon-class="添加"
                      style="width: 12px;height: 12px;vertical-align: sub;"></svg-icon>
          </div>
          <div style="flex: 1;font-size: 16px;display: flex;color: rgb(0, 170, 255);align-items: center;">Add...</div>
        </div>
        <transition name="collpse">
          <div class="taskitem"
               v-show="hiddenitems"
               ref="setheight">
            <draggable tag="ul"
                       v-model="taskList"
                       v-bind="dragOptions"
                       :move="onMove"
                       class="controlitemWrapper">
              <transition-group name="add"
                                class="list-group"
                                tag="ul">
                <li class="list-group-item"
                    v-for="(element) in taskList"
                    :key="element.time">
                  <div class="head">
                    <div class="finish"
                         style="flex:0 0 40px">
                      <success-circle :flag.sync="element.finish"></success-circle>
                    </div>
                    <taskInput style="flex:1"
                               @valitecontent="valitecontent"
                               :content.sync="element.content"></taskInput>
                    <div class="delete">
                      <svg-icon @click="deletitem(element)"
                                icon-class="移除"
                                style="  width: 22px;height: 22px;vertical-align: sub;"></svg-icon>
                    </div>
                  </div>
                </li>
              </transition-group>
            </draggable>
          </div>
        </transition>
      </div>
      <div class="doneWrapper"
           ref="getheight2">
        <div class="title">
          <div class="description">Has Finish</div>
          <div class="titleicon">
            <svg-icon icon-class="星星"
                      style="  width: 22px;height: 22px;vertical-align: sub;"></svg-icon>
          </div>
        </div>
        <div class="taskitem"
             ref=setheight2>
          <draggable tag="ul"
                     v-model="list2"
                     v-bind="dragOptions"
                     :move="onMove"
                     class="controlitemWrapper">
            <transition-group name="finish"
                              class="list-group"
                              tag="ul">
              <li class="list-group-item"
                  v-for="(element) in list2"
                  :key="element.time">
                <div class="head">
                  <div class="finish"
                       style="flex:0 0 40px">
                    <success-circle :flag.sync="element.finish"></success-circle>
                  </div>
                  <taskInput style="flex:1"
                             :content.sync="element.content"></taskInput>
                  <div class="delete">
                    <svg-icon @click="fdeletitem(element)"
                              icon-class="移除"
                              style="  width: 22px;height: 22px;vertical-align: sub;"></svg-icon>
                  </div>
                </div>
              </li>
            </transition-group>
          </draggable>
        </div>

      </div>

    </div>

  </div>
</template>
<script>
import draggable from 'vuedraggable'
import taskInput from './component/task'
import successCircle from '@/generalComponents/successCircle'
import toggleButton from '@/generalComponents/toggleButton'
export default {
  components: {
    draggable,
    taskInput,
    successCircle,
    toggleButton
  },
  data () {
    return {
      taskList: [],
      isDragging: false,
      editable: true,
      delayedDragging: false,
      list2: [],
      hiddenitems: true
    }
  },
  mounted () {
    this.resetheight()
    window.addEventListener('resize', () => {
      this.resetheight()
    })
  },
  methods: {
    resetheight () {
      // 动态计算任务列表的高度
      let height = this.$refs.getheight.clientHeight - 100 - 20
      this.$refs.setheight.style.height = height + 'px'
      let height2 = this.$refs.getheight2.clientHeight - 60 - 20
      this.$refs.setheight2.style.height = height2 + 'px'
    },
    additem () {
      if (this.hiddenitems) {
        return
      }
      let obj = { time: parseInt(new Date().getTime()), content: '', fixed: false, finish: false }
      this.taskList.unshift(obj)
    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    deletitem (element) {
      this.taskList.forEach((value, index) => {
        if (value.time === element.time) {
          this.taskList.splice(index, 1)
        }
      })
    },
    fdeletitem (element) {
      this.list2.forEach((value, index) => {
        if (value.time === element.time) {
          this.list2.splice(index, 1)
        }
      })
    },
    filteritems () {
      this.hiddenitems = !this.hiddenitems
    },
    valitecontent (text) {
      let arr = this.taskList
      let arr2 = this.list2
      if (text === '') {
        // this.taskList.shift()
        this.taskList = arr.filter((value, index) => {
          if (value.content === '') {
            return false
          }
          return true
        })

        this.list2 = arr2.filter((value, index) => {
          if (value.content === '') {
            return false
          }
          return true
        })
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>

<style scoped>
.listWrapper {
  position: relative;
  margin-left: 200px;
  overflow: hidden;
  height: 100%;
}
.scroll {
  position: absolute;
  top: 0;
  left: 0;
  right: -20px;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 20px 60px 20px 40px;
}
.undoneWrapper,
.doneWrapper {
  width: 320px;
  flex: 0 0 250px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
}
.listWrapper li {
  user-select: none;
}
.title {
  display: flex;
  height: 60px;
  margin-bottom: 20px;
  align-items: center;
  /* font-size: 16px; */
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.2);
}
.title .description {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.undoneWrapper .head,
.undoneWrapper .add,
.doneWrapper .head {
  background: white;
  border-radius: 10px;
  width: 100%;
  min-height: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
}
.undoneWrapper .add {
  margin-bottom: 10px;
}
.undoneWrapper .head .finish,
.doneWrapper .head .finish {
  display: flex;
  justify-content: center;
}
.undoneWrapper .head .textcircle,
.doneWrapper .head .textcircle {
  margin-top: 10px;
  width: 22px;
  height: 22px;
  background-color: white;
  position: absolute;
  border-radius: 100%;
  border-width: 2px;
  border: 2px solid;
  border-color: rgb(0, 170, 255);
  transform: scaleX(1) scaleY(1);
  opacity: 1;
}
.undoneWrapper .head .delete,
.doneWrapper .head .delete {
  opacity: 0;
  width: 30px;
  display: flex;
  justify-content: center;
  margin-top: 9px;
  cursor: pointer;
}
.undoneWrapper .head:hover .delete,
.doneWrapper .head:hover .delete {
  opacity: 1;
}
.undoneWrapper .taskitem,
.doneWrapper .taskitem {
  position: relative;
  height: 300px;
  margin-right: -20px;
  padding-right: 20px;
  overflow-y: scroll;
}
.controlitemWrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0 0 5px 0;
}
@media screen and (max-width: 700px) {
  .scroll {
    justify-content: space-around;
  }
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  /* opacity: 0.5; */
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  /* background: #c8ebfb; */
  border-radius: 10px;
}

.list-group {
  min-height: 100%;
}

.list-group-item {
  position: relative;
  display: block;
  /* padding: 0.75rem 1.25rem; */
  margin-bottom: -1px;
  background-color: #7a5e87;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px 0;
  /* border: 1px solid rgba(0, 0, 0, 0.125); */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  /* cursor: move; */
}
.list-group-item:first-child {
  margin-top: 0;
}
/* .list-group-item:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
} */
.list-group-item i {
  cursor: pointer;
}
.list-group-item > .badge {
  float: right;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
}
/* 进入之前和离开之后的style */
.add-enter {
  opacity: 0;
  transform: translateY(-40px);
}
.add-leave-to {
  transform: scaleX(0.5) scaleY(0.5);
  opacity: 0;
  /* transform: translateX(100px); */
}
/* 进入过程和离开过程的过渡 */
.add-enter-active,
.add-leave-active {
  transition: all 0.5s ease;
}
/* 离开时变为absolute，导致下方上升 */
.add-leave-active {
  position: absolute;
}
/* 移动时的过渡时间 */
.add-move {
  transition: all 0.5s ease;
}

/* 进入之前的style */
/* .finish-enter {
  opacity: 0;
  transform: translateY(-40px);
} */
.finish-leave-to {
  transform: scaleX(0.5) scaleY(0.5);
  opacity: 0;
  /* transform: translateX(100px); */
}
/* 进入过程和离开过程的过渡 */
.finish-enter-active,
.finish-leave-active {
  transition: all 0.5s ease;
}
/* 离开时变为absolute，导致下方上升 */
.finish-leave-active {
  position: absolute;
}
/* 移动时的过渡时间 */
.finish-move {
  transition: all 0.2s ease;
}

.collpse-enter {
  opacity: 0;
  transform: scaleX(1.2) scaleY(1.2) translateX(100%) scaleX(1) scaleY(1);
}
.collpse-leave-to {
  opacity: 0;
  transform: translateX(100px);
  /* transform: scaleX(0) scaleY(0); */

  /* transform: translateX(100px); */
}
/* 进入过程和离开过程的过渡 */
.collpse-enter-active,
.collpse-leave-active {
  transition: all 0.3s ease;
}
/* 离开时变为absolute，导致下方上升 */
.collpse-leave-active {
  position: absolute;
}
.glyphicon-pushpin:before {
  content: "\E146";
}
.fa-anchor:before {
  content: "\F13D";
}
</style>
