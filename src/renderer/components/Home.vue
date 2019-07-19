<template>
  <div class="homepage">
    <Sidebar @currenIndex="judgeTransition"></Sidebar>
    <transition name="fade"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>

    </transition>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar/index'
import Clipboard from '@/components/Clipboard/index'
export default {
  data () {
    return {
      currentRout: 0,
      tranlateValue: 100,
      leaveValue: -100
    }
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  components: {
    Sidebar,
    Clipboard
  },
  methods: {
    judgeTransition (index) {
      if (this.currentRout === index) return
      if (index > this.currentRout) {
        this.tranlateValue = 100
        this.leaveValue = -100
      } else {
        this.tranlateValue = -100
        this.leaveValue = 100
      }
      this.currentRout = index
    },
    beforeEnter (el) {
      console.log(1)
      console.log(`translateY(${this.tranlateValue}%)`)
      el.style.opacity = 0
      el.style.transform = `translateY(${this.tranlateValue}%)`
    },
    enter (el, done) {
      console.log(2)
      el.style.opacity = 1
      el.style.transform = 'translateY(0)'
    },
    beforeLeave (el) {
      console.log(3)
      el.style.opacity = 1
      el.style.transform = 'translateY(0)'
    },
    leave (el, done) {
      console.log(4)
      console.log(`translateY(${this.leaveValue}%)`)
      el.style.opacity = 0
      el.style.transform = `translateY(${this.leaveValue}%)`
    }

  }
}
</script>

<style>
:root {
  --homepage-start: #7a5e87;
  --homepage-end: #393b50;
  --sidebar-start: #7a5e87;
  --sidebar-end: #464c57;
}
.homepage {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--homepage-start),
    var(--homepage-end)
  );
}
/* .fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter {
  transform: translateY(100%);
  opacity: 0;
}
.fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
} */

.fade-enter-active {
  transition: all 0.4s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
