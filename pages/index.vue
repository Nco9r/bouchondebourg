<template>
  <div>
    <transition name="load_leave">
      <div class="load" v-if="loading">
        <img src="~assets/img/svg/logo.svg" alt="" />
        <img class="vignes" src="~assets/img/svg/vignes.svg" alt="" />
        <img class="bottles" src="~assets/img/svg/bottles.svg" alt="" />
        <div class="snippet">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <img src="~assets/img/png/cotebourg.png" alt="" />
      </div>
    </transition>
    <main>
      <hero />
      <restaurant />
      <guinguette />
      <cta />
    </main>
  </div>
</template>

<script>
import Hero from '../components/Index/Hero.vue'
import Restaurant from '../components/Index/Restaurant.vue'
import Guinguette from '../components/Index/Guinguette.vue'
import Cta from '../components/Index/Cta.vue'
export default {
  components: { Hero, Restaurant, Guinguette, Cta },
  name: 'IndexPage',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.seveurChecked()
  },
  methods: {
    seveurChecked() {
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
}
</script>

<style>
.load {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--primary);
  z-index: 100000000;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--secondary);
}

.load img:nth-child(1) {
  width: 250px;
}

.load img:nth-child(5) {
  width: 130px;
  margin-top: 10px;
}

.load p {
  color: var(--white);
  margin: 20px 0;
}

.vignes {
  position: absolute;
  top: -10px;
  width: 170px;
  left: 0;
}

.bottles {
  position: absolute;
  bottom: 0;
  width: 170px;
  right: 0;
}

.snippet {
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
}

.snippet p {
  width: 10px;
  height: 10px;
  background-color: var(--white);
  margin-right: 10px;
  border-radius: 50%;
  animation: load 0.7s infinite;
}

.snippet p:nth-child(2) {
  animation-delay: 0.3s;
}

@keyframes load {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.load_leave-leave-active {
  transition: all 1.5s;
}

.load_leave-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (min-width: 1024px) {
  .vignes {
    position: absolute;
    top: -10px;
    width: 230px;
    left: 0;
  }

  .bottles {
    position: absolute;
    bottom: 0;
    width: 230px;
    right: 0;
  }

  .load img:nth-child(1) {
    width: 440px;
  }

  .load img:nth-child(5) {
    width: 200px;
    margin-top: 10px;
  }
}
</style>
