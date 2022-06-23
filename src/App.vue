<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
      
    <Main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabbar"

export default {
  
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
