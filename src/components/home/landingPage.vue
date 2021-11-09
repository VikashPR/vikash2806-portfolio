<template>
  <main>
      <div class="home-text">
          <h1 class="text-greet">🙏 Vanakkam,</h1>
          <h1>Iam <span class="text-name">Vikash</span></h1>
          <h1>Student, Web Developer</h1>
      </div>
  </main>
</template>
<script>
export default {
    name:'LandingPage',
}
</script>

<style scoped>
main{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
}
.home-text h1{    
    font-size:4rem;
    font-weight: 500;
}
.text-greet{
    color: rgb(248, 248, 27);
}
.text-name{
    color: rgb(250, 36, 121);
}

</style>