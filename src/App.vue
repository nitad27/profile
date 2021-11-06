<template>
  <div>
    <Nav />
    <div class="page-content">
      <router-view> </router-view>
    </div>
    <Footer />
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>
