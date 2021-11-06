<template>
  <div id="content">
    <br />
    <br />
    <br />
    <br />
    <br />
    <Header />
    <About />
    <Services />
    <Skills />
    <Experience />
    <Contact />
  </div>
</template>
<script>
import Header from "../components/content/Header";
import About from "../components/content/About";
import Services from "../components/content/Services";
import Skills from "../components/content/Skills";
import Experience from "../components/content/Experience";
import Contact from "../components/content/Contact";

export default {
  name: "App",
  components: {
    Header,
    About,
    Services,
    Skills,
    Experience,
    Contact,
  },
};
</script>
