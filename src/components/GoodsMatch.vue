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
        '搭配',
      subs: [
        { name: '热门', key: 'hotGoods' },
        { name: '耳机音响', key: 'headset' }
      ],
      topSubStatus: 'hotGoods',
      currGoods: [],
      leftGoods: [
        { sourceUrl: 'https://www.mi.com/scooter/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6874615b3c50e837ffe532eb6ea4ef1a.jpg?thumb=1&w=234&h=300&f=webp&q=90' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11191', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a00bdd568dbc2b02f8fe0fa8d1b46f28.jpg?thumb=1&w=234&h=300&f=webp&q=90' }
      ],
      hotGoods: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=12899', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米真无线蓝牙耳机Air 2 Pro', price: '699', desc: '主动降噪/持久续航/无线充' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9311', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '高速无线充套装', price: '149', desc: '快速无线闪充，Qi充电标准' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10317', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Redmi充电宝 10000mAh 标准版 白色', price: '59', desc: '10000mAh大电量' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10318', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Redmi充电宝 20000mAh 快充版', price: '99', desc: '大容量， 可上飞机' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=5857', imgUrl: '//i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!200x200.jpg', title: '小米插线板 5孔位', price: '39', desc: '多重安全保护' },
        { sourceUrl: 'https://www.mi.com/sound-carry/', imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&amp;w=200&amp;h=200', title: '小米小爱蓝牙音箱 随身版', price: '49', desc: '小巧便携，一键唤醒小爱' },
        { sourceUrl: 'https://www.mi.com/aispeaker-touch/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米小爱触屏音箱', price: '199', desc: '好听，更好看' },
        { moreUrl: '//www.mi.com/p/3469.html', sourceUrl: 'https://www.mi.com/buy?product_id=12090', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/601d1ac94ca155a59a813bff1045e8b3.jpg?thumb=1&amp;w=100&amp;h=100&amp;f=webp&amp;q=90', title: '小米无线车充通用快充版', price: '129' }
      ],
      headset: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=12479', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d9e8308f5f55bfa69c5c7fadc7cb4aa.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Redmi AirDots 2真无线蓝牙耳机', price: '99', desc: '支持蓝牙5.0，自动秒连，拿起就能用', oldprice: '', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11821', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6306bf6d8aede9f6f48d8e4d9256db2.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米真无线蓝牙耳机Air 2s', price: '399', desc: '全面升级，智慧真无线', oldprice: '', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10316', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/faf8668acb2fd80c0afad4d4c4e837ad.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米降噪项圈蓝牙耳机', price: '399', desc: '无线降噪，静无止境', oldprice: '499', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10745', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b619d27877bbc497468c673a317a847.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米小爱音箱 Pro', price: '299', desc: '语音遥控5000+品牌主流家电', oldprice: '', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/bluetooth-collar/', imgUrl: '//i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79!200x200.jpg', title: '小米蓝牙项圈耳机', price: '199', desc: '挂在脖子上的好耳机', oldprice: '299', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/half-in-ear/', imgUrl: '//i8.mifile.cn/b2c-mimall-media/ddf317f34e47eed06d910ee0ffd6b2fc!200x200.jpg', title: '小米双单元半入耳式耳机', price: '59', desc: '半入耳式舒适佩戴', oldprice: '69', discountType: 'discount' },
        { sourceUrl: 'https://www.mi.com/littleaudio/', imgUrl: '//i8.mifile.cn/v1/a1/T1hVY_BTdv1RXrhCrK!200x200.jpg', title: '小米随身蓝牙音箱', price: '69', desc: '全金属外壳，内置麦克风', oldprice: '', discountType: 'discount' },
        { moreUrl: '//www.mi.com/p/3469.html', sourceUrl: 'https://www.mi.com/aispeaker-hd/', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecafe0dd23a701e211bbb2079df3f1ff.jpg?thumb=1&w=100&h=100&f=webp&q=90', title: ' 小米小爱音箱HD', price: '599' }
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
