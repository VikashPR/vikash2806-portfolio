<template>
  <main>
    <!-- <div :v-model="mCursor"
    :style="{top:Event.pageY + 'px',left:Event.pageX + 'px'}"
    class="mCursor"></div> -->
      <!-- <router-view  @mousemove="cursor"/> -->
      <router-view />
  </main>
</template>
<script>
  export default {
    // NOTE Mouse event code commented
    // data(){
    //   return{
    //       Event,
    //   }
    // },
    //   methods:{
    //      cursor(e){
    //       this.Event = e;
    //       return Event;
    //      }
    //   }
  }
</script>
<style>
  body {
    background: rgb(0, 0, 0) !important;
    color: #fff !important;
    margin: 0 auto;
    max-width: 1800px;
    overflow: hidden;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }
  ::selection {
    color: rgb(250, 36, 121);
  }

  /* .mCursor{
  top: 50%;
  left: 50%;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  transform:translate(-50%,-50%);
  transition-duration: .2s
} */

  /* Page Display Css */

.page-display{
  writing-mode: vertical-rl;
  position: absolute;
  left: 0%;
  line-height: 1;
  opacity:0.09 !important;
  user-select: none;
  font-size: 6rem !important;
  font-weight: 800;
  transform:rotate(180deg) !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  html{
    font-size: 8px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    html{
    font-size: 10px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    html{
    font-size: 10px;
  }
} 
@media only screen and (min-width: 992px) {
  html{
    font-size: 14px;
  }
} 
@media only screen and (min-width: 992px) {
  html{
    font-size: 16px;
  }
}
</style>