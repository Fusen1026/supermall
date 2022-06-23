<template>
  <div id="shop_info">
    <div class="shop_info_title">
      <img :src="shopInfo.shopLogo" alt="">
      <div>{{ shopInfo.name }}</div>
    </div>
    <div class="product_info">
      <div class="sell">
        <div class="sells">
          <p>{{ shopInfo.cSells > 10000 ? ((shopInfo.cSells / 10000).toFixed(1)  + "万") : shopInfo.cSells }}</p>
          <p>总销量</p>
        </div>
        <div class="goods">
          <p>{{ shopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="desc">
        <div class="desc_item" v-for="(item, index) in shopInfo.score" :key="index">
          {{ item.name }}&ensp; 
          <span :class="scoreClass(item.isBetter)">{{ item.score }}</span>
          <span :class="scoreBgClass(item.isBetter)">{{ item.isBetter ? "高" : "低" }}</span>
        </div>
      </div>
    </div>
    <div class="enter_shop_wrap">
      <div class="enter_shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    scoreClass(isBetter) {
      return isBetter ? 'score_active' : 'score'
    },
    scoreBgClass(isBetter) {
      return isBetter ? 'score_bg_active' : 'score_bg'
    }
  }
}
</script>

<style>
.shop_info_title {
  display: flex;
  align-items: center;
  margin: 20px 10px;
}
.shop_info_title img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  vertical-align: middle;
  border-radius: 100%;
}
.shop_info_title div {
  font-size: 16px;
}
.product_info {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 22px;
}
.product_info div {
  flex: 1;
}
.sell {
  display: flex;
  color: #666666;
  border-right: 1px solid #ececec;
}
.sell div {
  flex: 1;
  text-align: center;
}
.desc {
  padding-left: 40px;
  
}
.desc .score {
  display: inline-block;
  width: 30px;
  color: #066;
}
.desc .score_active{
  display: inline-block;
  width: 30px;
  color:#800;
 
}

.score_bg {
  background: #066;
  color: #fff;
  padding: 1px 4px;
  font-size: 12px;
}
.score_bg_active{
  background: #066;
  color: #fff;
  padding: 1px 4px;
  font-size: 12px;
  background: #800;
}
.enter_shop_wrap {
  text-align: center;
}
.enter_shop {
  display: inline-block;
  background-color: #f2f2f2;
  font-size: 12px;
  padding: 6px 30px;
  border-radius: 100px;
  margin: 10px;
}
</style>