<template>
  <div class="top-banner">
    <div class="site-category" @mouseleave="evtSideLeave">
      <div class="top-side-left">
        <ul class="side-left">
          <li
            class="side-item"
            @mouseenter="evtSideEnter(item.type)"
            v-for="item in sideItems"
            :key="item.index"
          >
            <a :href="item.sourceUrl" target="_blank">{{ item.content }}</a>
            <i class="el-icon-arrow-right" style="font-size: 16px"></i>
          </li>
        </ul>
      </div>
      <div class="site-category-detail" v-show="goodsStatus">
        <ul
          class="category-items"
          v-for="goods in filterCurrGoods"
          :key="goods.index"
        >
          <li class="category-goods" v-for="item in goods" :key="item.index">
            <a class="goods-link" :href="item.sourceUrl" target="_blank">
              <img v-lazy="item.imgUrl" alt="" width="40" height="40" />
              <div class="text-name">
                {{ item.name }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <slide :banners="banners"></slide>
  </div>
</template>
<script>
import slide from './slide/Slide.vue'
export default {
  data () {
    return {
      currGoods: [],
      goodsStatus: false,
      banners: [
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d00e132d1b4fd7a796b35bcfe54bc2c8.jpg?w=2452&amp;h=920', sourceUrl: 'https://www.mi.com/redminote9' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/08a5456c0ae545e551ef0d36ddc9cf60.jpg?thumb=1&amp;w=1226', sourceUrl: 'https://www.mi.com/redminote9-4g' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aea5db5f69f794cdb20f3a382d868bbb.jpg?thumb=1&amp;w=1226&amp;h=460&amp;f=webp&amp;q=90', sourceUrl: 'https://www.mi.com/a/h/18439.html' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&amp;w=1226&amp;h=460&amp;f=webp&amp;q=90', sourceUrl: '//www.mi.com/a/h/17671.html' },
        { imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d01b4f4d20d1c909454b296f34143004.jpg?thumb=1&amp;w=1226&amp;h=460&amp;f=webp&amp;q=90', sourceUrl: '//www.mi.com/a/h/18444.html' }
      ],
      sideItems: [
        { type: 'phones', content: '手机 电话卡', sourceUrl: '//www.mi.com/p/1915.html' },
        { type: 'box', content: '电视 盒子', sourceUrl: '//www.mi.com/a/h/9819.html' },
        { type: 'computer', content: '笔记本 显示器', sourceUrl: '//www.mi.com/a/h/7529.html' },
        { type: 'appliances', content: '家电 插线板', sourceUrl: '//www.mi.com/p/9285.html' },
        { type: 'trip', content: '出行 穿戴', sourceUrl: '//www.mi.com/p/9289.html' },
        { type: 'router', content: '智能 路由器', sourceUrl: '//www.mi.com/a/h/8363.html' },
        { type: 'power', content: '电源 配件', sourceUrl: '//www.mi.com/p/9290.html' },
        { type: 'children', content: '健康 儿童', sourceUrl: '//www.mi.com/p/9291.html"' },
        { type: 'earphone', content: '耳机 音响', sourceUrl: '//www.mi.com/p/9292.html' },
        { type: 'bags', content: '生活 箱包', sourceUrl: '//www.mi.com/p/9293.html' }
      ],
      phones: [
        { sourceUrl: 'https://www.mi.com/buy/detail?product_id=12609', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png?thumb=1&w=40&h=40&f=webp&q=90', name: '小米10 至尊纪念版' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000214', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米10' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000224', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米10 青春版' },
        { sourceUrl: 'https://www.mi.com/redmik30s', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi K30S 至尊纪念版' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12605', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi K30 至尊纪念版' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=8262', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米云服务' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000220', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi K30 Pro 变焦版' },
        { sourceUrl: 'https://www.mi.com/buy/detail?product_id=10000204', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a98170e97ca5df8f5ad2470a8a2d01e.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi K30 5G' },
        { sourceUrl: 'https://www.mi.com/buy/detail?product_id=10000203', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi K30 4G' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000245', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/22419dee5ddfa9f4a91782231d07e189.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 10X Pro' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000244', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f774ef8332f2204a7c8fbf1b92f29e8a.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 10X 5G' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000229', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 10X 4G' },
        { sourceUrl: 'https://www.mi.com/redminote9pro', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi Note 9 Pro' },
        { sourceUrl: 'https://www.mi.com/redminote9', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi Note 9 5G' },
        { sourceUrl: 'https://www.mi.com/redminote9-4g', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi Note 9 4G' },
        { sourceUrl: 'http://www.mi.com/redminote8pro', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi Note 8 Pro' },
        { sourceUrl: 'http://www.mi.com/redminote8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4534b9fd22f478314f3cbbf286b7338.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi Note 8' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=7532', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png?thumb=1&amp;w=40&amp;h=40', name: '手机上门维修' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000239', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 9' },
        { sourceUrl: 'https://www.mi.com/buy/detail?product_id=12511', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 9A' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000190', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 8' },
        { sourceUrl: 'https://www.mi.com/redmi8a', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 8A' },
        { sourceUrl: 'https://www.mi.com/search?keyword=%E8%85%BE%E8%AE%AF%E9%BB%91%E9%B2%A8%E6%B8%B8%E6%88%8F%E6%89%8B%E6%9C%BA', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '腾讯黑鲨游戏手机' },
        { sourceUrl: 'https://www.mi.com/a/h/15804.html', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4d8753c35974699754af66388fc03a16.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '中国电信' }
      ],

      box: [
        { sourceUrl: 'https://www.mi.com/mitv-great/hyaline', imgUrl: 'https:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/37576cef378ef2805c20b9ab2a9d6d3d.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米透明电视' },
        { sourceUrl: 'https://www.mi.com/mitv5pro/55', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视5 Pro 55英寸' },
        { sourceUrl: 'https://www.mi.com/mitv5/65/', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视5 65英寸' },
        { sourceUrl: '//www.mi.com/search?keyword=Redmi%20%E6%99%BA%E8%83%BD%E7%94%B5%E8%A7%86A', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/93b55d27cd6e2100c25611eb828396ae.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 智能电视 A系列' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%87%8F%E5%AD%90%E7%82%B9%E7%94%B5%E8%A7%86', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '量子点电视' },
        { sourceUrl: '//www.mi.com/search?keyword=Redmi%20%E6%99%BA%E8%83%BD%E7%94%B5%E8%A7%86%20X', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 智能电视 X系列' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%E5%A4%A7%E5%B8%88%2082%E8%8B%B1%E5%AF%B8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8f12c8d20878e88b66047ef32566e48.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视大师 82英寸' },
        { sourceUrl: 'https://www.mi.com/mitv5pro/65', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视5 Pro 65英寸' },
        { sourceUrl: 'https://www.mi.com/mitv5/55/', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视5 55英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12045', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/319700f48d268f522664e1fc876b0044.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米全面屏电视E43K' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86Pro', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d219d8b9c4a74eda4ae6c0222d194cd2.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '金属全面屏电视' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E7%9B%92%E5%AD%90', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米盒子' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12049', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '大师电视 65英寸 OLED' },
        { sourceUrl: 'https://www.mi.com/mitv5pro/75', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视5 Pro 75英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11843', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df560d16cc983b0f34d24fc484bd697.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视4A 60英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12158', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 智能电视 X55' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米全面屏电视' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%94%B5%E8%A7%86%E9%9F%B3%E7%AE%B1', imgUrl: 'https:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/381acfeddeebcce4720ea7b8e481252f.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '电视音箱' },
        { sourceUrl: 'https://www.mi.com/redmitv/98/', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi 智能电视 MAX 98' },
        { sourceUrl: 'https://www.mi.com/mitv5/75/', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视5 75英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10764', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6797917392e912577135d9eb8ad92f1f.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视4A 70英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=8993', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cb5791161d8b25897f60385f0ec7ab2.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米电视4S 75英寸' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%A3%81%E7%94%BB%E7%94%B5%E8%A7%86', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米壁画电视' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fa264c15d3829e6de4283a552651e22.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '激光投影电视' }

      ],
      computer: [
        { sourceUrl: 'https://www.mi.com/redmi-g', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi G 游戏本' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000253', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'RedmiBook Air 13' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000242', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dae66d0f978b04b539aef092aee50f2f.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'RedmiBook 16' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000241', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e00ef74cd7162b290f0395c09d220719.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'RedmiBook 14' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000237', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米笔记本Pro 15.6' },
        { sourceUrl: 'https://www.mi.com/redmibook/13/', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'RedmiBook 13' },
        { sourceUrl: 'http://www.mi.com/mibook/air13-2019', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f95bb7c9206951e3d870cb5581b8329.png?thumb=1&amp;w=40&amp;h=40', name: '小米笔记本 Air 13.3' },
        { sourceUrl: 'http://www.mi.com/mibook/air12-2019', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eaab0db21859e0e58cae1fb807907905.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米笔记本 Air 12.5' },
        { sourceUrl: 'https://www.mi.com/milaptop/gaming-2019/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a66c24ee8ae2efea3ae92ec455a27352.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米游戏本' },
        { sourceUrl: 'https://www.mi.com/monitor34', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b32e4db4b53b0c56c6040f094e96d945.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米显示器34英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12290', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/63c3bb39be1ade99a6ebe02e39c4288f.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=9', name: '小米显示器27英寸' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=12165', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4500e99fb7e7b8630d5d6741de3fb846.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi显示器23.8英寸' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%94%AE%E7%9B%98', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '键鼠套装' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%BC%A0%E6%A0%87', imgUrl: 'https:////cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png?thumb=1&amp;w=40&amp;h=40', name: '鼠标' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%BD%AC%E6%8E%A5%E5%99%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e18c5807226399f5b24b340241fe8cc1.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '转接器' }
      ],
      appliances: [
        { sourceUrl: '//www.mi.com/search?keyword=%E5%86%B0%E7%AE%B1', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '冰箱' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png?thumb=1&amp;w=40&amp;h=40', name: '立式空调' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&amp;w=40&amp;h=40', name: '壁挂空调' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&amp;w=40&amp;h=40', name: '滚筒洗衣机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg?thumb=1&amp;w=40&amp;h=40', name: 'Redmi全自动波轮洗衣机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%87%80%E6%B0%B4%E5%99%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&amp;w=40&amp;h=40', name: '净水器' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10330', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '微波炉' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9866', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '电烤箱' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&amp;w=40&amp;h=40', name: '扫地机器人' },
        { sourceUrl: 'https://www.mi.com/vacuum-cleaner/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&amp;w=40&amp;h=40', name: '吸尘器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&amp;w=40&amp;h=40', name: '空气净化器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&amp;w=40&amp;h=40', name: '电饭煲' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%94%B5%E7%A3%81%E7%82%89', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&amp;w=40&amp;h=40', name: '电磁炉' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%94%B5%E6%B0%B4%E5%A3%B6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&amp;w=40&amp;h=40', name: '电水壶' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%BB%A4%E6%B0%B4%E5%A3%B6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg?thumb=1&amp;w=40&amp;h=40', name: '滤水壶' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&amp;w=40&amp;h=40', name: '落地风扇' },
        { sourceUrl: 'https://www.mi.com/projection-youth/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&amp;w=40&amp;h=40', name: '投影仪' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%81%AF%E5%85%B7', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&amp;w=40&amp;h=40', name: '灯具' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%8F%92%E6%8E%92', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg?thumb=1&amp;w=40&amp;h=40', name: '插线板' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%96%B0%E9%A3%8E%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg?thumb=1&amp;w=40&amp;h=40', name: '新风机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%94%B5%E6%9A%96%E5%99%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&amp;w=40&amp;h=40', name: '电暖器' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9270', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg?thumb=1&amp;w=40&amp;h=40', name: '电压力锅' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%96%99%E7%90%86%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg?thumb=1&amp;w=40&amp;h=40', name: '料理机' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9529', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b7de8a5bc64975df73f5fde5507fc8d1.jpg?thumb=1&amp;w=40&amp;h=40', name: '电煮壶' }
      ],
      trip: [
        { sourceUrl: 'https://www.mi.com/redmi-watch-mulan', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69bd883c1fc06ce41ff0fa1423b77e4e.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: 'Redmi 手表' },
        { sourceUrl: 'https://www.mi.com/shouhuan5/nfc', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e8c85f251ed8b5cd54651c4be13bc68.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '手环5NFC' },
        { sourceUrl: 'https://www.mi.com/shouhuan5', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18f75b53afbe8ce2e858cb5622d60613.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '手环5' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%89%8B%E8%A1%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '小米手表' },
        { sourceUrl: '//www.mi.com/search?keyword=vr', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg?thumb=1&amp;w=40&amp;h=40', name: 'VR' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&amp;w=40&amp;h=40', name: '平衡车' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=11368', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '自行车' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%BB%91%E6%9D%BF%E8%BD%A6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&amp;w=40&amp;h=40', name: '滑板车' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=5942', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '车载充电器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B9%B3%E8%A1%A1%E8%BD%A6%E9%85%8D%E4%BB%B6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ac5b263aac2ffa1894fb7b215c3ce87.jpg?thumb=1&amp;w=40&amp;h=40', name: '平衡车配件' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%90%8E%E8%A7%86%E9%95%9C', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg?thumb=1&amp;w=40&amp;h=40', name: '智能后视镜' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%AE%B0%E5%BD%95%E4%BB%AA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg?thumb=1&amp;w=40&amp;h=40', name: '智能记录仪' },
        { sourceUrl: 'https://www.mi.com/wireless-car-charger/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg?thumb=1&amp;w=40&amp;h=40', name: '无线车充' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9613', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b398bad185dddb5397f2c0d9a3f6271.jpg?thumb=1&amp;w=40&amp;h=40', name: '充气宝' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%9F%B3%E8%8B%B1%E8%A1%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '石英表' }
      ],
      router: [
        { sourceUrl: '//www.mi.com/search?keyword=%E6%89%93%E5%8D%B0%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&amp;w=40&amp;h=40', name: '打印机' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10780', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '喷墨打印机' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10779', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '喷墨打印机墨水' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '小米路由器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '智能家庭' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%AF%B9%E8%AE%B2%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&amp;w=40&amp;h=40', name: '对讲机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%91%84%E5%83%8F%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&amp;w=40&amp;h=40', name: '摄像机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%85%A7%E7%9B%B8%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81d89cfdb72d0445ed4ef19942d9dedb.jpg?thumb=1&amp;w=40&amp;h=40', name: '照相机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&amp;w=40&amp;h=40', name: '智能门锁' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%97%A8%E9%93%83', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/feaab5bd13257dbe8f30b80b6a4472be.jpg?thumb=1&amp;w=40&amp;h=40', name: '视频门铃' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png?thumb=1&amp;w=40&amp;h=40', name: '小爱老师' },
        { sourceUrl: '//www.mi.com/search?keyword=Redmi%E8%B7%AF%E7%94%B1%E5%99%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51eacc66512a31713808a60b5695ae28.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi路由器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&amp;w=40&amp;h=40', name: '小爱音箱' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10000197', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '云服务空间年卡' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=8262', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '云服务空间月卡' }

      ],
      power: [
        { sourceUrl: '//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%AE%9D', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '移动电源' },
        { sourceUrl: '//www.mi.com/search?keyword=usb%E6%95%B0%E6%8D%AE%E7%BA%BF', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&amp;w=40&amp;h=40', name: '数据线' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg?thumb=1&amp;w=40&amp;h=40', name: '车充' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%85%85%E7%94%B5%E5%99%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '充电器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%BD%A9%E8%99%B9%E7%94%B5%E6%B1%A0', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&amp;w=40&amp;h=40', name: '电池' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%87%AA%E6%8B%8D%E6%9D%86', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&amp;w=40&amp;h=40', name: '自拍杆' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E5%A3%B3', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&amp;w=40&amp;h=40', name: '手机壳' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA%E8%B4%B4%E8%86%9C', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&amp;w=40&amp;h=40', name: '手机贴膜' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '无线充电器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg?thumb=1&amp;w=40&amp;h=40', name: '平板配件' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg?thumb=1&amp;w=40&amp;h=40', name: '黑鲨配件' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&amp;w=40&amp;h=40', name: '其他配件' }

      ],
      children: [
        { sourceUrl: 'https://www.mi.com/dispenser/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&amp;w=40&amp;h=40', name: '洗手机' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10974', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '修剪器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%89%83%E9%A1%BB%E5%88%80', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&amp;w=40&amp;h=40', name: '剃须刀' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%89%99%E5%88%B7', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&amp;w=40&amp;h=40', name: '牙刷' },
        { sourceUrl: 'https://www.mi.com/hair-dryer/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&amp;w=40&amp;h=40', name: '吹风机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E4%BD%93%E9%87%8D%E7%A7%A4', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&amp;w=40&amp;h=40', name: '体重秤' },
        { sourceUrl: '//www.mi.com/search?keyword=%E4%BD%93%E8%84%82%E7%A7%A4', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&amp;w=40&amp;h=40', name: '体脂秤' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg?thumb=1&amp;w=40&amp;h=40', name: '早教启智' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E9%81%A5%E6%8E%A7', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab36232a1004421e1a5b3efd0b9226c0.jpg?thumb=1&amp;w=40&amp;h=40', name: '遥控电动' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9a5feb1f6c9b9aa0dc998c17e5eb3e9.jpg?thumb=1&amp;w=40&amp;h=40', name: '益智积木' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&amp;w=40&amp;h=40', name: '儿童手表' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&amp;w=40&amp;h=40', name: '儿童滑板车' },
        { sourceUrl: 'https://www.mi.com/babyfoldingcar/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&amp;w=40&amp;h=40', name: '婴儿推车' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9186', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d55c8943ceac7cd5ac7d8aa052f69b93.jpg?thumb=1&amp;w=40&amp;h=40', name: '儿童书包' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9315', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17d625c8b5466b9527e9c06c71601939.jpg?thumb=1&amp;w=40&amp;h=40', name: '婴儿理发器' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10878', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bf92a8a492f692a81794f52fefd1a29.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '健身车' },
        { sourceUrl: 'https://www.mi.com/treadmill/?cfrom=search', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&amp;w=40&amp;h=40', name: '走步机' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=9834', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ccdce424f41806f775693748058fa2ca.jpg?thumb=1&amp;w=40&amp;h=40', name: '点读笔' }

      ],
      earphone: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=13032', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/71d2ba249ae5d3f2d4517ddf9c0f881a.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小爱音箱 Art 电池版' },
        { sourceUrl: 'https://www.mi.com/aispeaker-pro8', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/146ad5dbbe9721c031aa168d4bf580ec.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小爱触屏音箱Pro 8' },
        { sourceUrl: 'https://www.mi.com/redmi-xai', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi小爱触屏音箱 8' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10745', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小爱音箱 Pro ' },
        { sourceUrl: 'https://www.mi.com/buy?product_id=10744', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '小米小爱音箱' },
        { sourceUrl: 'https://www.mi.com/aispeaker-touch/?cfrom=search', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米小爱触屏音箱' },
        { sourceUrl: 'https://www.mi.com/redmiaispeaker-play', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: 'Redmi音箱' },
        { sourceUrl: 'https://www.mi.com/aispeaker-play', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米小爱音箱 Play' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg?thumb=1&amp;w=40&amp;h=40', name: '线控耳机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0329a34385235c41ec1807cf1cd86b75.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '蓝牙耳机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg?thumb=1&amp;w=40&amp;h=40', name: '头戴耳机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg?thumb=1&amp;w=40&amp;h=40', name: '品牌耳机' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e8b89fb3702dc7c41248898f2b86f6d.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90', name: '蓝牙音箱' },
        { sourceUrl: 'https://www.mi.com/aispeaker/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米AI音箱' },
        { sourceUrl: 'https://www.mi.com/aispeaker-hd/', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg?thumb=1&amp;w=40&amp;h=40', name: '小米小爱音箱HD' },
        { sourceUrl: '//www.mi.com/search?keyword=k%E6%AD%8C%E8%80%B3%E6%9C%BA', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a290d924c1bbd1e3ce64e96f497d4059.jpg?thumb=1&amp;w=40&amp;h=40', name: 'k歌耳机' }

      ],
      bags: [
        { sourceUrl: 'https://www.mi.com/buy?product_id=11674', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '小背包' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%8F%8C%E8%82%A9%E5%8C%85', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&amp;w=40&amp;h=40', name: '双肩包' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%83%B8%E5%8C%85', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '胸包' },
        { sourceUrl: '/www.mi.com/search?keyword=%E6%97%85%E8%A1%8C%E7%AE%B1', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '旅行箱' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%BF%90%E5%8A%A8%E9%9E%8B', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&amp;w=40&amp;h=40', name: '运动鞋' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%9C%BC%E9%95%9C', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&amp;w=40&amp;h=40', name: '眼镜' },
        { sourceUrl: '//www.mi.com/search?keyword=%E5%BA%8A%E5%9E%AB', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&amp;w=40&amp;h=40', name: '床垫' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%9E%95%E5%A4%B4', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&amp;w=40&amp;h=40', name: '枕头' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%A5%B0%E5%93%81', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e9bc4f84825f80ce520eefa4f762939.jpg?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '饰品' },
        { sourceUrl: '//www.mi.com/search?keyword=%E8%9E%BA%E4%B8%9D%E5%88%80', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&amp;w=40&amp;h=40', name: '螺丝刀' },
        { sourceUrl: '//www.mi.com/search?keyword=%E4%BF%9D%E6%B8%A9%E6%9D%AF', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&amp;w=40&amp;h=40', name: '保温杯' },
        { sourceUrl: '//www.mi.com/search?keyword=%E9%A9%B1%E8%9A%8A%E5%99%A8', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&amp;w=40&amp;h=40', name: '驱蚊器' },
        { sourceUrl: '//www.mi.com/search?keyword=%E6%AF%9B%E5%B7%BE', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&amp;w=40&amp;h=40', name: '毛巾/浴巾' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%B1%B3%E5%85%94', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ac95ad25bb8f6391abcb937b03c1743.png?thumb=1&amp;w=40&amp;h=40&amp;f=webp&amp;q=90"', name: '米兔' },
        { sourceUrl: '//www.mi.com/search?keyword=%E7%AC%94', imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&amp;w=40&amp;h=40', name: '笔' }

      ]

    }
  },
  computed: {
    filterCurrGoods: function () {
      let filterGoods = [[], [], [], [], []]
      this.currGoods.forEach(function (item, index) {
        let goodsIndex = Math.floor(index / 6)
        filterGoods[goodsIndex].push(item)
      })
      return filterGoods
    }
  },
  methods: {
    evtSideEnter (currType) {
      this.currGoods = this[currType]
      this.goodsStatus = true
    },
    evtSideLeave () {
      this.goodsStatus = false
    }
  },
  components: {
    slide
  }
}
</script>
<style lang="less" scoped>
.top-banner {
  position: relative;
  width: 1222px;
  height: auto;
  margin: 0 auto;
}
.site-category {
  position: absolute;
  left: 0;
  top: 0;
  width: 235px;
  height: auto;
  padding: 20px 0;
  background:rgba(0, 0, 0, 0.28);
  z-index: 10;
}
.side-left {
  margin: 0;
  padding: 0;
  width: 235px;
  height: 420px;
  list-style: none;
  .side-item {
    position: relative;
    display: block;
    width: 87%;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #fff;
    padding-left: 30px;
    cursor: pointer;
    a {
      color: #fff;
    }
    .el-icon-arrow-right {
      position: relative;
      float: right;
      padding-right: 30px;
      line-height: 42px;
      color: #dedede;
      font-weight: bold;
    }
    &:hover {
      background: #ff6700;
    }
  }
}
.site-category-detail {
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  left: 235px;
  top: 0;
  z-index: 10;
  border: 1px solid #e0e0e0;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.18);
  .category-items {
    width: auto;
    height: 460px;
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fff;
  }
  .category-goods {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 265px;
    height: 76.6px;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    background: #fff;
    cursor: pointer;
    .goods-link {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      width: 170px;
    }
    .text-name {
      padding-left: 10px;
      font-size: 14px;
    }
    .goods-buy-link {
      display: block;
      width: 58px;
      height: 22px;
      line-height: 24px;
      font-size: 12px;
      text-align: center;
      color: #ff6700;
      border: 1px solid #ff6700;
      &:hover {
        color: #fff;
        background: #ff6700;
      }
    }
  }
}
</style>
