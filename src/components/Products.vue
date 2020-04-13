<template>
  <div class="container products">
    <div class="container h-100 mt-5">
        <div class="container intro h-100">
          <div class="container row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <h3>Products Page</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur iure, consequatur facilis minima laudantium quo quisquam magnam est officia.</p>
            </div>
             <div class="col-md-6">
              <img src="/img/svg/admin/products.svg" class="img-fluid">
            </div>
          </div>
        </div>

        <hr>

        <h3>Basic CRUD (create/read/update/delete) in Firebase and Vue</h3>
        <div class="product-test">
          <div class="form-group">
            <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
          </div>

          <div class="form-group">
            <input type="text" placeholder="Price"  @keyup.enter="saveData" v-model="product.price" class="form-control">
          </div>

          <div class="form-group"> 
            <button @click="saveData" class="btn btn-primary">Save Data</button>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import { fb, db } from '../firebase'

export default {
  name: "Products",
  data() {
    return {
      product: {
        name: null,
        price: null
      }
    }
  },
  methods: {
    saveData() {
      db.collection("products").add(this.product)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.resetData()
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    },
    resetData() {
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style lang="scss" scoped>

</style>