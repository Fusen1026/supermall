<template>
  <div class="detail_baseInfo">
        <div class="title">
            {{goods.title}}
        </div>
        <div class="price_wrap">
            <div class="new_price">{{ goods.price }}</div>
            <div class="old_price">{{ goods.oldPrice }}</div>
            <div class="discount_desc" v-if="goods.discountDesc">{{ goods.discountDesc }}</div>
        </div>

        <div class="other_info">
            <div class="sales" v-if="goods.columns">{{ goods.columns[0] }}</div>
            <div class="collect" v-if="goods.columns">{{ goods.columns[1] }}</div>
            <div class="shop_info" v-if="goods.services">{{ goods.services[goods.services.length - 1].name }}</div>
        </div>

        <div class="service_wrap" v-if="goods.services">
            <div class="service_item"  v-for="(item, index) in (goods.services.length - 1)" :key="index">
              <img :src="goods.services[index].icon" alt="">
              {{goods.services[index].name}}
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "DetailBaseInfo",
    props: {
        goods: {
            type: Object,
            defalut() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.title {
    margin: 10px 0;
    padding: 0 4px;
    font-size: 14px;
    line-height: 20px;
}
.price_wrap {
    display: flex;
    padding: 0 4px 10px;
    
}
.new_price {
        color: var(--color--high--text)
    }
.old_price {
    color: #999;
    font-size: 12px;
    margin: 0 4px;
    text-decoration: line-through;
}

.discount_desc {
    color: #fff;
    font-size: 12px;
    border-radius: 100px;
    padding: 2px 6px;
    background-color: var(--color-high-text);
}

.other_info {
    display: flex;
    font-size: 12px;
    color: #999;
    padding: 10px 4px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
}
.other_info div {
    flex: 1;
    padding: 0 4px;
}

.other_info div:nth-child(2) {
    text-align: center;
}
.other_info div:nth-child(3) {
    text-align: right;
}

.service_wrap {
  display: flex;
  font-size: 12px;
  padding: 10px 4px;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
}

.service_wrap img {
  vertical-align: center;
  width: 12px;
  height: 12px;
}
</style>