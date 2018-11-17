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
          train_no: '6i000G291605',
          from_station_no: '02',
          to_station_no: '05',
          seat_types: 'OM9',
          train_date: '2018-11-08'
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
