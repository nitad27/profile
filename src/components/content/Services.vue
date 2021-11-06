<template>
  <div class="section px-3 px-lg-4 pt-5" id="services">
    <div class="container-narrow">
      <div class="text-center mb-5">
        <h2 class="marker marker-center">My Services</h2>
      </div>
      <div class="text-center">
        <p class="mx-auto mb-3" style="max-width: 600px">
          I offer services fit for any website or app. I can quickly maximize
          timely deliverables for real-time schemas.
        </p>
      </div>
      <div class="row py-3">
        <div
          v-for="(item, i) in data"
          :key="i"
          class="col-md-3 text-center"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
        >
          <img
            class="mb-2"
            v-bind:src="item.src"
            width="96"
            height="96"
            :alt="item.alt"
          />
          <div class="h5">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Web Design",
          src: require("../../assets/images/services/web-design.svg"),
          atl: "web design",
          delay: 100,
        },
        {
          title: "Database Design",
          src: require("../../assets/images/services/database-design.svg"),
          atl: "database design",
          delay: 100,
        },
        {
          title: "UI/UX",
          src: require("../../assets/images/services/ui-ux.svg"),
          atl: "ui-ux",
          delay: 100,
        },
        {
          title: "Api Design",
          src: require("../../assets/images/services/api.svg"),
          atl: "api design",
          delay: 100,
        },
      ],
    };
  },
};
</script>
