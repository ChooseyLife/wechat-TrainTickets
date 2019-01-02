<template>
  <ul class="train-content">
    <li>
      <dd class="train-form" v-text="train_from"></dd>
      <dd class="train-to" v-text="train_to"></dd>
      <dt>
        <i class="chage"></i>
      </dt>
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
    color: #000
    .chage
      display: inline-block
      &:after
        content: ''
        display: inline-block;
        width: 1.4rem
        height 1.4rem
        background: url("../../assets/images/train-index.png")
        background-repeat: no-repeat;
        background-size: 4rem;
        background-position: -2rem 0
</style>
