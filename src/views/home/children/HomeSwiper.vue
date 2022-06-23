<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a href="https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119">
          <img :src="item.image" alt=" " @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
    }
  },
  components: { 
    Swiper,
    SwiperItem
    },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.$emit("swiper-img-load")
        this.isLoad = true
      }
    }
  }
}
</script>

<style>

</style>