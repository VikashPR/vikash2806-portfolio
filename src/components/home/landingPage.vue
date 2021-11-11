<template>
    <main  class="main">
        <div data-aos="zoom-in" data-aos-duration="1000" class="home-text">
            <h1 class="greet-text">🙏Vanakkam,</h1>
            <h1>I'am <strong>Vikash</strong></h1>
            <p class="design-text">Student / Web Developer</p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" class="wrap">
            <div class="blob" style="">
                <img src="@/assets/vikash-min.jpeg" alt="vikash-landing page image">
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        name: 'LandingPage',
    }
</script>

<style scoped>
    .main {
        height: 100vh;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }



    /* NOTE Text */
    .home-text {
        margin-inline: 10px;
    }

    .home-text h1 {
        font-size: 5rem;
        font-weight: 500;
    }

    .home-text .greet-text {
        color: rgb(236, 236, 5);
    }

    .home-text h1 strong {
        color: rgb(250, 36, 121);
    }

    .design-text {
        font-size: 1.2rem;
    }

    /* NOTE Blob */
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-inline: 10px;
    }

    .blob {
        width: 85%;
        max-width: 550px;
        min-width: 200px;
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        overflow: hidden;
        animation: morph 3s linear infinite;
        transition: all 0.4s ease;
        border: 4px solid rgb(250, 36, 121);
        box-shadow: -1px -1px 36px 10px rgba(250, 36, 121, 0.51);
        -webkit-box-shadow: -1px -1px 36px 10px rgba(250, 36, 121, 0.51);
        -moz-box-shadow: -1px -1px 36px 10px rgba(250, 36, 121, 0.51);
    }

    .blob:hover img {
        transform: scale(1.2);
        opacity: 1;
    }

    .blob img {
        transition: all 0.4s ease;
        opacity: 0.9;
        width: 100%;
    }

    @keyframes morph {

        0%,
        100% {
            border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
        }

        34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
        }

        67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
        }
    }

    @media only screen and (min-width: 1200px) {
        .blob {
            width: 500px !important;
        }
    }

    @media only screen and (min-width: 992px) {
        .blob {
            width: 400px;
        }
    }

    @media only screen and (min-width: 768px) {
        .blob {
            width: 300px;
        }
    }

    @media (max-width: 786px) {
        .main {
            flex-direction: column;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;
        }

        .blob img {
            opacity: 1;
            transform: scale(1.1);
        }
    }
</style>