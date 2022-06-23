<template>
  <div id="home" class="wrapper">
      <HomeNavBar class="home-nav"/>
      <TabControl :titles="['流行', '新款', '精选']" 
        class="tab-control" 
        ref="tabControl1"
        @tab-control="tabClick" 
        v-show="isShowTabControl"
      />
      <scroll class="content" 
        :probeType="3" 
        :pullUpLoad="true" 
        @pulling-up="loadMore" 
        @scroll="contentScroll"
        ref="scroll">
        <HomeSwiper :banner="banner" @swiper-img-load="swiperImgLoad" />
        <HomeRecommend :recommend="recommend" />
        <HomeFeature />
        <TabControl :titles="['流行', '新款', '精选']" class="tab-control" @tab-control="tabClick" ref="tabControl2" />
        <GoodsList :goods="showGoods" />
      </scroll>
      <BackTop @click.native="backTopClick" v-show="isBackTopShow"/>
  </div>
</template>

<script>
import HomeNavBar from "./children/HomeNavBar"
import HomeSwiper from "./children/HomeSwiper"
import HomeRecommend from "./children/HomeRecommend"
import HomeFeature from "./children/HomeFeature.vue"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home"

export default {
  name: "Home",
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
    
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        "pop": { page: 0, list: [] },
        "new": { page: 0, list: [] },
        "sell": { page: 0, list: [] }
      },
      currentType: "pop",
      isBackTopShow: false,
      isShowTabControl: false,
      offsetTop: 0,
      saveY: 0,
      imgLoadHandler: null,

    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  activated() {
    // console.log("activated")
    // console.log("this.saveY", this.saveY)
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // 储存y值
    // console.log("deactivated")
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log("this.saveY", this.saveY)
    
    this.$bus.$off("itemImgLoad", this.imgLoadHandler)
  },
  destroyed() {
    // console.log("destoryed")
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100)
    this.imgLoadHandler = () => { refresh() }
    this.$bus.$on("itemImgLoad", this.imgLoadHandler)
  },
  computed: {
    showGoods() {
      // console.log("this.currentType", this.currentType)
      return this.goods[this.currentType].list
    }
  },
  methods: {
    debounce(func, delay) {
      var timer = null ;
      return function(){
        var context = this;
        //在函数执行的时候先清除timer定时器;
        clearTimeout(timer);
        timer = setTimeout(function(){
            func.call(context);
        }, delay);
      }
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
      // console.log(this.goods[type], this.goods[type].list)
    },
    tabClick(item) {
      switch(item) {
        case 0:
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = "new"
          break;
        case 2:
          this.currentType = "sell"
          break;
      }
      this.$refs.tabControl1.currentIndex = item;
      this.$refs.tabControl2.currentIndex = item;
    },
    contentScroll(pos) {
      this.isBackTopShow =  (-pos.y) > 1000
      this.isShowTabControl = (-pos.y) > this.offsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    swiperImgLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log("this.offsetTop", this.offsetTop)
    }
  }
}
</script>

<style scoped>
#home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>