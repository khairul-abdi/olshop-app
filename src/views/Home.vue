<template>
  <div class="home">
    <Navbar></Navbar>

    <div v-scroll-spy="{offset: 55}">
      <div>
        <Hero/>
      </div>
      <div>
        <products-list></products-list>
      </div>
      <div>
        <About/>
      </div>
    </div>
    <div>
      <Login></Login>
      
      <mini-cart></mini-cart>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Products from '@/sections/Products.vue';
import About from '@/components/About.vue'
import Login from '@/components/Login.vue'


export default {
  name: 'Home',
  components: {
    Hero,
    Products,
    About,
    Login
  }
}
</script>

<style lang="scss" scoped>

</style>
