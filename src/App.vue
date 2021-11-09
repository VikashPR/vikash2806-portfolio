<template>
  <main>
    <!-- <div :v-model="mCursor"
    :style="{top:Event.pageY + 'px',left:Event.pageX + 'px'}"
    class="mCursor"></div> -->
    <v-main>
      <!-- <router-view  @mousemove="cursor"/> -->
      <router-view/>
    </v-main>
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
body{
  width: 100% !important;
  background: rgb(0, 0, 0) !important;
  color: #fff !important;
  margin: 0 auto;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif !important;
}
main {
  height: 100vh;
  max-width: 1800px;
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
@media (max-width: 786px) {
  html{
    font-size:12px;
  }
}
</style>
