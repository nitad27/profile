import Vue from "vue";
import VueRouter from "vue-router";
import Profule from "../views/Profile.vue";
import Gallery from "../views/Gallery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profule",
    component: Profule,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
