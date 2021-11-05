<template>
  <div :v-model="mCursor" 
  :style="{top:Event.pageY + 'px',left:Event.pageX + 'px'}" 
  class="mCursor"></div>
  <router-view  @mousemove="cursor"/>
</template>
<script>
export default {
  data(){
    return{
        Event,
    }
  },
    methods:{
       cursor(e){
        //  this.mCursor.style.top = e.pageY +"px";
        this.Event = e;
        return Event;
       }
    }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  height: 100vh;
  width: 100%;
  background: rgb(8, 8, 8) !important;
  color: #fff !important;
  cursor: none;
}
.mCursor{
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
}
@media (max-width: 786px) {
  html{
    font-size:12px;
  }
}
</style>
