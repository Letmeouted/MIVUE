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
        '家电',
      subs: [
        { name: '热门', key: 'hotGoods' },
        { name: '电视影音', key: 'video' }
      ],
      topSubStatus: 'hotGoods',
      currGoods: [],
      leftGoods: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=12159', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=234&h=300&f=webp&q=90' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11843', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86567ac179a32fa9af05f89a45e57cbe.jpg?thumb=1&w=234&h=300&f=webp&q=90' }
      ],
      hotGoods: [
        {
          sourceUrl: 'https://www.mi.com/redmitv/70',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: 'Redmi红米电视70英寸',
          price: '3299',
          desc: '70英寸震撼巨屏，4K画质，细腻如真',
          oldprice: '3799',
          discountType: 'discount'
        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e32c/',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '小米全面屏电视E32C',
          price: '899',
          oldprice: '999',
          discountType: 'discount',
          desc: '全面屏设计，人工智能系统'
        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e55a/',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '小米全面屏电视E55A',
          price: '2199',
          oldprice: '2299',
          discountType: 'discount',
          desc: '全面屏设计，人工智能语音'

        },
        {
          sourceUrl: 'https://www.mi.com/aircondition/f3w1/',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&amp;w=200&amp;h=200',
          title: '米家空调',
          price: '1799',
          desc: '出众静音，快速制冷热'

        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=9963',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '米家互联网洗烘一体机 Pro 10kg',
          price: '3299',
          desc: '智能洗烘，省心省力'

        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=9509',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: 'Redmi全自动波轮洗衣机1A 8kg',
          price: '899',
          desc: '一键操作，父母都爱用'

        },
        {
          sourceUrl: 'http://www.mi.com/mibook/air13-2019',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: 'Air 13.3" 2019款',
          price: '5699',
          discountType: 'discount',
          oldprice: '5999',
          desc: '新一代独立显卡'

        },
        { moreUrl: '//www.mi.com/p/3469.html', sourceUrl: 'https://www.mi.com/buy?product_id=9861', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg?thumb=1&amp;w=100&amp;h=100&amp;f=webp&amp;q=90', title: '米家互联网烟灶套装（天然气）', price: '2298' }

      ],
      video: [
        {
          sourceUrl: 'https://www.mi.com/mitv4c/32',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '小米电视4C 32英寸',
          price: '849',
          discountType: 'discount',
          oldprice: '999',
          desc: '高清液晶屏，人工智能系统'

        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10909',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '全面屏电视 55英寸E55X',
          price: '2149',
          discountType: 'discount',
          oldprice: '2299',
          desc: '潮流全面屏设计'

        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10764',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '小米电视4A 70英寸',
          price: '2999',
          discountType: 'discount',
          oldprice: '3999',
          desc: '大屏更享受'

        },
        {
          sourceUrl: '"https://www.mi.com/mitv4c/43/',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8156dec11073b1f98db8e4b7598262a4.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90',
          title: '小米电视4C 43英寸',
          price: '1299',
          discountType: 'discount',
          oldprice: '1399',
          desc: 'FHD全高清屏，钢琴烤漆'

        },
        {
          sourceUrl: 'https://www.mi.com/mitv4s/75/',
          imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=200&h=200',
          title: '小米电视4S 75英寸',
          price: '4199',
          discountType: 'discount',
          oldprice: '5999',
          desc: '4K HDR，人工智能语音'

        },
        {
          sourceUrl: 'https://www.mi.com/buy?product_id=10911',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a3d09cb5b895f8c3706f513552cd53d.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: '小米全面屏电视65英寸 E65C',
          price: '2799',
          discountType: 'discount',
          oldprice: '3099',
          desc: '震撼大屏，时尚全面屏'

        },
        {
          sourceUrl: 'https://www.mi.com/mitvall-screen/e32c/',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90',
          title: '小米全面屏电视E32C',
          price: '899',
          discountType: 'discount',
          oldPrice: '999',
          desc: '全面屏设计，人工智能系统'
        },
        { moreUrl: '//www.mi.com/a/h/9819.html', sourceUrl: 'https://www.mi.com/arttv/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg?thumb=1&w=100&h=100&f=webp&q=90', title: '小米壁画电视 65英寸', price: '6999' }
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
