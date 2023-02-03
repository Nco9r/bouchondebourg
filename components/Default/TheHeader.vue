<template>
  <header>
    <div class="box_header_mobile" :class="{ color_bck: scrollPosition > 20 }">
      <div class="logo_header">
        <img src="~assets/img/svg/logo.svg" alt="logo le bouchon de bourg" />
      </div>
      <div class="btn_resa">
        <a
          href="https://bookings.howmany.fr/results?rid=37&pid=1001"
          target="_blank"
        >
          <button>Réserver</button>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style scoped>
.box_header_mobile {
  background-color: transparent;
  height: 90px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  z-index: 10;
  padding: 20px;
  right: 0;
  transition: all .3s ease-in-out ;
}

.color_bck {
  background-color: var(--primary);

}

.logo_header {
  z-index: 11;
}

.logo_header img {
  width: 180px;
}
.btn_resa {
  margin-top: -10px;
}
.btn_resa a {
  text-decoration: none;
}

@media screen and (min-width: 1024px) {
  .box_header_mobile {
    height: 100px;
    padding: 30px;
  }

  .logo_header img {
    width: 200px;
  }
}
</style>
