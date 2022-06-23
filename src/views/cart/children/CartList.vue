<template>
  <div class="cart_list">
    <scroll
      :probeType="3" 
      :pullUpLoad="false"
      class="content"
    >
      <cart-list-item v-for="(item, index) in cartList" :key="index" :cart-item="item"></cart-list-item>
      <ul>
        <li>1001</li>
        <li>1002</li>
        <li>1003</li>
        <li>1004</li>
        <li>1005</li>
        <li>1006</li>
        <li>1007</li>
        <li>1008</li>
        <li>1009</li>
        <li>10010</li>
        <li>10011</li>
        <li>10012</li>
        <li>10013</li>
        <li>10014</li>
        <li>10015</li>
        <li>10016</li>
        <li>10017</li>
        <li>10018</li>
        <li>10019</li>
        <li>10020</li>
        <li>10021</li>
        <li>10022</li>
        <li>10023</li>
        <li>10024</li>
        <li>10025</li>
        <li>10026</li>
        <li>10027</li>
        <li>10028</li>
        <li>10029</li>
        <li>10030</li>
        <li>10031</li>
        <li>10032</li>
        <li>10033</li>
        <li>10034</li>
        <li>10035</li>
        <li>10036</li>
        <li>10037</li>
        <li>10038</li>
        <li>10039</li>
        <li>10040</li>
        <li>10041</li>
        <li>10042</li>
        <li>10043</li>
        <li>10044</li>
        <li>10045</li>
        <li>10046</li>
        <li>10047</li>
        <li>10048</li>
        <li>10049</li>
        <li>10050</li>
        <li>10051</li>
        <li>10052</li>
        <li>10053</li>
        <li>10054</li>
        <li>10055</li>
        <li>10056</li>
        <li>10057</li>
        <li>10058</li>
        <li>10059</li>
        <li>10060</li>
        <li>10061</li>
        <li>10062</li>
        <li>10063</li>
        <li>10064</li>
        <li>10065</li>
        <li>10066</li>
        <li>10067</li>
        <li>10068</li>
        <li>10069</li>
        <li>10070</li>
        <li>10071</li>
        <li>10072</li>
        <li>10073</li>
        <li>10074</li>
        <li>10075</li>
        <li>10076</li>
        <li>10077</li>
        <li>10078</li>
        <li>10079</li>
        <li>10080</li>
        <li>10081</li>
        <li>10082</li>
        <li>10083</li>
        <li>10084</li>
        <li>10085</li>
        <li>10086</li>
        <li>10087</li>
        <li>10088</li>
        <li>10089</li>
        <li>10090</li>
        <li>10091</li>
        <li>10092</li>
        <li>10093</li>
        <li>10094</li>
        <li>10095</li>
        <li>10096</li>
        <li>10097</li>
        <li>10098</li>
        <li>10099</li>
        <li>100100</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll"
import CartListItem from "./CartListItem.vue"
export default {
  name: "CartList",
  components: {
    CartListItem,
    scroll,
  },
  computed: {
    cartList() {
      return this.$store.state.cartList
    }
  }
}
</script>

<style>
.cart_list {
  height: 300px;
  overflow: hidden;
  background-color: red;
}
</style>