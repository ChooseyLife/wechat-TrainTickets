<template>
  <div>
    <input placeholder="选择出发点" @focus="selectFrom('from')" v-model="fromStations.name">
    <button><img src="./transfrom.png"/></button>
    <input placeholder="选择目的地" @focus="selectFrom('to')" v-model="toStations.name">
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  import { bus } from '@/assets/js/event-bus'

  export default {
    data() {
      return {
        fromStations: {},
        toStations: {}
      }
    },
    created() {
      bus.$on('checkedItem', (items) => {
        items.arrive === 'to' ? this.toStations = items : this.fromStations = items
      })
    },
    methods: {
      selectFrom(data) {
        this.$emit('selectStation', data)
      },
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  input
    padding:.5rem .75rem
    border: 1px solid rgba(0,0,0,.15);
    color: #464a4c;
  button
    width: 35px
    height: 35px
    line-height: 35px
    vertical-align: middle
    img
      width: 100%
      height: 100%
</style>
