<template>
  <div class="home">
    <Navbar></Navbar>

    <div v-scroll-spy="{offset: 55}">
      <div>
        <Hero/>
      </div>
      <div>
        <Products/>
      </div>
      <div>
        <About/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue';
import Products from '@/sections/Products.vue';
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    Products,
    About
  }
}
</script>

<style lang="scss" scoped>

</style>
