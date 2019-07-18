<template>
  <div class="homepage">
    <Sidebar></Sidebar>
    <transition name="fade">
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
    return {}
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  components: {
    Sidebar,
    Clipboard
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
.fade-enter-to,
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
}

.fade-enter-active {
  transition: all 0.4s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
