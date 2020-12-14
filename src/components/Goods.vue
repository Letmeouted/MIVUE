<template>
  <div class="goods-container">
    <quickly-buy></quickly-buy>
    <banner-box></banner-box>
    <goods-first></goods-first>
    <banner-box-1></banner-box-1>
    <goods-appliance></goods-appliance>
    <banner-box-2></banner-box-2>
    <goods-smart></goods-smart>
    <banner-box-3></banner-box-3>
    <goods-match></goods-match>
    <banner-box-4></banner-box-4>
    <goods-parts></goods-parts>
    <banner-box-5></banner-box-5>
    <goods-ambitus></goods-ambitus>
    <banner-box-6></banner-box-6>
    <videos></videos>
  </div>
</template>
<script>
import BannerBox from './BannerBox'
import GoodsFirst from './GoodsFirst'
import QuicklyBuy from './QuicklyBuy'
import BannerBox1 from './BannerBox1'
import GoodsAppliance from './GoodsAppliance'
import BannerBox2 from './BannerBox2'
import GoodsSmart from './GoodsSmart'
import BannerBox3 from './BannerBox3'
import GoodsMatch from './GoodsMatch'
import BannerBox4 from './BannerBox4'
import GoodsParts from './GoodsParts'
import BannerBox5 from './BannerBox5'
import GoodsAmbitus from './GoodsAmbitus'
import BannerBox6 from './BannerBox6'
import Video from './Video'
export default {
  components: {
    QuicklyBuy,
    GoodsFirst,
    BannerBox,
    BannerBox1,
    GoodsAppliance,
    BannerBox2,
    GoodsSmart,
    BannerBox3,
    GoodsMatch,
    BannerBox4,
    GoodsParts,
    BannerBox5,
    GoodsAmbitus,
    BannerBox6,
    'videos': Video
  }
}
</script>
<style lang="less" scoped>
.goods-container {
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  padding-bottom: 40px;
}
</style>
