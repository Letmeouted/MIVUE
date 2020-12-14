<template>
  <div class="home-tool-bar home-tool-bar-small mini">
    <a class="item item-image" href="">
      <div class="icon">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
          alt=""
          class="static"
        />
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
          alt=""
          class="hover"
        />
      </div>
      <span class="text"> 手机App </span>
      <div class="pop-content">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png"
          alt=""
        />
        <span class="desc"> 扫码领取新人百年礼包 </span>
      </div>
    </a>
    <a class="item">
      <div class="icon">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png"
          alt=""
          class="static"
        />
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png"
          alt=""
          class="hover"
        />
      </div>
      <span class="text"> 个人中心 </span>
    </a>
    <a class="item">
      <div class="icon">
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png"
          alt=""
          class="static"
        />
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png"
          alt=""
          class="hover"
        />
      </div>
      <span class="text"> 售后服务 </span>
    </a>
    <a class="item">
      <div class="icon">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png"
          alt=""
          class="static"
        />
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png"
          alt=""
          class="hover"
        />
      </div>
      <span class="text"> 人工客服 </span>
    </a>
    <a class="item">
      <div class="icon">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png"
          alt=""
          class="static"
        />
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png"
          alt=""
          class="hover"
        />
      </div>
      <span class="text"> 购物车 </span>
    </a>
    <a class="item backtop active" href="javascript:void(0)" onclick="window.scrollTo(0, 0)">
      <div class="icon">
        <img
          src="//i1.mifile.cn/f/i/2018/home/totop.png"
          alt=""
          class="static"
        />
        <img
          src="//i1.mifile.cn/f/i/2018/home/totop_hover.png"
          alt=""
          class="hover"
        />
      </div>
      <span class="text"> 回顶部 </span>

    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.home-tool-bar {
  position: fixed;
  z-index: 99;
  right: 0;
  left: auto;
  margin-left: 0;
  bottom: 40px;
  .item-image {
    .pop-content {
      opacity: 0;
      visibility: hidden;
      img {
          display: block;
          width: 100px;
          height: 100px;
          margin: 6px auto;
          border: 0;
        }
        .desc {
            display: block;
          width: 82px;
          margin: 14px auto 0;
          color: #757575;
          text-align: center;
        }
    }
    &:hover {
      .pop-content {
        display: block;
        visibility: visible;
        position: absolute;
        opacity: 1;
        left: 0;
        top: 0;
        padding: 14px;
        background-color: #fff;
        border: 1px solid #f5f5f5;
        transition: opacity 0.3s;
        transform: translate3d(-110%,0,0);
      }
    }
  }
  .item {
    width: 25px;
    height: 40px;
    position: relative;
    display: block;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    &:hover {
      .text {
        display: block;
        transform: translate3d(-115%, -50%, 0);
        color: #757575;
      }
    }

    .icon {
      position: relative;
      margin: 0 auto 8px;
      width: 20px;
      height: 20px;
      padding-top: 10px;
      img {
        position: absolute;
        bottom: 0;
        left: 0;
        transition: opacity 0.3s;
        border: 0;
        height: 20px;
      }
      .static {
        opacity: 1;
      }
      .hover {
        opacity: 0;
        &:hover {
          opacity: 1;
        }
      }
    }
    .text {
      color: #757575;
      transition: color 0.3s;
      display: none;
      position: absolute;
      left: 0;
      top: 50%;
      height: 28px;
      line-height: 28px;
      padding: 0 8px;
      background-color: #fff;
      border: 1px solid #f5f5f5;
      text-align: center;
      white-space: nowrap;
    }
  }
  .backtop{
      margin-top: 14px;
      border-top: 1px solid #f5f5f5;
  }
}
</style>
