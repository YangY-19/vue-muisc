<template>
  <div class="slider">
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
       position: relative
       overflow: hidden
       white-space: nowrap
</style>