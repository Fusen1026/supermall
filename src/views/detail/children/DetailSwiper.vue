<template>
  <div class="detail-swiper">
      <swiper class="detail_swiper">
          <swiper-item v-for="(item,index) in topBanner" :key="index">
              <img :src="item" alt=" ">
              <p>{{ index }}</p>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
    name: "DetailSwiper",
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
        topBanner: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style>
.detail_swiper {
    height: 300px;
    overflow: hidden;
}
</style>