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
        '周边',
      subs: [
        { name: '热门', key: 'hotGoods' },
        { name: '出行', key: 'trip' }
      ],
      topSubStatus: 'hotGoods',
      currGoods: [],
      leftGoods: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=2203900010', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca0940f052227d235e7de5678d106c89.jpg?thumb=1&w=234&h=300&f=webp&q=90' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11674', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/942985dc060f9274bdd1be4b02f1d7ef.jpg?thumb=1&w=234&h=300&f=webp&q=90' }
      ],
      hotGoods: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=9732', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家飞行员太阳镜 Pro', price: '189', desc: '尼龙偏光，轻巧佩戴', oldprice: '199', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9836', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米巨能写中性笔10支装', price: '9.99', desc: '一支顶4支，超长顺滑书写' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10480', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/03d94ee6059481a6adcb6c4c5c572fb4.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家迷你保温杯', price: '49', desc: '可以随身携带的温度' },
        { sourceUrl: 'https://www.mi.com/toothbrush-set/', imgUrl: '//i8.mifile.cn/v1/a1/413f5e2f-53e7-0879-119c-8b4466feea53!200x200.jpg', title: '贝医生巴氏牙刷 四色装', price: '39.9', desc: '进口刷毛，好品质' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11874', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0b1119165c481376399aab53330e015.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家运动鞋4', price: '199', desc: '轻盈若絮,弹若脱兔' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11805', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/18ebd0837a5f265deaee9231aa3e1245.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家指甲刀五件套', price: '39.9', desc: '轻巧多用，优雅随行' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11863', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9017bebb14740ea46673aaa81a616cb.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '8H乳胶床垫2', price: '599', desc: '软硬双面可睡' },
        { moreUrl: '//www.mi.com/search?keyword=MIJOY', sourceUrl: 'https://www.mi.com/buy?product_id=11909', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1062daf42a1a5b2a9108510ecf83d0b.jpg?thumb=1&amp;w=100&amp;h=100&amp;f=webp&amp;q=90', title: 'MIJOY 唱片机车载香薰', price: '49' }
      ],
      trip: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=12633', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/609d0a457c7f8ac27d76f953c8acb7fc.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '九号卡丁车Pro兰博基尼汽车定制版', price: '9999', desc: '九号卡丁车Pro兰博基尼汽车定制版' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000147', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d26d3a80dd1ab0c6a657f13cb234dade.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '90分框体旅行箱', price: '599', desc: '专利轻量合金中框，轻盈坚固' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10181', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/47ecc65d37065fde1e71b1b34326e741.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米商旅多功能双肩包 2', price: '199', desc: '商务旅行多场景，切换无压力' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9732', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家飞行员太阳镜 Pro', price: '189', desc: '尼龙偏光，轻巧佩戴', oldprice: '199', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=4917', imgUrl: '//i8.mifile.cn/b2c-mimall-media/1f4c867b5ccb878b43054f640636c872!200x200.jpg', title: '最生活毛巾•青春系列', price: '19.9', desc: '3秒吸水，杀菌无刺激' },
        { sourceUrl: 'https://www.mi.com/scooter/', imgUrl: '//i8.mifile.cn/v1/a1/T1r_x_BgLT1RXrhCrK!200x200.jpg', title: '九号平衡车', price: '1899', desc: '年轻人的酷玩具', oldprice: '1999', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9285', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aabf1a475043266cf4759ec58d0f679c.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米米家电动滑板车Pro', price: '2699', desc: '性能提升，动力更强劲', oldprice: '2799', discountType: 'discount' },
        { moreUrl: '//www.mi.com/search?keyword=%E7%AE%B1%E5%8C%85', sourceUrl: 'https://www.mi.com/buy?product_id=9729', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c9871569c0b49b769bd74f5cce81e45a.jpg?thumb=1&amp;w=100&amp;h=100&amp;f=webp&amp;q=90', title: '米家经典方框太阳镜', price: '89' }
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
