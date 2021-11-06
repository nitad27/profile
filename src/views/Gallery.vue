<template>
  <div class="section px-2 px-lg-4 pt-5">
    <br />
    <br />
    <br />
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="marker marker-center">Gallery</h2>
      </div>
      <div
        class="grid bp-gallery pb-3"
        data-aos="zoom-in-up"
        data-aos-delay="100"
      >
        <div class="grid-sizer"></div>
        <div v-viewer>
          <div class="grid-item" v-for="item in data" :key="item.src">
            <figure class="portfolio-item">
              <img
                :key="item.src"
                :src="item.src"
                width="250"
                height="250"
                class="image-hover"
                data-caption="Example of an optional caption."
              />
              <figcaption>
                <h4 class="h5 mb-0">{{item.en}}</h4>
                <div>{{item.th}}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import Vue from "vue";
Vue.use(VueViewer);
export default {
  data() {
    return {
      data: [
        {
          en: "Passion Fruit",
          th: "เสาวรส",
          src: require("../assets/images/img/fruit-01.jpg"),
        },
        {
          en: "Mixed Fruit",
          th: "ผลไม้รวม",
          src: require("../assets/images/img/fruit-02.jpg"),
        },
        {
          en: "Strawberry",
          th: "สตรอว์เบอร์รี",
          src: require("../assets/images/img/fruit-03.jpg"),
        },
        {
          en: "Rambutan",
          th: "เงาะ",
          src: require("../assets/images/img/fruit-04.jpg"),
        },
        {
          en: "Avocado",
          th: "อาโวคาโด",
          src: require("../assets/images/img/fruit-05.jpg"),
        },
        {
          en: "Lychee",
          th: "ลิ้นจี่",
          src: require("../assets/images/img/fruit-06.jpg"),
        },
        {
          en: "Kiwi",
          th: "กี่วี่",
          src: require("../assets/images/img/fruit-07.jpg"),
        },
        {
          en: "Coconut",
          th: "มะพร้าว",
          src: require("../assets/images/img/fruit-08.jpg"),
        },
        {
          en: "Orange",
          th: "ส้ม",
          src: require("../assets/images/img/fruit-09.jpg"),
        },
        {
          en: "Watermelon",
          th: "แตงโม",
          src: require("../assets/images/img/fruit-10.jpg"),
        },
        {
          en: "Washington Apple",
          th: "วอชิงตันแอปเปิล",
          src: require("../assets/images/img/fruit-11.jpg"),
        },
        {
          en: "Apple",
          th: "แอปเปิล",
          src: require("../assets/images/img/fruit-12.jpg"),
        },
      ],
    };
  },
  methods: {
    viewImg(item) {
      console.log(item);
    },
  },
};
</script>
<style lang="css" scoped>
.image-hover {
  opacity: 1;
  display: block;
  width: 100%;
  /* height: auto; */
  transition: 0.5s ease;
  backface-visibility: hidden;
  cursor: pointer;
}
.image-hover:hover {
  opacity: 0.3;
}
</style>
