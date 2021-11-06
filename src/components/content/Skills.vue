<template>
  <div class="section px-3 px-lg-4 pt-5" id="skills">
    <div class="container-narrow">
      <div class="text-center mb-5">
        <h2 class="marker marker-center">My Skills</h2>
      </div>
      <div class="text-center">
        <p class="mx-auto mb-3" style="max-width: 600px">
          I am a quick learner and specialize in multitude of skills required
          for Web Application Development.
        </p>
      </div>
      <div class="bg-light p-3">
        <div class="row">
          <div class="col-md-5">
            <div class="py-1" v-for="(item, i) in dataLeft" :key="i">
              <div
                class="d-flex text-small fw-bolder"
              >
                <span class="me-auto">{{ item.language }}</span
                ><span>{{ item.level }}%</span>
              </div>
              <div class="progress my-1">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  :data-aos-delay="item.delay"
                  data-aos-anchor=".skills-section"
                  v-bind:style="item.style"
                  :aria-valuenow="item.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="col-md-5 offset-md-2">
            <div class="py-1" v-for="(item, i) in dataRight" :key="i">
              <div class="d-flex text-small fw-bolder">
                <span class="me-auto">{{item.language}}</span><span>{{item.level}}%</span>
              </div>
              <div class="progress my-1">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  :data-aos-delay="item.delay"
                  data-aos-anchor=".skills-section"
                  v-bind:style="item.style"
                  :aria-valuenow="item.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
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
      dataRight: [
        {
          language: "Nest js (Typescript)",
          level: 70,
          style: "width: 70%",
          delay: 400,
        },
        {
          language: "SQL (MySQL, Navicat)",
          level: 60,
          style: "width: 60%",
          delay: 500,
        },
        {
          language: "Mongo DB",
          level: 70,
          style: "width: 70%",
          delay: 600,
        },
        {
          language: "Firebase",
          level: 60,
          style: "width: 60%",
          delay: 700,
        },
      ],
      dataLeft: [
        {
          language: "PHP (framework CakePHP)",
          level: 60,
          style: "width: 60%",
          delay: 100,
        },
        {
          language: "React)",
          level: 50,
          style: "width: 50%",
          delay: 200,
        },
        {
          language: "HTML, CSS, Bootstrap, Javascript",
          level: 90,
          style: "width: 90%",
          delay: 300,
        },
        {
          language: "Nuxt js (Vue, Vuex)",
          level: 90,
          style: "width: 90%",
          delay: 300,
        },
        {
          language: "Angular",
          level: 50,
          style: "width: 50%",
          delay: 300,
        },
      ],
    };
  },
};
</script>
