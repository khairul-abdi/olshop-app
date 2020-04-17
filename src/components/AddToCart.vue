<template>
  <div>
    <button class="btn btn-primary">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'add-to-cart',
  props: {
    name: String,
    price: String,
    productId: String
  },
  data() {
    return {
      productName: this.name,
      productPrice: this.price,
      product_id: this.id
    }
  }
}
</script>