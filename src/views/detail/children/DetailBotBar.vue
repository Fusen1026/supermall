<template>
  <div class="flex bot_bar_wrap">
      <div class="bot_bar_item">
        <p><img src="~assets/img/detail/icon01.png" alt=""></p>
        <p>客服</p>
      </div>
      <div class="bot_bar_item">
        <p><img src="~assets/img/detail/icon02.png" alt=""></p>
        <p>店铺</p>
      </div>
      <div class="bot_bar_item">
        <p><img src="~assets/img/detail/icon03.png" alt=""></p>
        <p>收藏</p>
      </div>
      <div class="cart" @click="cartClick">
        <p>加入购物车</p>
      </div>
      <div class="shop">
        <p>购买</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailBotBar",
  methods: {
    cartClick() {
      this.$emit("cart-click")
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}
.bot_bar_wrap {
  background-color: #fff;
  position: fixed;
  height: 49px;

  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.bot_bar_item {
  width: 16%;
  font-size: 12px;
  color: #333;
  text-align: center;
}
.bot_bar_item img {
  width: 22px;
  height: 22px;
  margin: 4px 0;
  vertical-align: middle;
}
.cart {
  width: 26%;
  background-color: #F9CD0B;
  color: #666;
  font-size: 13px;
  text-align: center;
  line-height: 49px;
}
.shop {
  width: 26%;
  background-color: var(--color-high-text);
  text-align: center;
  line-height: 49px;
  color: #fff;
  font-size: 13px;
}
</style>