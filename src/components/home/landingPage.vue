<template>
    <main class="main">
        <div class="home-text">
            <h1 class="text-greet">🙏Vanakkam,</h1>
            <h1>I'am <strong>Vikash</strong></h1>
            <p>Student, FrontEnd Developer</p>
        </div>
        <div class="wrap">
            <div class="circle" style="">
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
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .circle {
        width: 450px;
        max-width:450px;
        min-width:200px;
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        overflow: hidden;
        animation: morph 3s linear infinite;
        transition: all 0.4s ease;
        opacity: 0.6;
        border: 4px solid rgb(250, 36, 121);
        box-shadow: -1px -1px 36px 10px rgba(250,36,121,0.51);
        -webkit-box-shadow: -1px -1px 36px 10px rgba(250,36,121,0.51);
        -moz-box-shadow: -1px -1px 36px 10px rgba(250,36,121,0.51);
    }
    .circle:hover {
        transform:scale(1.1);
        opacity: 1;
    }

    .circle img {
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
</style>