<template>
  <div class="boxs-container">
    <div class="boxs">
      <div class="boxs-top clearfix">
        <h3 class="top-title">手机</h3>
        <a href="//www.mi.com/a/h/14933.html" target="_blank">
          <span class="top-sub">
            查看全部
            <i class="sub-icon fa fa-fw fa-chevron-circle-right"></i>
          </span>
        </a>
      </div>
      <div class="boxs-content clearfix">
        <div class="box-left">
          <a href="https://www.mi.com/mixalpha" target="_blank">
            <img class="lazyload"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90"
              alt=""
            />
          </a>
        </div>
        <div class="box-right">
          <ul class="box-list">
            <li class="box-item" v-for="good in goods" :key="good.index">
              <a :href="good.sourceUrl" target="_blank">
                <img class="lazyload" v-lazy="good.imgUrl" alt="" />
                <h3 class="box-title">{{ good.title }}</h3>
              </a>
              <p class="box-desc">
                {{ good.desc }}
              </p>
              <p class="box-price">{{ good.price }}元起</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goods: [
        { sourceUrl: 'https://www.mi.com/redminote9pro', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Note 9 Pro', desc: '一亿像素夜景相机，120Hz六档变速高刷屏', price: '1599' },
        { sourceUrl: 'https://www.mi.com/redminote9', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Note 9', desc: '天玑 800U处理器，5000mAh电池', price: '1299' },
        { sourceUrl: 'https://www.mi.com/redminote9-4g', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: ' Note 9 4G', desc: '6000mAh长续航', price: '999' },
        { sourceUrl: 'https://www.mi.com/buy/detail?product_id=12609', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '小米10 至尊版', desc: '120X 变焦/120W秒充/120Hz屏幕', price: '5299' },
        { sourceUrl: 'https://www.mi.com/redmik30s', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cf7a05df86a858a1f391a0378d8c27d.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Redmi K30S 至尊纪念版', desc: '144Hz[7档]变速高刷屏', price: '2599' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12605', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Redmi K30 至尊版', desc: '120Hz弹出全面屏，天玑1000+旗舰处理器', price: '1999' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12517', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: '腾讯黑鲨3S', desc: '骁龙865处理器，120Hz刷新率', price: '3999' },
        { sourceUrl: 'https://www.mi.com/buy/detail?product_id=12511', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&amp;w=200&amp;h=200&amp;f=webp&amp;q=90', title: 'Redmi 9A', desc: '5000mAh长循环大电量，6.53"超大护眼屏幕', price: '599' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.boxs-container {
  width: 100%;
  height: auto;
  padding-top: 2px;
  margin-bottom: 24px;
  background: #f5f5f5;
}

.boxs {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
}

.boxs-top {
  width: 100%;
  height: 58px;
}

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
  display: block;
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  cursor: pointer;
  .sub-icon {
    color: #b0b0b0;
    font-size: 20px;
  }
  &:hover {
    color: #ff6700;
    .sub-icon {
      color: #ff6700;
    }
  }
}

.box-left {
  float: left;
  width: 234px;
  height: 614px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 5px 5px 20px #ccc;
  }
}

.box-right {
  float: left;
  width: 992px;
  height: 628px;
  .box-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .box-item {
    position: relative;
    margin: 0 0 14px 14px;
    padding: 20px 0;
    width: 234px;
    height: 260px;
    background: #fff;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 5px 5px 20px #ccc;
    }
    img {
      display: block;
      width: 160px;
      height: 160px;
      margin: 0 auto;
    }
    .box-title {
      font-size: 14px;
      text-align: center;
      color: #333;
      font-weight: normal;
    }
    .box-desc {
      margin: 0 10px 10px;
      height: 18px;
      font-size: 12px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #b0b0b0;
    }
    .box-price {
      color: #ff6700;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
