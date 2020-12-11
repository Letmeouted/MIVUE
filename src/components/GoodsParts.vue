<template>
  <div class="around-container">
    <div class="goods-top clearfix">
      <h3 class="top-title">{{ TopTitle }}</h3>
      <ul class="top-sub">
        <li
          v-for="sub in subs"
          :class="{ active: topSubStatus === sub.key }"
          @mouseenter="topSubEnter(sub.key)"
          :key="sub.index"
        >
          {{ sub.name }}
        </li>
      </ul>
    </div>
    <div class="goods-content clearfix">
      <goods-left :left-goods="leftGoods"></goods-left>
      <goods-right :curr-goods="currGoods"></goods-right>
    </div>
  </div>
</template>

<script>
import GoodsLeft from './goodscontent/GoodsLeft'
import GoodsRight from './goodscontent/GoodsRight'
import GoodsTop from './goodscontent/GoodsTop'
export default {
  data () {
    return {
      TopTitle:
        '配件',
      subs: [
        { name: '热门', key: 'hotGoods' },
        { name: '充电器', key: 'charger' }
      ],
      topSubStatus: 'hotGoods',
      currGoods: [],
      leftGoods: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=12404', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f64bbd58c3f5001bdf0688894f22cb6.jpg?thumb=1&w=234&h=300&f=webp&q=90' },
        { sourceUrl: 'https://www.mi.com/dispenser/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffe4182f1d9a5befdf2380ec90ae1620.jpg?thumb=1&w=234&h=300&f=webp&q=90' }
      ],
      hotGoods: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=9311', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '高速无线充套装', price: '149', desc: '快速无线闪充，Qi充电标准' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10721', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米无线充电宝青春版10000mAh', price: '129', desc: '能量满满，无线有线都能充' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=4053', imgUrl: '//i8.mifile.cn/v1/a1/b0ded71f-b235-8f99-ba1c-20f80c3a4231!200x200.jpg', title: '米家LED随身灯', price: '19.9', desc: '巧轻便 5级亮度调节' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11543', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米GaN充电器 Type-C 65W', price: '149', desc: '氮化镓黑科技 65W MAX 大功率快充' },
        { sourceUrl: 'https://www.mi.com/batterytwins/', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/553e9c2b-0023-e9a7-3bdb-26ec66a4007c.jpg?thumb=1&amp;w=200&amp;h=200', title: '移动电源高配版（10000mAh）', price: '129', desc: '轻薄设计，轻松出行', oldprice: '149', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=4944', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg?thumb=1&amp;w=200&amp;h=200', title: ' 小米二合一数据线100cm', price: '24.9', desc: '支持快充，安全保护' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9355', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c19fad90ad73f91e13c97cce2b15d82.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米9 SE 街头风保护壳', price: '49', desc: '简约时尚，多彩三色' },
        { moreUrl: '//www.mi.com/search?keyword=%E4%BF%9D%E6%8A%A4%E5%A3%B3', sourceUrl: 'https://www.mi.com/batterytwins/', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/553e9c2b-0023-e9a7-3bdb-26ec66a4007c.jpg?thumb=1&amp;w=200&amp;h=200', title: '移动电源高配版（10000mAh）', price: '129' }
      ],
      charger: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=12176', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/971da2015fe533acebbca413f88084ab.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米Type-C充电器65W 疾速闪充版', price: '99', desc: '疾速闪充' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11543', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: ' 小米GaN充电器 Type-C 65W', price: '149', desc: '氮化镓黑科技 65W MAX 大功率快充' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10860', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ac53312f850bfcc73bdc5a185fda8a.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米立式风冷无线充 30W', price: '199', desc: '解锁充电新姿势' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11226', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb115b0d5e6cc24c39c1ae818b63bf1a.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米立式无线充电器 通用快充20W', price: '99', desc: '横竖可充，迅速感应边充边玩' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11384', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c85b67f1c4f5e460a4be5cea5858264b.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '米家智能插座蓝牙网关版', price: '79', desc: '让传统家电变智能' },
        { sourceUrl: 'https://www.mi.com/powerstrip6/', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/554198af-55ec-8400-7a04-66a8f3e0dd66.jpg?thumb=1&w=200&h=200', title: '米家插线板6位基础版（含3口USB 2A快充）', price: '79', desc: '小巧设计，便捷不占地儿' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=7805', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d6484113b03acde1672d50c395c09763.jpg?thumb=1&w=200&h=200', title: '小米插线板（含3口USB 2A快充）', price: '49', desc: '3个USB充电口，支持快充' },
        { moreUrl: '//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8', sourceUrl: 'https://www.mi.com/buy?product_id=9125', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9adc2a937362ccd910616a277923aa43.jpg?thumb=1&w=100&h=100', title: '小米米家智能插座WiFi版', price: '49' }
      ]

    }
  },
  mounted () {
    this.currGoods = this.hotGoods
  },
  methods: {
    topSubEnter (key) {
      this.topSubStatus = key
      this.currGoods = this[key]
    }
  },
  components: {
    GoodsTop,
    GoodsLeft,
    GoodsRight
  }
}
</script>

<style lang="less" scoped>
.around-container {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.goods-content {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.goods-top {
  width: 100%;
  height: 58px;
  .top-title {
    float: left;
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .top-sub {
    float: right;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    margin-top: 16px;
    color: #424242;
    li {
      width: auto;
      height: 24px;
      line-height: 24px;
      margin-left: 30px;
      cursor: pointer;
      border-bottom: 2px solid #f5f5f5;
      &.active {
        color: #ff6700;
        border-bottom: 2px solid #ff6700;
      }
    }
  }
}
</style>
