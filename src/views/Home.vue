<template>
<main>
  <landing-page/>
  <about-me-page/>
  <studies-page/>
  <skills-page/>
  <contact-me-page/>
</main>
</template>

<script>
import LandingPage from '../components/home/landingPage.vue'
import AboutMePage from '../components/home/aboutMePage.vue'
import ContactMePage from '../components/home/contactMePage.vue'
import SkillsPage from '../components/home/skillsPage.vue'
import StudiesPage from '../components/home/studiesPage.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    LandingPage,
    AboutMePage,
    StudiesPage,
    SkillsPage,
    ContactMePage

  }
}
</script>
<style scoped>

</style>
