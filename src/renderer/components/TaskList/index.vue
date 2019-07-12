<template>
  <div class="listWrapper">
    <!-- <div>
      <draggable class="list-group"
                 tag="ul"
                 v-model="taskList"
                 v-bind="dragOptions"
                 :move="onMove"
                 @start="isDragging=true"
                 @end="isDragging=false">
        <transition-group type="transition"
                          :name="'flip-list'">

          <li class="list-group-item"
              v-for="element in taskList"
              :key="element.role">
            <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
               @click=" element.fixed=! element.fixed"
               aria-hidden="true"></i>
            {{element.content}}
            <span class="badge">{{element.role}}</span>
          </li>
        </transition-group>
      </draggable>
    </div> -->

    <div class="scroll">
      <inputlabel></inputlabel>
      <div class="undoneWrapper">
        <draggable tag="ul"
                   v-model="taskList"
                   v-bind="dragOptions"
                   :move="onMove"
                   style=" height: inherit;">
          <transition-group name="no"
                            class="list-group"
                            tag="ul">
            <li class="list-group-item"
                v-for="(element,index) in taskList"
                :key="element.role">
              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                 @click=" element.fixed=! element.fixed"
                 aria-hidden="true"></i>
              {{element.content}}
              <span class="badge">{{element.role}}</span>
            </li>
          </transition-group>
        </draggable>
      </div>
      <div class="doneWrapper">
        <draggable tag="ul"
                   v-model="list2"
                   v-bind="dragOptions"
                   :move="onMove"
                   style=" height: inherit;">
          <transition-group name="no"
                            class="list-group"
                            tag="ul">
            <li class="list-group-item"
                v-for="(element,index) in list2"
                :key="element.role">
              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                 @click=" element.fixed=! element.fixed"
                 aria-hidden="true"></i>
              {{element.content}}
              <span class="badge">{{element.role}}</span>
            </li>
          </transition-group>
        </draggable>
      </div>

    </div>

  </div>
</template>
<script>
import draggable from 'vuedraggable'
import inputlabel from '@/generalComponents/inputlabel'
export default {
  components: {
    draggable,
    inputlabel
  },
  data () {
    return {
      taskList: [
        {
          role: 1,
          content: '去吃饭',
          fixed: false
        },
        {
          role: 2,
          content: '去学习',
          fixed: false
        },
        {
          role: 3,
          content: '去玩耍',
          fixed: false
        },
        {
          role: 4,
          content: '是是是吃饭',
          fixed: false
        },
        {
          role: 5,
          content: '是是是吃饭',
          fixed: false
        },
        {
          role: 6,
          content: '是是是吃饭',
          fixed: false
        },
        {
          role: 7,
          content: '是是是吃饭',
          fixed: false
        },
        {
          role: 8,
          content: '是是是吃饭',
          fixed: false
        }
      ],
      isDragging: false,
      editable: true,
      delayedDragging: false,
      list2: []
    }
  },
  methods: {
    addPeople () {

    },
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
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
  width: 250px;
  height: 300px;
  flex: 0 0 250px;
  margin: 10px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
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
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #7a5e87;
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  /* cursor: move; */
}
.list-group-item:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.list-group-item:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
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
.glyphicon-pushpin:before {
  content: "\E146";
}
.fa-anchor:before {
  content: "\F13D";
}
</style>
