<template>
  <div>
    <h3>火车票查询系统</h3>

  </div>
</template>

<script>
  export default {
    name: 'index',
    created() {
      this.getTrainPrice()
    },
    methods: {
      getTrainPrice() {
        let opt = {
          train_no: '580000K2300Q',
          from_station_no: '10',
          to_station_no: '17',
          seat_types: '1413',
          train_date: '2018-11-16'
        }
        this.toUrlParams(opt)
        this.postMehod('/price', opt, (res) => {
          console.log(res)
        })
      },
      toUrlParams(opt) {
        let arr = []
        for (let k in opt) {
          arr.push(k + '=' + opt[k])
        }
        return arr.join('&')
      },
      postMehod(url, option, cb) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.send(this.toUrlParams(option))
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

</style>
