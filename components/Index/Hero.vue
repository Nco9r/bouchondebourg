<template>
  <div>
    <div class="wrapper_hero">
      <div class="hero_img">
        <client-only>
          <vue-tiny-slider v-bind="tinySliderOptions" ref="tinySlider">
            <img src="~assets/img/png/slider.jpg" alt="" />
            <img src="~assets/img/png/slide_2.jpg" alt="" />
            <img src="~assets/img/png/slide_3.jpg" alt="" />
            <img src="~assets/img/png/slider_4.jpg" alt="" />
            <img src="~assets/img/png/slide_5.jpg" alt="" />
          </vue-tiny-slider>
        </client-only>
        <!-- <img src="~assets/img/png/slider.jpg" alt="" /> -->

        <div class="bck"></div>
        <div class="wrapper_title_hero">
          <span class="tiret"></span>
          <p class="construction">Site web en construction</p>
          <h1>
            <span class="span_first">Restaurant</span> <br />
            <span class="span_second">&</span> <br /><span class="span_three"
              >Bar à vin</span
            >
          </h1>
          <div class="btn_resa">
            <a
              href="https://reservation.dish.co/landingPage/hydra-ba33c690-a93c-11ec-8799-1321129a6da4"
              target="_blank"
            >
              <button>Réserver une table</button>
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
export default {
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: false,
        loop: true,
        items: 1,
        container: '.hero_img',
        gutter: 0,
        autoplay: false,
        nav: false,
        controls: false,
        speed: 1500,
        mode: 'gallery',
        autoplayButtonOutput: 'true'
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
  height: 800px !important;
}

.hero_img img {
  width: 100%;
  height: 800px;
  display: block;
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
  height: 800px;
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
  font-size: 62px;
  margin-top: 30px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.span_first::after {
  content: 'Restaurant';
  font-family: Fjalla, sans-serif;
  font-size: 62px;
  position: absolute;
  left: 4px;
  top: 3px;
  text-transform: uppercase;
  -webkit-text-stroke: 1px var(--white);
  color: transparent;
}

.span_second {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: Fjalla, sans-serif;
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
  top: 180px;
}

.mouse {
  position: absolute;
  top: 700px;

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
  margin-bottom: 20px;
}
</style>
