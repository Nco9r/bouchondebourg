<template>
  <section class="guinguette">
    <div class="wrapper_guinguette">
      <div class="block_right">
        <h2>La guinguette des vignerons</h2>
      </div>
      <div class="block_left"></div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.guinguette {
  background-image: url('~assets/img/png/guinguette.png');
  height: 500px;
  margin-top: 220px;
  background-position: 50% -20%;
  background-size: cover;
  padding: 40px 20px 20px 20px;
}

.block_right h2 {
  color: var(--white);
  font-family: "Fjalla One", sans-serif;
  -webkit-text-stroke: 1px var(--white);
  font-size: 42px;
  margin-top: 30px;
  z-index: 1;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0px;
}
</style>
