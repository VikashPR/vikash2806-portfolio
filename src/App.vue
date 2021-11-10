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

  .page-display {
    position: absolute;
    font-weight: 600;
    opacity: 0.05;
    font-size: 9rem;
    left: 5%;
    display: block;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);
  }

  @media (max-width: 786px) {
    html {
      font-size: 10px;
    }
  }
</style>