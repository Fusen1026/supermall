<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="imgActive"></slot></div>
    <div v-else><slot name="img"></slot></div>   
    <div :style="activeStyle"><slot name="page"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  data() {
    return {
      // isActive: true
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive == true ? {"color": this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>