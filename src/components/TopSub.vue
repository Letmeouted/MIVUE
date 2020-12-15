<template>
  <div class="top-sub">
    <div class="sub-1">
      <ul class="channels">
        <li class="channel">
          <a href="//www.mi.com/buy/seckill" target="_blank">
            <i class="el-icon-time sub-icon"></i>
            <p class="channel-txt">小米秒杀</p>
          </a>
        </li>
        <div class="line-vertical"></div>
        <li class="channel">
          <a href="https://qiye.mi.com/" target="_blank">
            <i class="el-icon-office-building sub-icon"></i>
            <p class="channel-txt">企业团购</p>
          </a>
        </li>
        <div class="line-vertical"></div>
        <li class="channel">
          <a href="https://www.mi.com/order/fcode" target="_blank">
            <i class="el-icon-receiving sub-icon"></i>
            <p class="channel-txt">F码通道</p>
          </a>
        </li>
        <div class="line-horizontal"></div>
        <div class="line-horizontal"></div>
        <div class="line-horizontal"></div>

        <li class="channel">
          <a href="https://www.mi.com/mimobile/" target="_blank">
            <i class="el-icon-bank-card sub-icon"></i>
            <p class="channel-txt">米粉卡</p>
          </a>
        </li>
        <div class="line-vertical"></div>

        <li class="channel">
          <a href="//www.mi.com/a/h/16769.html" target="_blank">
            <i class="el-icon-money sub-icon"></i>
            <p class="channel-txt">以旧换新</p>
          </a>
        </li>
        <div class="line-vertical"></div>

        <li class="channel">
          <a href="https://recharge.10046.mi.com/" target="_blank">
            <i class="el-icon-coin sub-icon"></i>
            <p class="channel-txt">话费充值</p>
          </a>
        </li>
      </ul>
    </div>
    <ul class="subs">
      <li>
        <a
          href="https://www.mi.com/buy/detail?product_id=10000204"
          class="sub-item"
          target="_blank"
        >
          <img class="lazyload"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5f20a62c3d5b3d6806bd51ab6c5dd12.jpg?w=632&h=340"
            alt=""
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.mi.com/buy?product_id=10000244"
          target="_blank"
          class="sub-item"
        >
          <img class="lazyload"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340"
            alt=""
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.mi.com/buy?product_id=12931"
          target="_blank"
          class="sub-item"
        >
          <img class="lazyload"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.top-sub {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 14px auto 26px;
}
.sub-1 {
  float: left;
  width: 234px;
  height: 170px;
  background: #5f5750;
}
.channels {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 3px;
  .channel {
    width: 75px;
    height: 82px;
    cursor: pointer;
    &:hover {
      .channel-txt {
        color: #fff;
      }
      .sub-icon {
        color: #fff;
      }
    }
    .channel-txt {
      display: block;
      margin: 0;
      width: 70px;
      font-size: 12px;
      text-align: center;
      text-decoration: none;
      color: #cfccca;
    }
  }
  .sub-icon {
    width: 70px;
    height: 24px;
    margin: 18px 0 5px 24px;
    font-size: 24px;
    color: #cfccca;
  }
}
.subs {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    width: 316px;
    height: 170px;
    margin-left: 15px;
  }
  .sub-item {
    display: block;
    transition: all 0.3s;
    &:hover {
        box-shadow: 0 5px 30px #ccc;
    }
    img {
      display: block;
      width: 316px;
      height: 170px;
    }
  }
}

.line-vertical {
  width: 1px;
  height: 60px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.line-horizontal {
  width: 60px;
  height: 1px;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.1);
}
</style>
