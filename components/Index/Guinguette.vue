<template>
  <section class="guinguette">
    <div class="wrapper_guinguette">
      <div class="block_right">
        <h2>La guinguette des vignerons</h2>
        <p>
          Pour fêter l’arrivée de l’été, nous vous proposerons aussi notre
          guinguette et ses terrains de pétanques pour vous détendre avec
          quelques tapas en admirant la vue.
        </p>
        <div class="btn_resa">
          <a
            href="https://bookings.howmany.fr/results?rid=37&pid=1001"
            target="_blank"
          >
            <button>Réserver une table</button>
          </a>
        </div>
      </div>
      <div class="block_left"></div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.guinguette {
  background-image: url('~assets/img/png/guinguette.png');
  height: 500px;
  margin-top: 320px;
  background-position: 50% -20%;
  background-size: cover;
  padding: 40px 20px 20px 20px;
  text-align: center;
}

.block_right h2 {
  color: var(--white);
  font-family: 'Fjalla One', sans-serif;
  -webkit-text-stroke: 1px var(--white);
  font-size: 42px;
  margin-top: 30px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0px;
}

.block_right p {
  font-family: Arapey, sans-serif;
  color: var(--white);
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 10px;
  line-height: 28px;
}
</style>
