<template>
  <section class="team">
    <div class="box_team">
      <img src="~assets/img/svg/sky.svg" alt="" />
      <h3>
        Toute l’équipe du Bouchon vous attend avec impatience pour partager avec
        vous ces bons moments.
      </h3>
      <div class="btn_resa">
        <a
          href="https://bookings.howmany.fr/results?rid=37&pid=1001"
          target="_blank"
        >
          <button>Réserver une table</button>
        </a>
      </div>
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
  padding: 20px 5px;
  position: relative;
}

.team img {
  position: absolute;
  right: 5px;
  top: -20px;
}

.team .box_team h3 {
  font-family: 'Fjalla One', sans-serif;
  -webkit-text-stroke: 1px var(--primary);
  font-size: 40px;
  color: var(--primary);
}

.btn_resa {
  margin-top: 30px;
}

@media screen and (min-width: 1024px) {
  .team {
    margin-top: 100px;
  }

  .box_team {
    width: 800px;
    margin: auto;
    position: relative;
  }
  .team .box_team h3 {
    font-family: 'Fjalla One', sans-serif;
    -webkit-text-stroke: 1px var(--primary);
    font-size: 52px;
    color: var(--primary);
  }

  .team img {
    position: absolute;
    right: -60px;
    top: -70px;
    width: 110px;
  }
}

@media screen and (min-width: 1350px) {

    .team {
        margin-top: 150px;
    }
  .team img {
    position: absolute;
    width: 130px;
    right: -60px;
    top: -80px;
  }

    .team .box_team h3 {
    font-family: 'Fjalla One', sans-serif;
    -webkit-text-stroke: 1px var(--primary);
    font-size: 62px;
    color: var(--primary);
  }

  .box_team {
    width: 1000px;
    margin: auto;
    position: relative;
  }
}
</style>
