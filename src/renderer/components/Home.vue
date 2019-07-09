<template>
  <div class="homepage">
    <Sidebar></Sidebar>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar/index'
export default {
  data () {
    return {}
  },
  components: {
    Sidebar
  }
}
</script>

<style>
.homepage {
  background-color: antiquewhite;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #7a5e87, #393b50);
}
</style>
