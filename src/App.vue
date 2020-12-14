<template>
  <div id="app">
    <top-bar></top-bar>
    <top-header></top-header>
    <top-banner></top-banner>
    <top-sub></top-sub>
    <goods></goods>
    <tempfooter></tempfooter>
    <play-video :play-config="playConfig"></play-video>
    <slide-bar></slide-bar>
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
import SlideBar from './components/SlideBar'
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
    PlayVideo,
    SlideBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
