<template>
  <div class="container">
    <stations v-on:selectStation="getStation"></stations>
    <router-view></router-view>
  </div>
</template>

<script>
  import stations from '@/components/stations/index'
  import { request } from '@/assets/js/request'

  const HOT_NAME = '热门'
  export default {
    name: 'index',
    data() {
      return {
        message: ''
      }
    },
    created() {
    },
    methods: {
      getTrainTicket() {
        // people: ADULT / 0X00 - 学生
        let opt = {
          from_station: 'GZQ',
          end_station: 'KMM',
          date: '2018-12-25',
          people: 'ADULT'
        }
        this.postMehod('/api/ticket', opt, 'POST', (res) => {
          this.message = res.result
          console.log(res.result)
        })
      },
      getTrainPrice() {
        let opt = {
          train_no: '630000K3650A',
          from_station_no: '01',
          to_station_no: '09',
          seat_types: '1413',
          train_date: '2018-11-30'
        }
        this.postMehod('/api/price', opt, 'POST', (res) => {
          this.message = res
        })
      },
      getTrainStation() {
        let opt = {
          train_no: '630000K3650A',
          from_station: 'GZQ',
          end_station: 'KMM',
          date: '2018-11-30'
        }
        this.postMehod('/api/station', opt, 'POST', (res) => {
          this.message = res
        })
      },
      getStationsFiles() {
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
      },
      getStation(val) {
        this.$router.push({path: '/index/' + val})
      },
      toUrlParams(opt) {
        let arr = []
        for (let k in opt) {
          arr.push(k + '=' + opt[k])
        }
        return arr.join('&')
      },
      postMehod(url, option, method, cb) {
        let xhr = new XMLHttpRequest()
        let params = method === 'POST' ? this.toUrlParams(option) : option
        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(params)
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
              cb(JSON.parse(xhr.responseText))
            }
          }
        }
      }
    },
    components: {
      stations
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    position: relative
    width: 100%
</style>
