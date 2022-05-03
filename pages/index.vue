<template>
  <div>
    <main>
      <hero />
      <restaurant />
      <guinguette />
      <cta />
    </main>
  </div>
</template>

<script>

import Hero from '../components/Index/Hero.vue'
import Restaurant from '../components/Index/Restaurant.vue'
import Guinguette from '../components/Index/Guinguette.vue'
import Cta from '../components/Index/Cta.vue'
export default {
  components: { Hero, Restaurant, Guinguette, Cta },
  name: 'IndexPage',
}
</script>

<style></style>
