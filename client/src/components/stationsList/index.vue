<template>
  <!-- 站点列表 -->
  <scroll :data="data">
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
</template>

<script type="text/ecmascript-6">
  import Scroll from '@/base/scroll/index.vue'
  import { request } from '@/assets/js/request'
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
          console.log(this._normallizeStaions(res))
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
        return map
      },
      stationsCheck(item) {
        this.$emit('checked', item)
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped>

</style>
