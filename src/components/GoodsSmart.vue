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
        '智能',
      subs: [
        { name: '热门', key: 'hotGoods' },
        { name: '安防', key: 'security' },
        { name: '出行', key: 'trip' }
      ],
      topSubStatus: 'hotGoods',
      currGoods: [],
      leftGoods: [
        { sourceUrl: 'https://www.mi.com/camera-360/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/45c23f5b9a927b2dc49c25277e07727c.jpg?thumb=1&w=234&h=300&f=webp&q=90' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9285', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?thumb=1&w=234&h=300&f=webp&q=90' }
      ],
      hotGoods: [
        { sourceUrl: 'https://www.mi.com/aiteacher-wifi/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米「小爱老师」', price: '799', desc: '英语提分利器', oldprice: '999', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12147', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0914c60fa1ab807972541b4e2b1a4cd.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米智能门锁 E', price: '999', desc: '告别钥匙，畅享便捷生活' },
        { sourceUrl: 'https://www.mi.com/aispeaker-play/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米小爱音箱 Play', price: '99', desc: '听音乐、语音遥控家电', oldprice: '169', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/aispeaker-control', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小爱音箱万能遥控版', price: '149', desc: '传统家电秒变智能', oldprice: '199', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9990', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家电饭煲4L', price: '299', desc: '890W 立体加热' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12274', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家智能窗帘', price: '799', desc: '窗帘开合随心控' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9686', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米体脂秤2', price: '99', desc: '轻松掌握身体脂肪率' },
        { moreUrl: '//www.mi.com/p/3469.html', sourceUrl: 'https://www.mi.com/scooter/', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&amp;w=100&amp;h=100', title: '九号平衡车', price: '1899' }
      ],
      security: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=10303', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1840f64ea310ca8013385885baaf16a8.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家智能门锁 标准锁体 磨砂金', price: '1299', desc: '全新磨砂金配色，精湛工艺升级', oldprice: '1499', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10025', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家智能门锁 推拉式 通用版', price: '1699', desc: '一步推拉，高端智能门锁' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10345', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0245498a0e08b87ba8c323871c5d48bc.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家智能门锁 青春版', price: '999', desc: '隐形指纹识别设计 简单一步快进家门' },
        { sourceUrl: 'https://www.mi.com/mj-smartlock-bawang', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e83e1ab5947337d7b631e056b3e0f23d.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家智能门锁 霸王锁体 碳素黑', price: '1599', desc: '一体化活体指纹识别，多种开锁方式' },
        { sourceUrl: 'https://www.mi.com/mj-smartlock-bawang', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa7cdb455f106da904e8c3f6156abc06.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '米家智能门锁 霸王锁体 磨砂金', price: '1799', desc: '适配霸王锁体，多种开锁方式' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=8835', imgUrl: '//i8.mifile.cn/b2c-mimall-media/98c51f977ac5b590dbaf7b8445b30fa6!200x200.jpg', title: '小米米家小白智能摄像机增强版', price: '399', desc: '智能看护， AI你所爱' },
        { sourceUrl: 'https://www.mi.com/camera-360/', imgUrl: '//i8.mifile.cn/b2c-mimall-media/5a94a17f3e893d9804ede3b06e894460!200x200.jpg', title: '小米米家智能摄像机云台版', price: '179', desc: '高清画质，守护家的每一面', oldprice: '199', discountType: 'discount' },
        { moreUrl: '//www.mi.com/p/3469.html', sourceUrl: 'https://www.mi.com/scooter/', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&amp;w=100&amp;h=100', title: '九号平衡车', price: '1899' }
      ],
      trip: [
        { sourceUrl: 'https://www.mi.com/babyfoldingcar/', imgUrl: '//i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9!200x200.jpg', title: '米兔折叠婴儿推车', price: '699', desc: '出发去向往的地方' },
        { sourceUrl: 'https://www.mi.com/scooterplus/', imgUrl: '//i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946!200x200.png', title: '九号平衡车 Plus', price: '3199', desc: '一个形影不离的新伙伴', oldprice: '3499', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9613', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '米家充气宝', price: '199', desc: '便携电动打气筒' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11674', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/12fe0ea5e8dafecce5ffa65108796683.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米小背包', price: '24.9', desc: '城市休闲，简约设计' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9560', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b4304d0e62a9c874e83eba0649110ee.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米旅行箱 青春款', price: '199', desc: '环保材料，轻便重量' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11368', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3520b7c57449585bc3185d31b9d9bd08.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '骑记电动助力自行车 新国标版 黑色', price: '2799', desc: '更多助力选择，更多城市风景', oldprice: '2999', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9550', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d86c1eb8f5525bc4c76c8e0e98db7446.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米米家对讲机2', price: '449', desc: '向更远出发' },
        { moreUrl: '//www.mi.com/p/3469.html', sourceUrl: 'https://www.mi.com/buy?product_id=11368', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3520b7c57449585bc3185d31b9d9bd08.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '骑记电动助力自行车 新国标版 黑色', price: '2799' }
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
