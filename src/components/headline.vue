<template>
    <div class="hl-container">
        <div id="bold" class="brand noshow"> It's Bold.</div>
        <div id="timeless" class="brand noshow"> It's Timeless.</div>
        <div id="real" class="brand noshow"> ITtx REAL.</div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
        const bold = document.getElementById('bold')
        const timeless = document.getElementById('timeless')
        const real = document.getElementById('real')
        setTimeout(() => {
            bold.classList.remove('noshow')
            bold.classList.add('enter')
        }, 500)
        setTimeout(() => {
            timeless.classList.remove('noshow')
            timeless.classList.add('enter')
        }, 1500)
        setTimeout(() => {
            real.classList.remove('noshow')
            real.classList.add('enter')
        }, 2500)
    }
}
</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

    .hl-container {
        display:flex;
        justify-content: center;
        margin: 0 auto;
        line-height: 1.6;
        font-size: 35px;
        letter-spacing: .1px;
        width: 100%;
    }
    .brand{
        display:inline-block;
        overflow:hidden;
        white-space:nowrap;
        font-family: 'Poiret One', cursive;
        padding-left: 1.75%;
        font-size: 1.5em;
    }
    .enter{
    animation: 1s enter ease forwards;
    }
    .noshow{
        opacity: 0;
    }
    @media only screen and (min-device-width : 320px) and (max-device-width : 480px){
        .hl-container{
            line-height: 1.6;
            font-size: 30px;
        }
    }
    @keyframes enter {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
