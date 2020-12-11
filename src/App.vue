<template>
  <div id="app">
    <top-bar></top-bar>
    <top-header></top-header>
    <top-banner></top-banner>
    <top-sub></top-sub>
    <goods></goods>
    <tempfooter></tempfooter>
    <play-video :play-config="playConfig"></play-video>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import TopHeader from './components/TopHeader'
import TopBanner from './components/TopBanner'
import TopSub from './components/TopSub'
import Goods from './components/Goods'
import Footer from './components/Footer'
import PlayVideo from './components/PlayVideo'
export default {
  data () {
    return {
      playConfig: {}
    }
  },
  ready () {
    this.recivePlayVideo()
  },
  methods: {
    recivePlayVideo () {
      this.$on('play', function (opts) {
        this.playConfig = opts
      })
    }
  },
  components: {
    TopBar,
    TopHeader,
    TopBanner,
    TopSub,
    Goods,
    'tempfooter': Footer,
    'play-video': PlayVideo
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
