 <template>
    <div class="scroll" ref="scrollWrapper">
      <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {},
    mounted() {
      this._initScroll()
    },
    methods: {
      _initScroll() {
        let scrollWrapper = this.$refs.scrollWrapper
        if (!scrollWrapper){return}
        let scroll = new BScroll(scrollWrapper)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
