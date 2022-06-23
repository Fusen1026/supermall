<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in titles" :key="index"
        @click="tabClick(item)">
        <span :class="{'tab-control-active': index === currentIndex}">{{ item }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabClick(item) {
      this.currentIndex = this.titles.indexOf(item)
      this.$emit("tab-control", this.currentIndex)
    }
  }
}
</script>

<style>
.tab-control-active {
  color: var(--color-high-text);
  padding: 3px;
  border-bottom: 3px solid var(--color-tint);
}
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>