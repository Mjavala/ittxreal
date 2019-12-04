<template>
    <div class="hl-container">
      <div class="headlines">
          <span>
               It's Bold, It's Timeless, 
          </span>
          </div>
      <div class="brand"> ITtx REAL</div>
    </div>
</template>

<style>
.hl-container {
    display:flex;
    justify-content: center;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 35px;
    letter-spacing: .1px;
}
.headlines {
    font-family: 'Cormorant Garamond', serif;
    z-index: 10000;
    width:0px;
    animation: reveal 7s 1 forwards;
    -webkit-animation: reveal 7s 1 forwards;
    -moz-animation: reveal 7s 1 forwards;
    -ms-zoom-animation: reveal 7s 1 forwards;
}
.brand{
    display:inline-block;
    overflow:hidden;
    white-space:nowrap;
    font-family: 'Cormorant Garamond', serif;
    z-index: 100010;
    padding-left: 1.3%;

    animation: showup 7s 1 forwards;
    -webkit-animation: showup 7s 1 forwards;
    -moz-animation: showup 7s 1 forwards;
    -ms-zoom-animation: showup 7s 1 forwards;
}
.headlines span{
    animation: slidein 7s 1;
    -webkit-animation: slidein 7s 1;
    -moz-animation: slidein 7s 1;
    -ms-zoom-animation: slidein 7s 1;
}
@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:1;}
}
@keyframes slidein {
    0% { margin-left:-1000px; }
    20% { margin-left:-1000px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}
@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:auto;}
    80% {opacity:1;}
    100% {opacity:1;width:auto;}
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px){
    .hl-container{
        line-height: 1.6;
        font-size: 30px;
    }
}
</style>
