<template>
  <div class="section px-3 px-lg-4 pt-5" id="experience">
    <div class="container-narrow">
      <div class="text-center mb-5">
        <h2 class="marker marker-center">Experience</h2>
      </div>
      <div class="row">
        <div class="col-md-6" v-for="(item, i) in data" :key="i">
          <div class="card mb-3" data-aos="fade-right" data-aos-delay="100">
            <div class="card-header px-3 py-2">
              <div class="d-flex justify-content-between">
                <div>
                  <h3 class="h5 mb-1">{{item.position}}</h3>
                  <div class="text-muted text-small">
                    {{item.company}} <small>({{item.date}})</small>
                  </div>
                </div>
                <img
                  :src="item.src"
                  width="48"
                  height="48"
                  alt="ui-ux"
                />
              </div>
            </div>
            <div class="card-body px-3 py-2">
              <p v-for="(detail, j) in item.detail" :key="j">
                {{detail}} <br />
              </p>
            </div>
          </div>
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
          position: "Developer",
          company: "Sian Makro Public Company Limited",
          src: require("../../assets/images/services/web-design.svg"),
          date: "Nov. 2017 - May. 2018",
          detail: ["- Check products", "- Training customers", "- Supply customers", "- Collect customers", "- Analyze customer data", "- Sales analysis"]
        },
        {
          position: "Developer",
          company: "Gosoft (Thailand) Co., Ltd.",
          src: require("../../assets/images/services/web-design.svg"),
          date: "May. 2019 - Feb. 2020",
          detail: ["- Design database (MySQL)", "- Front end, Back end", "- Design web application", "- Develop web create evaluation 360"]
        },
        {
          position: "Developer",
          company: "Tconio Company Limited",
          src: require("../../assets/images/services/web-design.svg"),
          date: "Mar. 2021 - Jun. 2021",
          detail: ["- Design database (Mongo DB) ", "- Back end (Nest js)", "- Develop web application", "- Front end (Nuxt js, Angluar)"]
        },
        {
          position: "Freelance",
          company: "",
          src: require("../../assets/images/services/web-design.svg"),
          date: "Jun. 2021",
          detail: ["- Design database (Mongo DB, Firebase) ", "- Back end (Nest js)", "- Develop web application", "- Front end (Nuxt js, vue js)"]
        },
      ],
    };
  },
};
</script>
