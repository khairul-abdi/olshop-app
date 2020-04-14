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

        <hr>

        <h3>Products list</h3>

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.data().name }}</td>
                <td>{{ product.data().price }}</td>
                <td>
                  <button class="btn btn-primary">Edit</button>
                  <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
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
      products:[],
      product: {
        name: null,
        price: null
      }
    }
  },
  methods: {
    deleteProduct(doc) {
      alert(doc)
    },
    readData() {
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc)
          // console.log('Hello doc : ',doc.data())
        });
      });
    },
    saveData() {
      db.collection("products").add(this.product)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.readData()
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    },
    resetData() {
      // Object.assign(this.$data, this.$options.data())
    }
  },
  created() {
    this.readData()
  }
}
</script>

<style lang="scss" scoped>

</style>