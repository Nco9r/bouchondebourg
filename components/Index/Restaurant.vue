<template>
  <section class="restaurant">
    <div class="wrapper_restaurant">
      <div class="block_right">
        <div class="wrapper_right">
          <img src="~assets/img/svg/quote.svg" alt="" />
          <h2>Une cuisine de vignerons</h2>
          <div class="content_right">
            <p>
              Une cuisine de Vignerons ? Mais qu’est-ce que c’est ? C’est une
              cuisine généreuse, authentique et de partage. L’expression de nos
              terroirs, d’hommes passionnés et de leur savoir-faire. En résumé,
              c’est un moment unique autour d’une belle assiette et de bonnes
              bouteilles de vins. Et juste un détail bien sûr : une vue
              panoramique sur le fleuve La Dordogne et ses paysages alentours.
            </p>
            <p>
              Profitez de votre passage chez nous pour découvrir l’histoire du
              vignoble des Côtes de Bourg et de tous ses vignerons. Vous aurez
              la possibilité de déguster plus de 170 cuvées de cette appellation
              et de les retrouver à la vente à prix propriété à la boutique de
              la Maison des Vins située juste en face.
            </p>
          </div>
          <div class="btn_resa">
            <a
              href="https://bookings.howmany.fr/results?rid=37&pid=1001"
              target="_blank"
            >
              <button>Réserver une table</button>
            </a>
          </div>
        </div>
      </div>
      <div class="block_left">
        <div class="wrapper_left">
          <div class="box_img">
            <img src="~assets/img/svg/bottles.svg" alt="" />
            <img src="~assets/img/png/slide_5.jpg" alt="" />
          </div>
          <div class="djset">
            <p>
              Des animations de vignerons, des animations musicales et plein
              d’autres surprises vous attendent, alors rejoignez-nous sur les
              réseaux pour en profiter.
            </p>
            <div class="sociaux">
              <a
                href="https://www.facebook.com/lebouchondebourg"
                target="_blank"
              >
                <img src="~assets/img/svg/facebook.svg" alt=""
              /></a>
              <a
                href="https://www.instagram.com/lebouchondebourg/?hl=fr"
                target="_blank"
              >
                <img src="~assets/img/svg/instagram.svg" alt=""
              /></a>
              <a
                href="https://www.linkedin.com/company/le-bouchon-cuisinedevigneron/"
                target="_blank"
                ><img src="~assets/img/svg/linkedin.svg" alt=""
              /></a>
            </div>
            <hr />
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
.block_right {
  margin-top: 30px;
  padding: 10px 20px 20px 20px;
}

.wrapper_right h2 {
  color: var(--primary);
  font-family: 'Fjalla One', sans-serif;
  -webkit-text-stroke: 1px var(--primary);
  font-size: 42px;
  margin-top: 10px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
}

/* .wrapper_right h2::after {
  content: 'Une cuisine de vignerons';
  font-family: Fjalla, sans-serif;
  font-size: 36px;
  position: absolute;
  left: 2.5px;
  top: 1px;
  text-transform: uppercase;
  -webkit-text-stroke: 1px var(--primary);
  color: transparent;
} */

.wrapper_right img:nth-child(1) {
  width: 60px;
}

.content_right {
  margin-top: 30px;
}

.content_right p {
  font-family: Arapey, sans-serif;
  color: var(--primary);
  font-size: 20px;
  margin-bottom: 20px;
  line-height: 28px;
}

.btn_resa button {
  margin-top: 20px;
}

.wrapper_left {
  position: relative;
  margin-top: 80px;
}

.box_img img:nth-child(1) {
  position: absolute;
  top: -160px;
  width: 170px;
  right: 0;
}

.box_img img:nth-child(2) {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.djset {
  width: 100%;
  height: 230px;
  margin-top: -5px;
  padding: 20px;
  position: absolute;
  background-color: var(--primary);
}
.djset p {
  font-family: Fjalla, sans-serif;
  color: var(--white);
  line-height: 24px;
}
.sociaux {
  margin-top: 30px;
}

.wrapper_left .sociaux img {
  width: 25px;
  margin-right: 15px;
}

hr {
  border: none;
  width: 100%;
  height: 1px;
  background: var(--secondary);
  margin-top: 20px;
}
</style>
