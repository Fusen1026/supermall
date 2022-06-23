<template>
  <div class="comments">
    <div class="title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="comment_user_info">
      <div v-for="(item, index) in commentsInfo" :key="index">
        <div class="comment_user_info">
          <span><img :src="item.user.avatar" alt="" class="avatar" /></span>
          <span>{{ item.user.uname }}</span>
        </div>
        <div class="comment_text">
          {{ item.content }}
        </div>
        <div class="comment_goods_info">
          <span class="cpmment-time">{{ item.created | showDate }}</span>
          <span>{{ item.style }}</span>
        </div>
        <div class="flex">
          <div class="comment_info_images" v-for="(item, index) in item.images" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { formatDate } from "../../../common/untils.js"
export default {
  name: "DetailCommentsInfo",
  props: {
    commentsInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate(value) {
      // 将时间戳转化为date对象
      const date = new Date(value * 1000);
      // 将date进行格式化
      return formatDate(date, "yy-MM-dd")
    }
  }
}
</script>

<style>
.comments {
  font-size: 14px;
  padding: 0 8px;
  border-bottom: 4px solid #ececec;
}

.flex {
  display: flex;
}
.title {
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
}
.comment_user_info {
  padding: 10px 0;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 10px;
  vertical-align: middle;
}
.comment_text {
  line-height: 20px;
}
.comment_goods_info {
  color: #999;
  margin: 4px 0;
}
.comment_info_images img{
  width: 60px;
  height: 60px;
  margin-right: 6px;
}
</style>