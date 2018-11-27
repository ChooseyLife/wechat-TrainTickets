<template>
  <div class="container">
    <stations v-on:selectStation="getStation"></stations>
    <router-view></router-view>
  </div>
</template>

<script>
  import stations from '@/components/stations/index'
  import { request, toUrlParams } from '@/assets/js/request'
  export default {
    name: 'index',
    data() {
      return {
        message: '',
        stationsData: [{to: 'bj', date: 20181130, name: '北京'}]
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
      getStationFile() {
        console.log(request, toUrlParams)
      },
      getStation(val) {
        console.log(1, val)
        this.getStationFile()
        this.$router.push({path: '/index/' + Math.random()})
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
