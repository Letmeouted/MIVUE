<template>
  <div class="goods-right">
    <ul class="goods-right-content">
    <div v-for="(goods, index) in currGoods" :key="goods.index">
        <template v-if="index < currGoods.length - 1">
          <li class="goods-right-item">
            <a :href="goods.sourceUrl" target="_blank">
              <img :src="goods.imgUrl" alt="" />
              <h3 class="goods-title">{{ goods.title }}</h3>
            </a>
            <p class="goods-desc">
              {{ goods.desc }}
            </p>
            <p class="goods-price">
              {{ goods.price }}元
              <span v-if="goods.discountType === 'discount'" class="old-price">
                {{ goods.oldprice }}元
              </span>
            </p>
          </li>
        </template>
        </div>
      <ul class="goods-right-small">
        <template v-if="lastGoods">
          <li class="item-small">
            <a :href="lastGoods.sourceUrl" target="_blank">
              <div class="desc">
                <h3 class="lastgoods-title">
                  {{ lastGoods.title }}
                </h3>
                <span class="price"> {{ lastGoods.price }}元 </span>
              </div>
              <img class="small-img" :src="lastGoods.imgUrl" alt="" />
            </a>
          </li>
          <li class="item-small read-more">
            <a :href="lastGoods.moreUrl" target="_blank">
              <div class="desc">
                <h3 class="title">浏览更多</h3>
                <span class="hot"> 热门</span>
              </div>
              <i class="fa fa-arrow-circle-right fa-4x icon-arrow"></i>
            </a>
          </li>
        </template>
      </ul>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      index: ''
    }
  },
  props: {
    currGoods: {
      required: true,
      type: Array
    }
  },
  computed: {
    lastGoods: function () {
      if (this.currGoods && this.currGoods.length > 0) {
        return this.currGoods[this.currGoods.length - 1]
      } else {
        return null
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods-right {
  float: left;
  width: 992px;
  height: 628px;
  .goods-right-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
}

.goods-right-item {
  position: relative;
  margin: 0 0 14px 14px;
  padding: 20px 0;
  width: 234px;
  height: 260px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 5px 5px 20px #ccc;
    .review {
      height: 76px;
      opacity: 1;
    }
  }
  .old-price {
    color: #b0b0b0;
    text-decoration: line-through;
  }
  img {
    display: block;
    width: 160px;
    height: 160px;
    margin: 0 auto;
  }
  .goods-title {
    font-size: 14px;
    text-align: center;
    color: #333;
    font-weight: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .goods-desc {
    margin: 0 10px 10px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #b0b0b0;
  }
  .goods-price {
    color: #ff6700;
    font-size: 14px;
    text-align: center;
  }
  .goods-rank {
    margin: 0 10px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #b0b0b0;
  }
}

.goods-right-small {
  width: 234px;
  height: 260px;
  .item-small {
    width: 234px;
    height: 143px;
    margin: 0 0 14px 14px;
    padding: 30px 0 0 30px;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
    box-sizing: border-box;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 5px 5px 20px #ccc;
    }
    .desc {
      float: left;
      width: 80px;
      height: 100%;
      margin-right: 20px;
      .title {
        font-size: 18px;
        text-align: center;
        color: #333;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .lastgoods-title{
        width:94px;
        font-size:14px;
        text-align: center;
        color: #333;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

      }
      .price {
        display: block;
        width: 100%;
        color: #ff6700;
        font-size: 14px;
        text-align: center;
      }
      .hot{
        display: block;
        width: 100%;
        color: #757575;
        font-size: 14px;
        text-align: center;

      }
    }
    .small-img {
      float: left;
      width: 80px;
      height: 80px;
    }
  }
  .icon-arrow {
    margin-top: 5px;
    color: #ff6700;
  }
}
</style>
