<template>
  <div>
    <div class="wrapper_hero">
      <div class="hero_img">

        <video autoplay loop muted playsinline>
          <source src="~assets/video/v.mp4" type="video/mp4" />
        </video>
        <div class="block_slide">
        <client-only>
          <vue-tiny-slider v-bind="tinySliderOptions" ref="tinySlider">
            <img src="~assets/img/png/hero_new.jpg" alt="" />
            <img src="~assets/img/png/hero_2.jpg" alt="" />
            <img src="~assets/img/png/hero_3.jpg" alt="" />
            <img src="~assets/img/png/slide_2.jpg" alt="" />
            <img src="~assets/img/png/slide_3.jpg" alt="" />
            <img src="~assets/img/png/slide_5.jpg" alt="" />
          </vue-tiny-slider>
        </client-only>
      </div>
     

        <div class="bck"></div>
        <div class="wrapper_title_hero">
          <span class="tiret"></span>
          <p class="construction"></p>
          <h1>
            <span class="span_first">Restaurant</span> <br />
            <span class="span_second">&</span> <br /><span class="span_three">Bar à vin</span>
            <span class="span_none">Côtes de Bourg</span> <br />
          </h1>
          <div class="btn_resa">
            <a href="/carte_bouchon.pdf" target="_blank">
              <button>Voir la carte</button>
            </a>
          </div>
          <span class="tiret"></span>
        </div>
      </div>
    </div>
    <div class="mouse">
      <img src="~assets/img/svg/mouse.svg" alt="" />
    </div>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'

require('nuxt-video-player/src/assets/css/main.css')
export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: false,
        loop: true,
        items: 1,
        container: '.hero_img',
        gutter: 0,
        autoplay: true,
        nav: false,
        controls: false,
        speed: 1500,
        mode: 'gallery',
        autoplayButtonOutput: false,
        autoplayButton: false,
      },
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero_img {
  position: relative;
  display: block;
  overflow-x: hidden;
  height: 100vh !important;
}

.hero_img video {
  width: 133%;
  height: 100vh;
  display: block;
  z-index: 101;
  object-fit: cover;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}

.bck {
  background: var(--filter-slider);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  pointer-events: all;
  bottom: 0;
  height: 100vh;
}

tns-controls {
  display: none;
}

tns-outers button .tns-visually-hidden {
  display: none;
}

.wrapper_title_hero {
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  flex-flow: column;
}

.tiret {
  height: 60px;
  width: 3px;
  margin-top: 10px;
  background-color: var(--secondary);
  margin-bottom: 15px;
}

.construction {
  color: var(--white);
  font-family: Fjalla, sans-serif;
}

h1 {
  margin: 15px 0;
}

.span_first {
  color: var(--white);
  font-family: Fjalla, sans-serif;
  font-size: 52px;
  margin-top: 30px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0px;
}

.span_none {
  display: none;
}

/* .span_first::after {
  content: 'Restaurant';
  font-family: Fjalla, sans-serif;
  font-size: 62px;
  position: absolute;
  left: 4px;
  top: 3px;
  text-transform: uppercase;
  -webkit-text-stroke: 1px var(--white);
  color: transparent;
} */

.span_second {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Fjalla One', sans-serif;
  -webkit-text-stroke: 1px var(--secondary);
  font-size: 110px;
  top: 115px;
  color: var(--secondary);
}

.span_three {
  color: var(--white);
  font-family: Arapey, sans-serif;
  font-size: 52px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
}

.mouse {
  position: absolute;
  top: 90vh;

  left: 50%;
  transform: translateX(-50%);
}

.tns-item {
  height: 800px;
  width: 20%;
}

.mouse img {
  width: 25px;
  height: 25px;
  animation: mouse 1.5s infinite;
}

@keyframes mouse {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.btn_resa {
  z-index: 20;
  pointer-events: all;
  margin-bottom: 30px;
  margin-top: 10px;
}
.hero_img .block_slide {
    display: none;
  }

@media screen and (min-width: 1024px) {
  .wrapper_title_hero {
    top: 20vh;
  }
  .hero_img .block_slide {
    display: block;
  }

  .hero_img video {
    display: none;
  }

  .hero_img img {
    width: 100%;
    height: 100vh;
    display: block;
    object-fit: cover;
  }

  .bck {}

  .span_first {
    font-size: 72px;
  }

  .span_second {
    font-size: 130px;
    top: 115px;
  }

  .span_three {
    font-size: 72px;

    top: 190px;
  }

  .btn_resa {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .mouse {
    position: absolute;
    top: 90vh;

    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (min-width: 1150px) {
  .wrapper_title_hero {
    top: 20vh;
  }

  .bck {}

  .span_first {
    font-size: 102px;
  }

  .span_second {
    font-size: 190px;
    top: 110px;
  }

  .span_three {
    font-size: 102px;

    top: 210px;
  }

  .btn_resa {
    margin-bottom: 50px;
    margin-top: 50px;
  }

  .mouse {
    position: absolute;
    top: 90vh;

    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (min-width: 1350px) {
  .wrapper_title_hero {
    top: 25vh;
  }

  .bck {}

  .span_first {
    font-size: 102px;
  }

  .span_second {
    font-size: 190px;
    top: 110px;
  }

  .span_three {
    font-size: 102px;

    top: 210px;
  }

  .btn_resa {
    margin-bottom: 50px;
    margin-top: 50px;
  }

  .mouse {
    position: absolute;
    top: 90vh;

    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
