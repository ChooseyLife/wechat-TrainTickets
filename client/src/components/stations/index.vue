<template>
  <ul class="train-content">
    <li class="train-flex">
      <dd class="train-form" v-text="train_from"></dd>
      <dt>
        <i class="chage"></i>
      </dt>
      <dd class="train-to" v-text="train_to"></dd>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  import { bus } from '@/assets/js/event-bus'

  export default {
    data() {
      return {
        fromStations: {},
        toStations: {},
        train_from: '北京',
        train_to: '上海'
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
      }
    },
    components: {
      Scroll
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .train-content
    padding: 22.5px
    font-size: 50px
    color: #000
    .train-flex
      display: flex
      justify-content: space-around
      align-items: center
      position relative
    dd
      width: 38%
      height: 75px
      border-style: solid
      border-width: 0
      border-color: #e6e6e6
      border-bottom-width: 1px
    dt
      position: relative
      width: 14%
      height: 75px
    .train-to
      text-align: right
    .chage
      position: absolute
      top: 0
      left: 28%
      width: 64px
      height 64px
      &:after
        content: ''
        position: absolute
        top: 0;
        left: 0;
        width: 64px
        height 64px
        background: url("../../assets/images/train-index.png")
        background-repeat: no-repeat
        background-size: 180px
        background-position: -90px 0
</style>
