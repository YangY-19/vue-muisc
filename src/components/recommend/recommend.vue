<template>
    <div class="recommend" ref="recommend">
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div >
            <div v-if="recommend.length"  class="slider-srapper">
              <!-- 引用base/slider/slider下的轮播图组件 -->
                <slider>
                  <div v-for="item in recommend" :key="item.id">
                      <a :href="item.linkUrl">
                        <img @load="loadImage" class="nedsclick" :src="item.picUrl">
                      </a>
                  </div>
                </slider>
                <!-- 引用base/slider/slider下的轮播图组件 -->
            </div>
            <div class="recommend-list">
              <h1 class="list-title">热门歌单排行榜</h1>
              <ul>
                <li
                  v-for="item in discList"
                  :key="item.dissid"
                  class="item">
                  <div class="icon">
                    <img v-lazy="item.imgurl" width="60" height="60">
                  </div>
                  <div class="text">
                    <h2 class="name" v-html="item.creator.name"></h2>
                    <p class="desc" v-html="item.dissname"></p>
                  </div>
                </li>
              </ul>
            </div>
      </div>
      <div class="loading-container" v-show="hasDiscList">
        <loading>

        </loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import {playlistMixin} from 'common/js/mixin'

export default {
  mixins: [playlistMixin],
  name: 'Recommend',
  data () {
    return {
      recommend: [],
      discList: []
    }
  },
  computed: {
    hasDiscList () {
      return !this.discList.length
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommend = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },
    loadImage () {
      if (!this.chekLoaded) {
        this.$refs.scroll.refresh()
        this.chekLoaded = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
          family()
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 15px 30px 10px 20px
          background: #333
          margin-bottom: 2px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
              family()
            .desc
              color: $color-text-d
              family()
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
