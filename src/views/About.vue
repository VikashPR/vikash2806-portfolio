<template>
<main>
  <div class="sections-menu">
        <span class="menu-point" v-bind:class="{active: activeSection == index}" v-on:click="scrollToSection(index)"
          v-for="(offset, index) in offsets" v-bind:key="index">
        </span>
      </div>
      <section class="fullpage">
         <landing-page/>
      </section>
      <section class="fullpage">
        <about-me-page/>
      </section>
      <section class="fullpage">
        <studies-page/>
      </section>
      <section class="fullpage">
       <skills-page/>
      </section>
      <section class="fullpage">
      <contact-me-page/>
      </section>
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
  },
  data(){
    return{
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0
    }
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    }
  },
  mounted() {
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
}
</script>
<style scoped>
.fullpage{
  height: 100vh;
}
.sections-menu {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  display: block;
  margin: 1.2rem 0;
  background: rgba(245, 224, 240, 0.836);
  transition: .4s ease all;
  opacity:0.6;
  cursor: pointer;
  border-radius: 50%;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
  background-color: rgb(250, 36, 121);
}

/* Parallax bg */
.parallax-bg{
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
