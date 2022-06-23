<template>
  <div id="detail-nav-bar">
    <nav-bar class="detail-nav">
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item, index) in titles" :key="index" 
          class="title_item" 
          :class="{active: currentIndex === index}"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>  
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐" ],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit("title-click", index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style>
  .detail-nav {
    background-color: #fff;
  }
  .titles {
    display: flex;
    font-size: 12px;
  }
  
  .title_item {
    flex: 1;
  }

  .left img {
    margin-top: 14px;
    width: 12px;
    height: 12px;
  }
  
  .active {
    color: var(--color-high-text);
  }
</style>