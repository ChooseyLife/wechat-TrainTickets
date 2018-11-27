<template>
  <div>
    <input placeholder="选择出发点" @focus="selectFrom()">
  </div>
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
    methods: {
      selectFrom(data) {
        this.$emit('selectStation', 'hi')
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
