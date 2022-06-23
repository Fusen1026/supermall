<template>
  <div class="cart_bot_bar flex">
    <div>
      <!-- <input type="checkbox" class="check" id="check" :is-checked="isSelectAll"> -->
      <CartCheckBtn :show-check="isSelectAll" @click.native="selectAllClick" />
      &ensp;<label for="check">全选</label>

    </div>
    <div>合计：{{ totalPrice }}</div>
    <div class="count">去结算{{ checkLength }}</div>
  </div>
</template>

<script>
import CartCheckBtn  from "./CartCheckBtn.vue"
export default {
  name: "CartBotBar",
  components: {
    CartCheckBtn
  },
  computed: {
    totalPrice() {
      return "￥" + this.$store.state.cartList.filter( item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return '(' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).length + ')'
    },
    isSelectAll() {
      if(this.$store.state.cartList.length < 1) {
        return false
      }
      return !this.$store.state.cartList.filter(item => !item.checked).length
    }
  },
  methods: {
    selectAllClick() {
      console.log("selectAllClick")
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}
.cart_bot_bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 40px;
  padding: 0 10px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
}
.check {
  width: 18px;
  height: 18px;
  overflow: hidden;
  border-radius: 100%;
  vertical-align: bottom;
  border: 1px solid #ececec;
}
.check:checked {
  border: 1px solid var(--color-high-text);
  background: #000;
  background-size: cover;
}
</style>