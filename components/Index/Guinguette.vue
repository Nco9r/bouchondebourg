<template>
  <section class="guinguette">
    <div class="guirlande">
      <img src="~assets/img/svg/guirlande.svg" alt="" />
    </div>
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
      <div class="block_left">
        <div class="item_box">
          <div class="item">
            <img src="~assets/img/svg/petanque.svg" alt="" />
            <p>Terrains de pétanques</p>
          </div>
          <div class="item">
            <img src="~assets/img/svg/vue.svg" alt="" />
            <p>Point de vue</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.guinguette {
  background-image: url('~assets/img/png/guinguette.png');

  margin-top: 270px;
  background-position: 50% -20%;
  background-size: cover;
  overflow: hidden;

  position: relative;
  padding: 40px 20px 20px 20px;
  text-align: center;
}

.guirlande {
  position: absolute;
  right: -20px;
  overflow: hidden;
  top: -46px;
}
.guirlande img {
  width: 100%;
  overflow: hidden;
}

.block_right h2 {
  color: var(--white);
  font-family: 'Fjalla One', sans-serif;
  -webkit-text-stroke: 1px var(--white);
  font-size: 42px;
  margin-top: 80px;
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

.block_left {
  margin-top: 50px;
}

.item p {
  margin-top: 10px;
  color: var(--white);
  font-family: 'Fjalla One', sans-serif;
}

.item {
  margin-bottom: 40px;
}

@media screen and (min-width: 1024px) {
  .guinguette {
    text-align: left;
    margin-top: 80px;
    padding-bottom: 100px;
    padding-top: 70px;
  }
  .wrapper_guinguette {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .block_right {
    width: 45%;
  }

  .block_right h2 {
    font-size: 52px;
    margin-top: 20px;
  }

  .block_left {
    width: 45%;
  }

  .item_box {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .item {
    text-align: center;
  }

  .block_right p {
    padding: 0 0px;
    font-size: 22px;
    width: 450px;
  }

  .item img {
    height: 100px;
    width: 100px;
  }
}

@media screen and (min-width: 1150px) {
  .guinguette {
    text-align: left;
    margin-top: 190px;
    padding-bottom: 100px;
    padding-top: 70px;
  }

  .guirlande img {
  width: 600px;
  overflow: hidden;
}

.guirlande {
  position: absolute;
  right: -15px;
  overflow: hidden;
  top: -70px;
}

   .block_right h2 {
    font-size: 62px;
    margin-top: 20px;
  }

  .btn_resa {
      margin: 30px 0;
  }

    .wrapper_guinguette {
    max-width: 1000px;
    margin: 50px auto;
  }
}

@media screen and (min-width: 1350px) {
  .guinguette {
    text-align: left;
    margin-top: 190px;
    padding-bottom: 100px;
    padding-top: 70px;
  }

  .guirlande img {
  width: 700px;
  overflow: hidden;
}

.guirlande {
  position: absolute;
  right: -20px;
  overflow: hidden;
  top: -80px;
}

   .block_right h2 {
    font-size: 62px;
    margin-top: 20px;
  }

  .btn_resa {
      margin: 30px 0;
  }

    .wrapper_guinguette {
    max-width: 1100px;
    margin: 50px auto;
  }
}
</style>
