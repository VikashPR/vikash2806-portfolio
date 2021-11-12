<template>
  <main class="main">
    <div class="page-displayText">
      <h4 data-aos-duration="1000" data-aos="fade-left">About Me</h4>
    </div>
    <div class="aboutme">
      <div class="aboutme-text">
        <h2 class="aboutme-title">Who I am</h2>
        <div data-aos="fade-left" data-aos-duration="2000" class="aboutme-sub">
          <p class="aboutme-subtitle">Computer Science Student & Web Developer</p>
        </div>
        <div class="aboutme-about">
          <p data-aos="fade-up" data-aos-duration="500">Yo, I'am Vikash from India</p>
          <p data-aos="fade-up" data-aos-duration="1000">I'am a Computer science student at <i>SRM university</i>,
            pursuing my 2nd year undergraduation in core computer science.</p>
          <p data-aos="fade-up" data-aos-duration="1500">I love Playing outdoor games, Running, Web Devolepment. My journey in web devolepment started in 2020 lockdown, I started learning Devolepment along with my friends, We enjoyed creating new Web Applications and we started to help few people in making Web Applications. We did not stop there we are still learning new technologies daily and bilding our skills. Now its been more than 1 year since me and my friends started learning webdevelopment, we learnt many new technologies along the way and we are still continuing our learning.</p>
        </div>
      </div>
      <div class="aboutme-img-container"><img data-aos="zoom-in" class="aboutme-img" src="@/assets/Vikash-img.png"
          alt="about me section Vikash image"></div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'AboutMePage',
  }
</script>

<style scoped>
  .main {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aboutme {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aboutme-text {
    width: 60%;
  }

  .aboutme-img-container {
    width: 35%;
  }

  .aboutme-img-container img {
    width: 90%;
    max-width: 400px;
  }


  .aboutme-img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .aboutme-title {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 0.3em;
  }

  .aboutme-sub {
    width: 150%;
    position: relative;
    left: -20px;
    background-color: rgb(250, 36, 121);
    user-select: none;
  }

  .aboutme-subtitle {
    margin-left: 20px;
    font-size: 1.5rem;
    line-height: 1.3;
    padding: 15px;
    color: #000;
  }

  .aboutme-about p {
    color: #dddcdc;
    font-size: 1.1rem;
    margin-block: 1em;
    font-weight: 300;
  }

  /* Media querry */
  @media (max-width: 786px) {}
</style>