<template>
  <div>
    <scroll @scroll="categoryScroll" class="content">
      <ul>
        <li>10001</li>
        <li>10002</li>
        <li>10003</li>
        <li>10004</li>
        <li>10005</li>
        <li>10006</li>
        <li>10007</li>
        <li>10008</li>
        <li>10009</li>
        <li>100010</li>
        <li>100011</li>
        <li>100012</li>
        <li>100013</li>
        <li>100014</li>
        <li>100015</li>
        <li>100016</li>
        <li>100017</li>
        <li>100018</li>
        <li>100019</li>
        <li>100020</li>
        <li>100021</li>
        <li>100022</li>
        <li>100023</li>
        <li>100024</li>
        <li>100025</li>
        <li>100026</li>
        <li>100027</li>
        <li>100028</li>
        <li>100029</li>
        <li>100030</li>
        <li>100031</li>
        <li>100032</li>
        <li>100033</li>
        <li>100034</li>
        <li>100035</li>
        <li>100036</li>
        <li>100037</li>
        <li>100038</li>
        <li>100039</li>
        <li>100040</li>
        <li>100041</li>
        <li>100042</li>
        <li>100043</li>
        <li>100044</li>
        <li>100045</li>
        <li>100046</li>
        <li>100047</li>
        <li>100048</li>
        <li>100049</li>
        <li>100050</li>
        <li>100051</li>
        <li>100052</li>
        <li>100053</li>
        <li>100054</li>
        <li>100055</li>
        <li>100056</li>
        <li>100057</li>
        <li>100058</li>
        <li>100059</li>
        <li>100060</li>
        <li>100061</li>
        <li>100062</li>
        <li>100063</li>
        <li>100064</li>
        <li>100065</li>
        <li>100066</li>
        <li>100067</li>
        <li>100068</li>
        <li>100069</li>
        <li>100070</li>
        <li>100071</li>
        <li>100072</li>
        <li>100073</li>
        <li>100074</li>
        <li>100075</li>
        <li>100076</li>
        <li>100077</li>
        <li>100078</li>
        <li>100079</li>
        <li>100080</li>
        <li>100081</li>
        <li>100082</li>
        <li>100083</li>
        <li>100084</li>
        <li>100085</li>
        <li>100086</li>
        <li>100087</li>
        <li>100088</li>
        <li>100089</li>
        <li>100090</li>
        <li>100091</li>
        <li>100092</li>
        <li>100093</li>
        <li>100094</li>
        <li>100095</li>
        <li>100096</li>
        <li>100097</li>
        <li>100098</li>
        <li>100099</li>
        <li>1000100</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from "components/common/scroll/Scroll.vue"

export default {
  name: "Category",
  components: {
    scroll
  },
  methods: {
    categoryScroll(pos) {
      console.log("pos", pos)
    }
  }
}
</script>

<style scoped>
  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }

</style>