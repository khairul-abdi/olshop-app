<template>
  <div class="home">
    <Hero/>
    <!-- Products -->
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  }
}
</script>

<style lang="scss" scoped>

</style>
