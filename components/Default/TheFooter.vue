<template>
  <footer>
    <div class="box_footer">
      <div class="wrapper_footer">
        <div class="border"></div>
        <img src="~assets/img/svg/vignes.svg" alt="" />
        <!-- <h4>Le bouchon est ouvert du mardi au samedi</h4> -->
        <h4>Restaurant ouvert du Mardi au Samedi</h4>
        <div class="box_horaire">
          <div class="box_item">
            <div class="item">
              <div class="day">
                <p>Lundi</p>
              </div>
              <div class="horaire">
                <p>Fermé</p>
              </div>
            </div>
            <div class="item">
              <div class="day">
                <p>Mardi</p>
              </div>
              <div class="horaire">
                <p>12h-14h30</p>
                <p>19h-00h</p>
              </div>
            </div>
            <div class="item">
              <div class="day">
                <p>Mercredi</p>
              </div>
              <div class="horaire">
                <p>12h-14h30</p>
                <p>19h-00h</p>
              </div>
            </div>
            <div class="item">
              <div class="day">
                <p>Jeudi</p>
              </div>
              <div class="horaire">
                <p>12h-14h30</p>
                <p>19h-00h</p>
              </div>
            </div>
            <div class="item">
              <div class="day">
                <p>Vendredi</p>
              </div>
              <div class="horaire">
                <p>12h-14h30</p>
                <p>19h-00h</p>
              </div>
            </div>
            <div class="item">
              <div class="day">
                <p>Samedi</p>
              </div>
              <div class="horaire">
                <p>12h-14h30</p>
                <p>19h-00h</p>
              </div>
            </div>
            <div class="item">
              <div class="day">
                <p>Dimanche</p>
              </div>
              <div class="horaire">
                <p>Fermé</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="adresse">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.23450025677!2d-0.5552370999999999!3d45.040462999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48002badfe7e9d7f%3A0xa02dbdfe9f08c063!2sRestaurant%20Le%20Bouchon!5e0!3m2!1sfr!2sfr!4v1654604477089!5m2!1sfr!2sfr"
            width="95%"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>1 Place de l'Éperon, 33710 BOURG</p>
          <div class="btn_resa">
            <a
              href="https://ul.waze.com/ul?place=ChIJjfy8_q0rAEgRItfj9axQT6I&ll=45.04040190%2C-0.55519760&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
            >
              <button>S'y rendre</button>
            </a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="left">
          <p>contact@lebouchondebourg.com</p>
          <p> 05 57 94 02 37</p>
          <p>Mentions légales</p>
        </div>
        <div class="sociaux">
          <a href="https://www.facebook.com/lebouchondebourg" target="_blank">
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper_footer {
  padding: 20px;
  border: 3px solid var(--primary);

  margin: 100px 20px 20px 5px;
  position: relative;
  pointer-events: all;
}

.border {
  position: absolute;
  top: -15px;
  right: -15px;
  left: 8px;
  bottom: -15px;
  z-index: -1;
  border: 3px solid var(--secondary);
  background-color: transparent;
  pointer-events: all;
}

.adresse iframe {
  margin-bottom: 30px;
}

/* .wrapper_footer::after {
  content: '';
  position: absolute;
  top: -15px;
  width: 94%;
  height: 500px;
  pointer-events: all;
  left: 10px;
  border: 3px solid var(--secondary);
} */

.wrapper_footer img {
  position: absolute;
  right: -10px;
  top: -100px;
  width: 170px;
}

.wrapper_footer h4 {
  margin-top: 60px;
  font-family: 'Fjalla One', sans-serif;
  -webkit-text-stroke: 1px var(--primary);
  font-size: 32px;
  color: var(--primary);
  text-transform: uppercase;
  position: relative;
}

/* .wrapper_footer h4::after {
  content: 'Le bouchon est ouvert du mardi au samedi';
  font-family: Fjalla, sans-serif;
  font-size: 32px;
  position: absolute;
  left: 2px;
  top: 2px;
  text-transform: uppercase;
  -webkit-text-stroke: 1px var(--primary);
  color: transparent;
} */

.box_horaire {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
}

.box_horaire::-webkit-scrollbar {
  display: none;
}

.box_item {
  margin-top: 30px;
  display: flex;
  flex-flow: row nowrap;
}

.item {
  display: flex;
  flex-flow: column;
  width: 90px;
}

.day p {
  font-family: Fjalla, sans-serif;
  color: var(--secondary);
  font-size: 16px;
}

.horaire {
  margin-top: 5px;
}

.horaire p {
  font-family: Fjalla, sans-serif;
  color: var(--primary);
  font-size: 16px;
  margin-bottom: 5px;
}

hr {
  border: none;
  width: 100%;
  height: 2px;
  background: var(--secondary);
  margin-top: 20px;
}

.adresse {
  text-align: center;
  margin-top: 30px;
}

.adresse p {
  font-family: Fjalla, sans-serif;
  color: var(--primary);
  font-size: 18px;
  margin-bottom: 20px;
}

.copyright {
  padding: 10px 20px 50px 20px;
}

.copyright .left p {
  font-family: Fjalla, sans-serif;
  color: var(--primary);
  margin-bottom: 10px;
}

.sociaux img {
  width: 25px;
  margin-right: 10px;
  margin-top: 20px;
}

@media screen and (min-width: 1024px) {
  .wrapper_footer {
    padding: 20px;
    border: 3px solid var(--primary);
    margin: 100px 70px 20px 55px;
    position: relative;
    pointer-events: all;
  }
  .wrapper_footer h4 {
    text-align: center;
    font-size: 42px;
  }

  .wrapper_footer img {
    position: absolute;
    right: -10px;
    top: -140px;
    width: 220px;
  }

  .box_horaire {
    margin: auto;
    width: 900px;
    justify-content: space-around;
  }

  .item {
    display: flex;
    flex-flow: column;
    width: 110px;
  }

  .day p {
    font-family: Fjalla, sans-serif;
    color: var(--secondary);
    font-size: 18px;
  }

  .horaire p {
    font-size: 18px;
  }
  hr {
    width: 300px;
    margin: 30px auto;
  }

  .copyright {
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
    align-items: center;
  }

  .copyright .left {
    display: flex;
  }

  .copyright .left p {
    margin-right: 40px;
  }

  .sociaux img {
    width: 25px;
    margin-right: 10px;
    margin-top: 0px;
  }
}

@media screen and (min-width: 1360px) {
  .wrapper_footer {
    padding: 20px;
    border: 3px solid var(--primary);

    margin: 100px 270px 20px 255px;
    position: relative;
    pointer-events: all;
  }
}
</style>
