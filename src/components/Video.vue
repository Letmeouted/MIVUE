<template>
  <div class="video-header">
    <div class="header clearfix">
      <h2 class="title">{{ title }}</h2>
      <a href="https://www.mi.com/video/" target="_blank">
        <span class="top-sub"
          >查看全部
          <i class="fa fa-chevron-circle-right iconfont"></i>
        </span>
      </a>
    </div>
    <div class="video-content">
      <ul class="video-wrap clearfix">
        <li
          class="video-item"
          v-for="item in videos"
          @click="evtPlayVideo(item)"
          :key="item.index"
        >
          <div class="item-top">
            <img :src="item.imgUrl" alt="" />
            <span class="play">
              <i class="fa fa-play"></i>
            </span>
          </div>
          <h3 class="video-title">{{ item.title }}</h3>
          <p class="video-desc">
            {{ item.desc }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '视频',
      videos: [
        { videoUrl: 'javascript:void(0);', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&amp;w=296&amp;h=180&amp;f=webp&amp;q=90', title: 'Redmi 10X系列发布会', desc: 'Redmi 10X系列发布会' },
        { videoUrl: 'javascript:void(0);', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&amp;w=296&amp;h=180&amp;f=webp&amp;q=90', title: '小米10 青春版 发布会' },
        { videoUrl: 'javascript:void(0);', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&amp;w=296&amp;h=180&amp;f=webp&amp;q=90', title: '小米10 8K手机拍大片' },
        { videoUrl: 'javascript:void(0);', imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&amp;w=296&amp;h=180&amp;f=webp&amp;q=90', title: '小米10发布会' }
      ]
    }
  },
  methods: {
    evtPlayVideo (opts) {
      let videoOpt = {
        status: true,
        title: opts.title,
        videoUrl: opts.videoUrl
      }
      this.$dispatch('play', videoOpt)
    }
  }
}
</script>

<style lang="less" scoped>
.video-header {
  width: 1226px;
  height: auto;
  margin: 0 auto;
}
.header {
  position: relative;
  .title {
    margin: 0;
    font-size: 22px;
    display: block;
    float: left;
    font-weight: 200;
    color: #333;
    line-height: 58px;
  }
  .top-sub {
    float: right;
    display: block;
    font-size: 16px;
    line-height: 58px;
    color: #424242;
    cursor: pointer;
    .iconfont {
      color: #b0b0b0;
      font-size: 20px;
    }
    &:hover {
      color: #ff6700;
      .iconfont {
        color: #ff6700;
      }
    }
  }
}
.video-wrap {
  .video-item {
    position: relative;
    float: left;
    width: 296px;
    height: 285px;
    margin: 0 0 14px 14px;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 5px 5px 20px #ccc;
      .play {
        background: #ff6700;
      }
    }
    &:nth-child(1) {
      margin-left: 0;
    }
    img {
      width: 296px;
      height: 180px;
    }
    .video-title {
      color: #333;
      font-size: 14px;
      font-weight: normal;
      text-align: center;
    }
    .video-desc {
      height: 18px;
      margin: 0;
      font-size: 12px;
      text-align: center;
      color: #b0b0b0;
    }
  }
}
.item-top{
    position: relative;
    .play{
        position: absolute;
        display: block;
        left: 20px;
        bottom: 10px;
        width: 32px;
        height: 20px;
        line-height: 20px;
        border: 2px solid #fff;
        border-radius: 12px;
        background-color: rgba(0,0,0,.6);
        color: #fff;
        transition: all .2s;
        font-size: 12px;
        text-align: center;
        overflow: hidden;
    }
}

</style>
