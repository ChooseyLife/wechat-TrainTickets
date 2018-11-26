<template>
  <scroll :data="data">
    <ul>
      <li v-for="list in data"
          :key="list.name"
      ></li>
    </ul>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  export default {
    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        show: false
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped>
  .slider-enter-active,.slider-leave-active{
    transition: all 0.3s
  }
  .slider-enter, .slider-leave-to{
    transform: translate3d(100%,0,0)
  }

</style>
