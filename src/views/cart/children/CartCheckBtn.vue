<template>
<div class="cart_btn" :class="{'btn_check': showCheck}">
	<img src="~assets/img/cart/check_active.png" class="check_img" alt="" :style="showImg">
</div>
</template>

<script>
export default {
	name: "CartCheckBtn",
	props: {
		showCheck: {
			type: Boolean,
			default() {
				return true
			}
		}
	},
  computed: {
    showImg() {
    return {
      "opacity": this.showCheck ? 1 : 0
    }
  }
  }
}
</script>

<style scoped>
.cart_btn {
  width: 20px;
  height: 20px;
	border-radius: 50%;
	overflow: hidden;
  border: 2px solid #aaa;
}
.check_img {
	width: 20px;
	height: 20px;
	border-radius: 100%;
	overflow: hidden;
  transform: translate(-2px, -2px);
	border: 1px solid #ececec;
}
.btn_check {
  border-color: red;
  background-color: red;
}



</style>