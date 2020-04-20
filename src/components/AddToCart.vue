<template>
  <div>
    <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'add-to-cart',
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        productImage: this.image,
        productId: this.pId,
        productQuantity: 1
      }
    }
  },
  methods: {
    addToCart() {
      $('#miniCart').modal('show')
      this.$store.commit('addToCart', this.item)
    }
  }
}
</script>