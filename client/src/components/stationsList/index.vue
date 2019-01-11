<template>
  <!-- 站点列表 -->
  <div class="stations-content">
    <div class="back"
         @click="back">
      <i class="icon-back"></i>
    </div>
    <scroll
      class="listview"
      :data="data">
      <ul>
        <li v-for="list in data" :key="list.name" class="list-group" ref="list-group">
          <h2 class="list-group-title">{{list.title}}</h2>
          <ul>
            <li v-for="item in list.items"
                :key="item.id"
                class="list-group-item"
                @click="stationsCheck(item)">
              <span v-text="item.name"></span>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'

  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    created() {
      // console.log(this.$route)
    },
    methods: {
      stationsCheck(item) {
        // 选择站点
        let items = item
        items.arrive = this.$route.params.id
        this.$emit('checkStations', items)
        this.$router.back()
      },
      back() {
        this.$router.back()
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .stations-content
    position: fixed
    width: 100%
    height: 100%
    top: 0
    z-index: 1
    background: black
    .back
      position absolute
      top: 0
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
  .listview
    position: relative
    top: 42px
    width: 100%
    height: 100%
    overflow: hidden
    .list-group
      .list-group-title
        padding-left: 20px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: hsla(0,0%,100%,.5);
        background: #333
      .list-group-item
        padding: 20px 0 0 30px;
        font-size: 14px;
        span
          margin-left: 20px
          font-size: 14px
          color: hsla(0,0%,100%,.5)
</style>
