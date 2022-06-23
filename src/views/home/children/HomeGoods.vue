<template>
  <div class="home-goods">
    <goods-list>
      <goods-list-item>

      </goods-list-item>
    </goods-list>
  </div>
</template>

<script>
import GoodsList from "components/common/goods/GoodsList"
import GoodsListItem from "components/common/goods/GoodsListItem"

export default {
  name: "HomeGoods",
  components: {
    GoodsList,
    GoodsListItem
  },
  props: {
    goods: {
      
    }
  }
}
</script>

<style>

</style>