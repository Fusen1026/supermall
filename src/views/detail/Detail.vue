<template>
  <div id="detail">
    <DetailNavBar ref="nav" @title-click="titleClick" />
    <scroll class="detail_content" ref="scroll" :probeType="3" :pullUpLoad="false" @scroll="contentScroll">
      <div>加入购物车的数量：{{num}}</div>
      <DetailSwiper ref="detail-swiper" :topBanner="topBanner" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop-info="shopInfo" />
      <DetailGoodsInfo @detail-goods-image="detailGoodsImage" :goods-info="goodsInfo" />
      <DetailParamsInfo ref="detailParams" :goods-params="goodsParams" />
      <DetailCommentsInfo ref="detailComment" :comments-info="comments" />
      <goods-list ref="detailRecommend" :goods="recommendInfo"></goods-list>
    </scroll>
    <BackTop v-show="isBackTopShow" @click.native="backTopClick" />
    <DetailBotBar @cart-click="cartClick" />
    <Toast :message="message" :is-show="show" />
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll"
import GoodsList from "components/content/goods/GoodsList"
// import BackTop from "components/content/backTop/BackTop"

import DetailNavBar from "./children/DetailNavBar"
import DetailSwiper from "./children/DetailSwiper"
import DetailBaseInfo from "./children/DetailBaseInfo"
import DetailShopInfo from "./children/DetailShopInfo.vue"
import DetailGoodsInfo from "./children/DetaiGoodsInfo"
import DetailParamsInfo from "./children/DetailParamsInfo"
import DetailCommentsInfo from "./children/DetailCommentsInfo"
import DetailBotBar from "./children/DetailBotBar"
import Toast from "components/common/toast/Toast"

import { getDetail, getRecommend, DetailGoods, ShopInfo, GoodsInfo, Params } from "network/detail"
import { scrollToTop } from "common/mixin.js"
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topBanner: [],
      goods: {},
      shopInfo: {},
      goodsInfo: {},
      goodsParams: {},
      comments: [],
      recommendInfo: [],
      // backTopShow: false,
      imgLoadHandler: null,
      offsetY: [],
      offsetYHandler: null,
      currentIndex: 0,
      message: '',
      show: false
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    scroll,
    DetailParamsInfo,
    DetailCommentsInfo,
    GoodsList,
    // BackTop,
    DetailBotBar,
    Toast
  },
  mixins: [scrollToTop],
  created() {
    // console.log(this.$route.params)
    this.iid = this.$route.params.id

    getDetail(this.iid).then((res) => {
      // console.log("res", res)
      const data = res.result
      // 1.banner图片
      this.topBanner = data.itemInfo.topImages
      // console.log("this.topBanner", this.topBanner)
      // 2.baseInfo获取商品基础信息
      this.goods = new DetailGoods(data.itemInfo, data.columns, data.shopInfo)
      // console.log("this.goods", this.goods)
      // 3。获取商家详情
      this.shopInfo = new ShopInfo(data.shopInfo)
      // 4. 获取商品的详细信息
      this.goodsInfo = new GoodsInfo(data.detailInfo)
      // 5.获取商品参数信息
      this.goodsParams = new Params(data.itemParams.info, data.itemParams.rule)
      // 6.获取评论信息
      if(data.rate.cRate !== 0) {
        this.comments = data.rate.list
      }
    })

    getRecommend().then(res => {
      // console.log("recommend_res", res)
      this.recommendInfo = res.data.list
    })

    this.offsetYHandler = this.debounce(() => {
      this.offsetY = []
      this.offsetY.push(0)
      this.offsetY.push(this.$refs.detailParams.$el.offsetTop)
      this.offsetY.push(this.$refs.detailComment.$el.offsetTop)
      this.offsetY.push(this.$refs.detailRecommend.$el.offsetTop)
      this.offsetY.push(Number.MAX_VALUE)
    })
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100)
    this.imgLoadHandler = () => { refresh() }

    this.$bus.$on("itemImgLoad", this.imgLoadHandler)
  },
  destoryed() {
    this.$bus.$off('itemImgLoad', this.imgLoadHandler)
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
    contentScroll(pos) {
      this.isBackTopShow = -pos.y > 1000 
      const posY = -pos.y
      let _length = this.offsetY.length
      for(let i = 0; i < _length -1; i++) {
        if(this.currentIndex != i && posY > this.offsetY[i] && posY < this.offsetY[i +1]) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    detailGoodsImage() {
      this.$refs.scroll.refresh()
      this.offsetYHandler()
    },
    backDetailTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    titleClick(index) {
      // console.log("index", index)
      this.$refs.scroll.scrollTo(0, -this.offsetY[index], 0)
    },
    cartClick() {
      let _that = this
      let product = {}
      product.image = _that.topBanner[0]
      product.title = _that.goods.title
      product.price = _that.goods.lowNowPrice
      product.iid = _that.iid
      _that.$store.dispatch("addCartList", product).then(res => {
        _that.message = res
        _that.show = true
        setTimeout(function() {
          _that.message = ''
          _that.show = false
        }, 1000)
        console.log(this.$toast, "this.$toast")
      })
    }
  },
  computed: {
    num() {
      // let res =  0
      // for(let item of this.$store.state.cartList) {
      //   res += item.count
      // }
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
.detail_content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.back_top {
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 9px;
  right: 10px;
  bottom: 55px;
}
</style>