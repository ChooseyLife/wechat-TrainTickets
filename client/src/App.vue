<template>
  <div id="app">
    <div class="m-header">
      <div class="icon"></div>
      <h1 class="text">火车票查询</h1>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~assets/stylus/variable"
  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      margin-top: 6px
      margin-right: 9px
      width: 30px
      height: 32px
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height : 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
