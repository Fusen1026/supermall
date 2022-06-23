<template>
  <div class="cart_list">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :cart-item="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue"
export default {
  name: "CartList",
  components: {
    CartListItem,
    scroll,
  },
  computed: {
    cartList() {
      return this.$store.state.cartList
    }
  }
}
</script>

<style>
</style>