<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '../components/Default/TheHeader.vue'
import TheFooter from '../components/Default/TheFooter.vue'
export default {
  components: { TheHeader, TheFooter },
}
</script>

<style>
html {
  font-family: lato, Times, serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--primary);
  background-image: url('~assets/img/png/bck.png');
  background-position: cover;
  background-repeat: repeat;
  background-size: 90%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --primary: #213426;
  --secondary: #b98f65;
  --white: #fff;
  --filter-slider: linear-gradient(
    180deg,
    rgba(33, 53, 38, 0) 0%,
    rgba(33, 53, 38, 0.8) 100%
  );
}

@font-face {
  font-family: Fjalla;
  font-weight: 500;
  src: url('~assets/fonts/FjallaOne-Regular.ttf');
}

@font-face {
  font-family: Arapey;
  src: url('~assets/fonts/Arapey-Regular.ttf');
}

@font-face {
  font-family: ArapeyItalic;
  src: url('~assets/fonts/Arapey-Italic.ttf');
}

button {
  border: none;
  background-color: var(--secondary);
  padding: 12px 18px;
  font-family: 'Fjalla', sans-serif;
  font-size: 16px;
  color: var(--white);
  cursor: pointer;
  transition: all .3s;
}

button:hover {
  background-color: var(--primary);
  color: var(--secondary);

 
}
</style>
