<template>
  <div>
    <nav-bar class="cart_nav">
      <div slot="center">
        购物车（{{num}}）
      </div>
      
    </nav-bar>
    
    <cart-list></cart-list>
    <cart-bot-bar></cart-bot-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

import CartList from "./children/CartList.vue"
import CartBotBar from "./children/CartBotBar.vue"
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBotBar
  },
  computed: {
    num() {
      let res =  0
      for(let item of this.$store.state.cartList) {
        res += item.count
      }
      return res
    }
  }
}
</script>

<style>
.cart_scroll {
  height: calc(100% - 44px - 49px);
}
.cart_scroll {
  height: 100%;
  overflow: hidden;
}
</style>