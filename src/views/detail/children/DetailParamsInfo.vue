<template>
  <div class="detail_param_info" v-if="Object.keys(goodsParams).length !== 0">
    
    <div v-for="(item, index) in goodsParams.rule" :key="index" class="flex">
      <div v-for="(i, ind) in item" :key="ind" class="rule_list_item">
        {{ i }}
      </div>
    </div>
    <div v-for="item in goodsParams.info" :key="item.key" class="flex info_list_wrap">
      <div class="info_list_tit">{{ item.key}}</div>
      <div>{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.flex {
  display: flex;
}

.detail_param_info {
  border-top: 4px solid #ececec;
  border-bottom: 4px solid #ececec;
}

.rule_list_item {
  font-size: 12px;
  width: 20%;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
}

.info_list_wrap {
  font-size: 14px;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
  line-height: 20px;
}

.info_list_tit {
  width: 18%;
}
</style>