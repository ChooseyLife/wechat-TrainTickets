<template>
  <!-- 站点列表 -->
  <transition name="slide">
    <stations-list></stations-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  import stationsList from '@/components/stationsList/index'
  export default {
    data() {
      return {}
    },
    created() {},
    methods: {
    },
    components: {
      Scroll,
      stationsList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slider-enter-active,.slider-leave-active
    transition: all 0.3s
  .slider-enter, .slider-leave-to
    transform: translate3d(100%,0,0)
</style>
