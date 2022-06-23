<template>
  <div class="detail_goods_info" v-if="Object.keys(goodsInfo).length !== 0">
      <!-- {{ goodsInfo }} -->
      <div class="title">
          <!-- <div class="text_top_style"></div> -->
          <div class="desc info_text_desc">{{ goodsInfo.desc }}</div>
          <!-- <div class="text_bot_style"></div> -->
      </div>
      <div class="img_list_wrap">
        <div class="desc">{{ goodsInfo.detailImage[0].key }}</div>
        <ul class="img_list">
          <li v-for="(item, index) in goodsInfo.detailImage[0].list" :key="index">
            <img :src="item" alt=" " @load="imgLoad" class="img">
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "DetailGoodsInfo",
    props: {
        goodsInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
      imgLoad () {
        this.$emit("detail-goods-image")
      }
    }
}
</script>

<style>
.detial_goods_info {
    position: relative;
}
.text_top_style {
    width: 60px;
    height: 1px;
    background-color: #333;
    margin-left: 4px;
}
/* .text_top_style:before {
    position: absolute;
    left: 4px;
    top: -2.5px;
    display: block;
    content: "";
    width: 5px;
    height: 5px;
    background-color: #333;
} */
.text_bot_style {
  width: 60px;
  height: 1px;
  background: #333;
  position: absolute;
  right: 4px;;
  bottom: 0;
}
/* .text_bot_style:after {
  position: absolute;
  right: 0;
  top: -2.5px;
  display: block;
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
} */
.info_text_desc {
  padding: 10px 4px;
  border: dotted #ccc 1px;
}

.desc {
  font-size: 14px;
  padding-bottom: 6px;
  line-height: 20px;
  margin: 4px 0;
  text-indent: 10px;
}

.img {
  width: 100%;
}
</style>