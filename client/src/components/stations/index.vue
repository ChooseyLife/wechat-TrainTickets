<template>
  <ul class="train-content">
    <li class="train-flex">
      <dd class="train-form" v-text="train_from" @click="selectStation('from')"></dd>
      <dt>
        <i class="chage"></i>
      </dt>
      <dd class="train-to" v-text="train_to"></dd>
    </li>
    <li class="train-flex">
      <dd>01月11日</dd>
      <dd>今天</dd>
    </li>
    <li>
      <button class="c_btn" @click="queryTicket">查询</button>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  import { request } from '@/assets/js/request'
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
      },
      selectStation() {
        this.$router.push({path: 'index'})
      },
      queryTicket() {
        let data = {
          date: '',
          form_station: '',
          end_station: '',
          people: 'ADULT'
        }
        request('/api/ticket', data, 'POST', (res) => {
        })
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
      justify-content: space-between
      align-items: center
      position relative
      height: 135px
    dd
      width: 38%
      height: 112.5px
      line-height: 112.5px
      border-style: solid
      border-width: 0
      border-color: #e6e6e6
      border-bottom-width: 1px
    dd:nth-child(2)
      text-align: right
    dt
      position: relative
      width: 14%
      height: 75px
    .train-to
      text-align: right
    .c_btn
      border: 0
      color: #fff;
      font-size: 36px;
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      display: block;
      border-radius: 3px;
      margin: 0 auto;
      text-align: center;
      background-color: #ff9a14;
      -webkit-tap-highlight-color: #ff8c00;
      box-shadow: 0 2px 8px rgba(255,154,20,.5);
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
