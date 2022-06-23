<template>
  <div class="main-tabbar">
    <Tabbar>
      <tabbar-item path="/home">
        <img slot="imgActive" src="~assets/img/tabbar/home_active.svg" alt=" ">
        <img slot="img" src="~assets/img/tabbar/home.svg" alt=" ">
        <div slot="page">首页</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="imgActive" src="~assets/img/tabbar/shopcart_active.svg" alt=" ">
        <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt=" ">
        <div slot="page">购物车</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="imgActive" src="~assets/img/tabbar/category_active.svg" alt=" ">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt=" ">
        <div slot="page">分类</div>
      </tabbar-item>
      <tabbar-item path="/user">
        <img slot="imgActive" src="~assets/img/tabbar/profile_active.svg" alt=" ">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt=" ">
        <div slot="page">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/common/tabbar/Tabbar.vue"
import TabbarItem from "@/components/common/tabbar/TabbarItem.vue"
export default {
  name: "MainTabBar",
  data() {
    return {

    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>