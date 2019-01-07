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
    font-size: 32px
    color: #000
    .train-flex
      display: flex
      justify-content: space-around
      align-items: center
    dd
      width: 38%
      border-width: 0
      border-color: #e6e6e6
      border-bottom-width: 1px
    .train-to
      text-align: right
    .chage
      display: inline-block
      width: 48px
      height: 48px
      &:after
        content: ''
        display: inline-block;
        width: 100%
        height 100%
        background: url("../../assets/images/train-index.png")
        background-repeat: no-repeat;
        background-size: 108px;
        background-position: -49px 8px
</style>
