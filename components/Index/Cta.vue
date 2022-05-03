<template>
  <section class="team">
      <img src="~assets/img/svg/sky.svg" alt="">
    <h3>
      Toute l’équipe du Bouchon vous attend avec impatience pour partager avec
      vous ces bons moments.
    </h3>
    <div class="btn_resa">
      <a
        href="https://reservation.dish.co/landingPage/hydra-ba33c690-a93c-11ec-8799-1321129a6da4"
        target="_blank"
      >
        <button>Réserver une table</button>
      </a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.team {
  text-align: center;
  margin-top: 50px;
  padding: 20px 15px;
  position: relative;
}

.team img {
    position: absolute;
    right: 10px;
    top: -30px;
}

.team h3 {
  font-family: Fjalla, sans-serif;
  font-size: 42px;
  color: var(--primary);
}

.btn_resa {
    margin-top: 30px;
}
</style>
