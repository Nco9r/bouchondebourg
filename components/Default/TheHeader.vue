<template>
  <header>
    <div class="box_header_mobile">
      <div class="logo_header">
        <img src="~assets/img/svg/logo.svg" alt="logo le bouchon de bourg" />
      </div>
      <div class="btn_resa">
        <a
          href="https://reservation.dish.co/landingPage/hydra-ba33c690-a93c-11ec-8799-1321129a6da4"
          target="_blank"
        >
          <button>Réserver</button>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
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
}

.logo_header {
  z-index: 11;
}

.logo_header img {
  width: 100%;
}

.btn_resa a {
  text-decoration: none;
}
</style>
