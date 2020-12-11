<template>
  <div class="quicklybuy-container">
    <div class="quicklybuy-header">
      <h2 class="title">小米闪购</h2>
      <div class="control-part">
        <span
          @click="slidePre"
          class="control control-left"
          :class="{ disable: this.currPage === 0 }"
        >
          <i class="fa fa-chevron-left icon-arrow"></i>
        </span>
        <span
          @click="slideNext"
          class="control control-right"
          :class="{
            disable:
              this.currPage === Math.floor((this.recomends.length - 1) / 4),
          }"
        >
          <i class="fa fa-chevron-right icon-arrow"></i>
        </span>
      </div>
    </div>
    <div class="flashsale-countdown span4 countdown1">
      <div class="round">00:00 场</div>
      <img src="../assets/img/img.png" alt="小米闪购" />
      <div class="desc">本场已结束</div>
      <div class="countdown2 clearfix">
        <span>00</span><i>:</i><span>00</span><i>:</i><span>00</span>
      </div>
    </div>
    <div class="quicklybuy-wrap">
      <ul class="quicklybuy-content clearfix">
        <li
          class="recomend-item bordercolor"
          v-for="item in recomends"
          :key="item.index"
        >
          <a :href="item.sourceUrl" target="_blank">
            <img class="item-image" :src="item.imgUrl" alt="" />
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-desc">
              {{ item.desc }}
            </p>
            <p class="item-price">
              {{ item.price }}元
              <template v-if="item.discount === '折扣'">
                <span class="item-oldprice">{{ item.oldprice }}元</span>
              </template>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currPage: 0,
      evtNextStatus: true,
      evtPreStatus: true,
      recomends: [
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/152d8c9555f7af60bb6086fab28ffef7.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '米家三门冰箱215L 银色', price: '1199', desc: '三温区高效保鲜', oldprice: '1499' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8070925c6ba4d476392499454b973ff8.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '小米移动电源3 10000mAh超级闪充版（50W）​ 黑色', price: '179', desc: '大容量，超级闪充', oldprice: '249' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71a04dd0367df21ea4c77f7102d231ce.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '高品质多功能头戴耳机', price: '169', desc: '我的私人KTV', oldprice: '249' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cb4374160086d2ee9ed43d681790eb4.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: 'Redmi智能电视A43 黑色 43英寸', price: '1288', desc: '系统全新升级，懂内容，也懂你', oldprice: '1299' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b15efc342a60b6016c6c1092884f49d.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '小米笔记本Air 12.5" 2019款 8代M3 4G 256G 银色', price: '3499', desc: '像杂志一样随身携带', oldprice: '3999' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/730055892c1afa7b6d8128c0938b5277.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '日常元素抽纸 青春版 24包/箱', price: '27.9', desc: '精选原生竹浆，健康环保', oldprice: '32.9' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bc5d325cca5bf07fe25dfed3d562239.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: 'Redmi智能电视A32 黑色 32英寸', price: '838', desc: '陪伴美好时光', oldprice: '899' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f5067c6a067a921d39ecff175dc0e13.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '米家石英表经典版 黑色', price: '169', desc: '现代与经典融合，时尚与文艺兼具', oldprice: '199' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0b15efc342a60b6016c6c1092884f49d.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: '小米笔记本Air 12.5" 2019款 8代i5 4G 256G 银色', price: '3999', desc: '像杂志一样随身携带', oldprice: '4299' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e432f9a5a70d36a4a47315c2a212e5f.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: 'Redmi智能电视A55 黑色 55英寸', price: '1988', desc: '澎湃音效影院级体验', oldprice: '1999' },
        { sourceUrl: 'https://www.mi.com/buy/seckill', discount: '折扣', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53c97a38921965729cbcb65fca605ab0.png?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', name: 'HITH智能足浴器Q3 有线版 旋钮款 旋钮款', price: '399', desc: 'D舒适按摩，精准恒温足浴', oldprice: '569' }
      ]
    }
  },
  methods: {
    slideNext () {
      if (this.currPage < Math.floor((this.recomends.length - 1) / 4)) {
        this.currPage++
        $('.quicklybuy-content').css('margin-left', this.currPage * (-980) + 'px')
      }
    },
    slidePre () {
      if (this.currPage !== 0) {
        this.currPage--
        $('.quicklybuy-content').css('margin-left', this.currPage * (-1224) + 'px')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.quicklybuy-container {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}

.quicklybuy-header {
  position: relative;
  .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
  .control-part {
    position: absolute;
    top: 10px;
    right: 0;
    float: left;
    display: block;
    .control {
      display: block;
      float: left;
      width: 34px;
      height: 23px;
      line-height: 23px;
      text-align: center;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      &:hover {
        .icon-arrow {
          color: #ff6700;
        }
      }
      &.disable {
        &:hover {
          .icon-arrow {
            color: #e0e0e0;
          }
        }
        .icon-arrow {
          color: #e0e0e0;
        }
      }
      .icon-arrow {
        color: #b0b0b0;
        font-size: 10px;
      }
    }
  }
}
.flashsale-countdown {
  border-top-width: 1px;
  border-top-style: solid;
  background: #f1eded;
  text-align: center;
  .round {
    font-size: 21px;
    padding-top: 45px;
    color: #ef3a3b;
    text-align: center;
  }
  img {
    margin: 25px auto;
  }
  .desc {
    color: #6f6d6d;
    font-size: 15px;
  }
  .countdown2 {
    width: 168px;
    margin: 28px auto 0;
    span {
      width: 46px;
      height: 46px;
      background: #605751;
      color: #fff;
      font-size: 24px;
      line-height: 46px;
      float: left;
    }
    i {
      width: 15px;
      float: left;
      height: 46px;
      line-height: 46px;
      color: #605751;
      font-size: 28px;
      font-style: normal;
    }
  }
}
.span4 {
  float: left;
  width: 230px;
  height: 300px;
}
.countdown1 {
  border-top-color: #e53935;
}

.quicklybuy-wrap {
  width: 978px;
  height: 310px;
  overflow: hidden;
  padding-left: 12px;
}
.quicklybuy-content {
  width: auto;
  height: 300px;
  transition: all 0.3s;

  .recomend-item {
    float: left;
    display: block;
    width: 234px;
    height: 300px;
    margin: 0 13px 14px 0;
    font-size: 14px;
    background: #fff;
    border-top-width: 1px;
    border-top-style: solid;
    transition: all 0.3s;
    &:nth-last-child(4n) {
      margin-right: 0;
    }

    .item-image {
      display: block;
      width: 140px;
      height: 140px;
      margin: 40px auto 15px;
    }
    .item-name {
      margin-bottom: 10px;
      font-weight: normal;
      font-size: 14px;
      text-align: center;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .item-desc {
      margin: 0 10px 10px;
      height: 18px;
      font-size: 12px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #b0b0b0;
    }
    .item-price {
      margin-bottom: 10px;
      font-size: 14px;
      text-align: center;
      color: #ff6700;
      .item-oldprice {
        font-size: 14px;
        text-align: center;
        color: #adadad;
        text-decoration: line-through;
      }
    }
  }
  .bordercolor {
    &:nth-last-child(5n) {
      border-top-color: #83c44e;
    }
    &:nth-last-child(5n + 1) {
      border-top-color: #ffac13;
    }
    &:nth-last-child(5n + 2) {
      border-top-color: #00c0a5;
    }
    &:nth-last-child(5n + 3) {
      border-top-color: #e53935;
    }
    &:nth-last-child(5n + 4) {
      border-top-color: #2196f3;
    }
  }
}
</style>
