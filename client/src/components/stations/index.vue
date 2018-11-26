<template>
  <div>
  </div>
</template>

<script>
  import { http } from '@/assets/js/request'
  export default {
    created() {
      this.stationList()
    },
    methods: {
      stationList() {
        console.log(1)
        http('/station', null, (res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
