<template>
   <div class="player" v-show="playlist.length>0">
     <div class="normal-player" v-show="fullScreen">
       <div class="background">
         <img width="100%" height="100%">
       </div>
      <!-- top -->
       <div class="top">
         <div class="back">
           <i class="icon-back"></i>
         </div>
         <h1 class="title"></h1>
         <h2 class="subtitle"></h2>
       </div>
     <!-- middle -->
       <div class="middle">
         <div class="middle-l">
           <div class="cd-wrapper">
             <div class="cd">
               <img class="image">
             </div>
           </div>
         </div>
       </div>
    <!-- bottom  -->
      <div class="bottom">
        <div class="opertors">
          <div class="icon i-left">
            <i class="icon-sequence"></i>
          </div>
          <div class="icon i-left">
            <i class="icon-prev"></i>
          </div>
          <div class="icon i-left">
            <i class="icon-play"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-next"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-icon-not-favorite"></i>
          </div>
        </div>
      </div>
     </div>
     <div class="mini-player" v-show="!fullScreen"></div>
   </div>
</template>

<script type="text/ecmascript">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fullScreen',
      'playlist'
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

  .player
     .normal-player
       position: fixed
       left: 0
       right: 0
       top: 0
       bottom: 0
       z-index: 150
       background: $color-background
    .mini-player
       display: flex
       align-items: center
       position: fixed
       left: 0
       bottom: 0
       z-index: 180
       width: 100%
       height: 60px
       background: $color-highlight-background
</style>
