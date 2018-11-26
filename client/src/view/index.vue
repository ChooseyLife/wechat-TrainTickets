<template>
  <div>
    <h3 class="title" @click="getStation">火车票查询系统</h3>
  </div>
</template>

<script>
  import {request} from '@/assets/js/request'
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
      getStation() {
        this.$router.push({path: 'station'})
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
    }
  }
</script>

<style scoped>
.title{
  color: #fff;
}
</style>
