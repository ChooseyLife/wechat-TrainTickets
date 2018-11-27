<template>
  <!-- 站点列表 -->
  <transition name="slider">
    <stations-list :data="data"></stations-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  import stationsList from '@/components/stationsList/index'
  import { request } from '@/assets/js/request'
  const HOT_NAME = '热门'
  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      this.getStations()
    },
    methods: {
      getStations() {
        request('/api/updateStations', null, 'POST', (res) => {
          this.data = this._normallizeStaions(res)
        })
      },
      _normallizeStaions(dataList) {
        let map = {}
        dataList.forEach((item, index) => {
          const key = item.index
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push({
            name: item.name,
            code: item.code,
            short: item.short,
            py: item.py
          })
        })
        let ret = []
        let hot = []
        for (let key in map) {
          let val = map[key]
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return ret
      }
    },
    components: {
      Scroll,
      stationsList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .slider-enter-active,.slider-leave-active
    transition: all 0.3s
  .slider-enter, .slider-leave-to
    transform: translate3d(100%,0,0)
</style>
