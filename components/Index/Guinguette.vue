<template>
  <section class="guinguette">
    <div class="guirlande">
      <img src="~assets/img/svg/guirlande.svg" alt="" />
    </div>
    <div class="wrapper_guinguette">
      <div class="block_right">
        <div class="ouverture">
          <p>Ouverture prochainement</p>
        </div>
        <h2>La guinguette des vignerons</h2>
        <p>
          Ce nouvel établissement va ouvrir ses portes pour le mois de août 2022
          ! Terrains de pétanques, mölkky, palets breton : de nombreux jeux
          seront présents pour vous divertir autour d'un verre et quelques
          tapas...
        </p>
        <p>
          Ce n'est pas tout, la Guinguette des Vignerons vous proposera des
          animations musicales comme des concerts, DJ Set, artiste
          indépendant... Le petit (gros) + ? Une vue panoramique à vous couper
          le souffle ! Vous l'aurez compris, c'est un nouveau spot à découvrir. À
          très vite !
        </p>
        <div class="sociaux">
          <a
            href="https://www.facebook.com/laguinguettedesvignerons"
            target="_blank"
          >
            <img src="~assets/img/svg/facebook.svg" alt=""
          /></a>
          <a
            href="https://www.instagram.com/laguinguettedesvignerons/?hl=fr"
            target="_blank"
          >
            <img src="~assets/img/svg/instagram.svg" alt=""
          /></a>
        </div>
        <!-- <div class="btn_resa">
          <a
            href="https://bookings.howmany.fr/results?rid=37&pid=1001"
            target="_blank"
          >
            <button>Réserver une table</button>
          </a>
        </div> -->
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
  background-position: 50% -30%;
  background-size: cover;
  overflow: hidden;

  position: relative;
  padding: 40px 20px 20px 20px;
  text-align: center;
}

.ouverture {
  color: #b98f65;
  font-size: 30px;
  margin-bottom: -20px;
}

.ouverture p {
  color: #b98f65 !important;
  margin-top: 100px !important;
}
.sociaux {
  margin-top: 20px;
}

.sociaux a {
  margin-right: 15px;
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
  color: #faeed4;
  font-family: 'Fjalla One', sans-serif;
  font-size: 42px;
  margin-top: 10px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0px;
}

.block_right p {
  font-family: Arapey, sans-serif;
  color: #faeed4;
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
    right: -10px;
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
