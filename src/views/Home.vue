<template>
  <div class="home">
    <Hero/>
    <Products/>
    <About/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Products from '@/sections/Products.vue';
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Products,
    About
  }
}
</script>

<style lang="scss" scoped>

</style>
