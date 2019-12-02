<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="text">
        <div class="centent">
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
          一大堆文字。。。。。。。。。。。。。sadjaslkdasjdlasjldkajsd
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: "auto", //设置同屏显示数量，默认为 1 auto 为随意。
        freeMode: true, //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        mousewheel: true //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper-slide {
  height: 300px;
  overflow: hidden;
}
.text {
  font-size: 18px !important;
  text-align: left;
  padding: 30px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
