<template>
  <div class="cart-list-main flex">      
      <div class="cart_list_left flex">
        <CartCheckBtn :class="{'cart_item_check': cartItem.checked}" :show-check="cartItem.checked" @click.native="checkClick"/>
        <img :src="cartItem.image" alt="" class="goods_img">
      </div>
      <div class="cart_list_right">
        <div class="goods_name one_txt_cut">
          {{ cartItem.title }}
        </div>
        <div class="goods_info flex">
          <span class="price">￥{{ cartItem.price }} </span><span>x{{ cartItem.count}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import CartCheckBtn from "./CartCheckBtn"
export default {
  name: "CartListItem",
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CartCheckBtn
  },
  methods: {
    checkClick() {
      this.cartItem.checked  = !this.cartItem.checked
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}
.cart-list-main {
		padding: 10px;
		border-bottom: 1px solid #ececec;
	}
.cart_list_left {
  width: 26%;
  align-items: center;
}
/* .cart_list_left .cart_item_check {
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 100%;
  background: green;
  border: 1px solid #ececec;
} */
.cart_list_left .goods_img {
  width: 52px;
  height: 66px;
  overflow: hidden;
  border: 1px solid #ececec;
  margin: 0 10px;
  border-radius: 6px;
  vertical-align: middle;
}
.cart_list_right {
  width: 74%;
  position: relative;
}
.cart_list_right .goods_name {
  width: 100%;
  font-size: 13px;
}
.cart_list_right .goods_info {
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>