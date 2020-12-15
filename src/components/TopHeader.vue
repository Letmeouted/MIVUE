<template>
  <div class="top-header">
    <div class="container">
      <a href="https://www.mi.com/index.html/" class="icon-mi"></a>
      <a href="https://www.mi.com/a/h/18439.html/" class="mi-twelve"></a>
      <div class="header-navs">
        <ul class="navs">
          <li v-for="item in navs" class="nav" :key="item.index">
            <template v-if="item.type">
              <a
                href="javascript:void(0);"
                class="nav-item"
                @mouseenter="evtHeaderEnter(item.type)"
                @mouseleave="evtHeaderLeave()"
                >{{ item.name }}</a
              >
            </template>
            <template v-else>
              <a :href="item.sourceUrl" class="nav-item" target="_blank">{{
                item.name
              }}</a>
            </template>
          </li>
        </ul>
      </div>
      <div class="header-search">
        <input
          @focus="evtIptFocus"
          @blur="evtIptBlur"
          class="search-ipt"
          type="search"
          name="search"
          placeholder="Redmi K30 Pro 变焦版"
        />
        <label class="search-btn" for="search">
          <i class="icon-search"></i>
        </label>
        <ul class="search-result clearfix">
          <li v-for="item in results" :key="item.index">
            <span class="item-name">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="header-menu"
      @mouseenter="evtHeaderEnter()"
      @mouseleave="evtHeaderLeave()"
      v-show="headerStatus"
      transition="fadein"
    >
      <ul class="menus clearfix">
        <li class="product" v-for="item in currentPhones" :key="item.index">
          <a :href="item.sourcePath">
            <img v-lazy="item.imgUrl" alt="" class="product-img" />
          </a>
          <div class="product-name">{{ item.name }}</div>
          <div class="product-price">
            {{ item.price }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hotStatus: true,
      headerStatus: false,
      tids: '',
      currentPhones: this.xiaomi,
      navs: [
        { name: '小米手机', type: 'xiaomi' },
        { name: 'Redmi红米', type: 'redmi' },
        { name: '电视', type: 'tv' },
        { name: '笔记本', type: 'flats' },
        { name: '家电', type: 'appliances' },
        { name: '路由器', type: 'router' },
        { name: '智能硬件', type: 'hardware' },
        { name: '服务', sourceUrl: 'https://www.mi.com/service/' },
        { name: '社区', sourceUrl: 'https://www.xiaomi.cn/' }
      ],
      xiaomi: [
        { name: '小米10至尊纪念版', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90', sourcePath: 'https://www.mi.com/buy/detail?product_id=12609/', price: '5299元起' },
        { name: '小米10', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=160&h=110&f=webp&q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000214/', price: '3799元起' },
        { name: '小米10 青春版 5G', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90', sourcePath: 'https://www.mi.com/mi10youth/', price: '1999元' },
        { name: '小米MIX ALpha', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png?thumb=1&w=160&h=110&f=webp&q=90', sourcePath: 'https://www.mi.com/mixalpha/', price: '19999元' }
      ],
      redmi: [
        { name: 'Redmi Note 9系列', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/584add2c9cfdb9eefe7b642bf191773a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000267', price: '999元起' },
        { name: 'Redmi K30S 至尊纪念版', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81808cd191332114f44d8d0cb0d0813a.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/redmik30s', price: '2599元起' },
        { name: 'Redmi K30 至尊纪念版', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/31d0dc82068abcaa46464b4baa9fbbdf.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12605', price: '1999元起' },
        { name: 'Redmi K30 Pro 系列', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000233', price: '2999元起' },
        { name: 'Redmi K30 系列', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000234', price: '1399元起' },
        { name: 'Redmi 10X', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6548361871303764d6c66142074524.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/redmi10x-5G', price: '999元起' }
      ],
      tv: [
        { name: '小米电视大师 82英寸至尊纪念版', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/174a2f9256a44b98f9e08bbe30528329.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12874', price: '49999元' },
        { name: '小米电视大师 82英寸', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e513ac03d0ebb594bf42f7d6b1b44944.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12829', price: '9999元' },
        { name: '小米透明电视', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/mitv-great/hyaline', price: '49999元' },
        { name: '小米电视 大师 65英寸OLED', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea3390a20547c7298a258528e4aa69ad.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12049', price: '12999元' },
        { name: 'Redmi 智能电视 MAX 98', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/redmitv/98/', price: '19999元' },
        { name: '小米电视4A 60英寸', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=11843', price: '2399元' }
      ],
      flats: [
        { name: 'Redmi G 游戏本', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0bfdd3b985b4a9da58a1f5a861c5895f.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/redmi-g', price: '5299元起' },
        { name: 'RedmiBook 16', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e6c9a677acbb3b0c75d4d0d83e8a695.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000242', price: '4999元起' },
        { name: 'RedmiBook 14 Ⅱ', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e27b3211230c2b8c21c0ef4efcbc17bc.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000241', price: '3299元起' },
        { name: 'Pro 15.6" 2020款', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/buy?product_id=10000237', price: '5999元起' },
        { name: 'RedmiBook Air 13', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/682027c81244d5244d72990cc8b5341f.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10000253', price: '4899元起' },
        { name: '显示器', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f0f2175b9a6d4fdb0f0eeb843398044.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/monitor34', price: '2299元' }
      ],
      appliances: [
        { name: '米家互联网空调C1（一级能效）', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/airconditionc1/v1c1/', price: '2699元' },
        { name: '米家互联网空调（一级能效）', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/airenergy/', price: '2699元' },
        { name: 'Redmi全自动波轮洗衣机1A', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/buy?product_id=9509', price: '799元' },
        { name: '米家互联网洗烘一体机10kg', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/washer-dryer-10/', price: '2099元' },
        { name: '米家风冷对开门冰箱 483L', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10952', price: '2299元' },
        { name: '米家两门冰箱 160L', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40ad6e8398095e97309a5538b516a2de.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=10949', price: '899元' }
      ],
      router: [
        { name: 'Redmi路由器 AX6', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/54de949334c3d794a6ca55b76e4bb379.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12673', price: '299元' },
        { name: 'Redmi路由器 AX5', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/681a92d3e5f03a109558396c99f6a4df.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12258', price: '199元' },
        { name: '小米路由器 AX1800', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27da43294889d049a111e5ff2cdfafe7.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12027', price: '329元' },
        { name: '小米AIoT路由器AX3600', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/359d3c63cc159949d8fe147a11b4bc40.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/r3600', price: '599元' },
        { name: 'Redmi路由器AC2100', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/rm2100/', price: '159元' },
        { name: '小米路由器AC2100', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/miwifiac', price: '189元' }
      ],
      hardware: [
        { name: '小米米家智能摄像机云台版', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/camera-360/', price: '179元' },
        { name: '小米小爱老师', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/aiteacher-wifi/', price: '999元' },
        { name: '小米全自动智能门锁', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b87ae4a36beef69bb2018eb1f8bce9b.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/buy?product_id=12790', price: '1799元' },
        { name: 'Redmi小爱触屏音箱 8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dccc32d8e36685485fa89e0f2a580975.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/redmi-xai', price: '329元' },
        { name: '小米小爱触屏音箱', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&amp;w=160&amp;h=110', sourcePath: 'https://www.mi.com/aispeaker-touch/', price: '189元' },
        { name: 'Redmi小爱音箱 Play', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90', sourcePath: 'https://www.mi.com/redmiaispeaker-play', price: '79元起' }
      ],
      results: [
        { name: '王一博同款手机' },
        { name: 'Note 9 新品' },
        { name: '小米10' },
        { name: 'Redmi K30 Pro' },
        { name: '全部商品' },
        { name: '卡丁车' },
        { name: '耳机' },
        { name: '空调' }
      ]

    }
  },
  methods: {
    evtHeaderEnter (menuType) {
      if (menuType) {
        this.currentPhones = this[menuType]
      }
      this.headerStatus = true
      clearTimeout(this.tids)
    },
    evtHeaderLeave () {
      let self = this
      this.tids = setTimeout(function () {
        self.headerStatus = false
      }, 300)
    },
    evtIptFocus () {
      $('.header-search').addClass('search-active')
      $('.search-result').show()
      this.hotStatus = false
    },
    evtIptBlur () {
      $('.header-search').removeClass('search-active')
      $('.search-result').hide()
      this.hotStatus = true
    }
  }
}
</script>
<style lang="less" scoped>
.top-header {
  width: 100%;
  height: 100px;
}

.container {
  position: relative;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}

.icon-mi {
  width: 55px;
  height: 55px;
  background: url("../assets/img/icon-mi.png") no-repeat;
  background-size: 100% 100%;
}
&:hover {
  .icon-mi {
    background: url("../assets/img/icon-home.png") no-repeat;
    background-size: 100% 100%;
  }
}
.mi-twelve {
  width: 163px;
  height: 66px;
  margin-left: 10px;
  background: url("../assets/img/mi-twelve.png") no-repeat;
  background-size: 100% 100%;
}
.header-navs {
  position: relative;
}
.navs {
  height: 88px;
  line-height: 88px;
  margin: 0;
  padding: 0;
  list-style: none;
  .nav {
    display: inline-block;
    .nav-item {
      display: block;
      height: 88px;
      line-height: 88px;
      font-size: 16px;
      padding: 0 10px;
      text-decoration: none;
      color: #333;
      &:hover {
        color: #ff6700;
      }
    }
  }
}
.header-search {
  position: absolute;
  top: 23px;
  right: 0;
  width: 295px;
  height: 50px;
  border: 1px solid #e0e0e0;

  .fadeOut-transition {
    transition: all 0.3s ease;
    opacity: 1;
  }
  .fadeOut-enter,
  .fadeOut-leave {
    opacity: 0;
  }
  .search-ipt {
    float: left;
    width: 240px;
    height: 100%;
    border: 0;
    font-size: 10px;
    outline: none;
    color: #757575;
  }
  .search-btn {
    display: block;
    float: right;
    width: 50px;
    height: 100%;
    border-left: 1px solid #e0e0e0;
    cursor: pointer;
    .icon-search {
      display: block;
      width: 20px;
      height: 20px;
      margin-top: 15px;
      margin-left: 15px;
      background: url("../assets/img/icon-search.png") center center no-repeat;
      background-size: 100% 100%;
    }
    &:hover {
      background: #ff6700;
      .icon-search {
        background: url("../assets/img/icon-search-white.png") center center
          no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}

.search-active {
  border: 1px solid #ff6700;
  .search-btn {
    border-left: 1px solid #ff6700;
  }
}

.search-result {
  display: none;
  position: absolute;
  left: -1px;
  top: 50px;
  width: 244px;
  height: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ff6700;
  z-index: 11;
  background: #fff;
  li {
    padding: 7px 13px;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    cursor: pointer;
    .item-name {
      float: left;
      font-size: 12px;
    }
    .item-num {
      float: right;
      font-size: 10px;
      color: #b0b0b0;
    }
  }
}
.header-menu {
  position: absolute;
  left: 0;
  top: 140px;
  width: 100%;
  height: 230px;
  background: #fff;
  box-shadow: 0 1px 5px #ccc;
  z-index: 111;
  .menus {
    list-style: none;
    margin: 0;
    padding: 30px 0 0 10px;
    min-width: 1500px;
    .product {
      float: left;
      a {
        display: block;
        padding: 0 30px;
        border-right: 1px solid #ccc;
      }
      &:nth-last-child(1) {
        a {
          border-right: 0;
        }
      }
      .product-img {
        width: 100%;
        width: 160px;
        height: 110px;
      }
      .product-name {
        width: 100%;
        height: 16px;
        margin-top: 16px;
        font-size: 12px;
        text-align: center;
      }
      .product-price {
        width: 100%;
        height: 14px;
        margin-top: 10px;
        font-size: 10px;
        text-align: center;
        color: #ff6700;
      }
    }
  }
}
.fadein-transition {
  transition: all 0.3s ease-in;
  height: 230px;
  opacity: 1;
  overflow: hidden;
}

.fadein-enter,
.fadein-leave {
  height: 0;
  opacity: 0;
}
</style>
