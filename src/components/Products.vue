<template>
  <div class="container products">
    <div class="container h-100">
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
          <div class="product-test">
            <h3 class="d-inline-block">Products list</h3>
            <button class="btn btn-primary float-right"  @click="addNew">Add Product</button>

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
                  </tbody>
                </table>
            </div>

          </div>
      </div>

    <!-- Modal -->
    <div class="modal fade" id="product" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="productLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                </div>

                <div class="form-group">
                  <textarea name="description" class="form-control" placeholder="Product description" v-model='product.description' cols="30" rows="10"></textarea>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr>

                <div class="form-group">
                  <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                </div>

                <div class="form-group">
                  <input type="text" placeholder="Product tags" v-model="product.tag" class="form-control">
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage()" class="form-control">
                </div>

                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addProduct()">Save Changes</button>
          </div>
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
      products:[],
      product: {
        name: null,
        description: null,
        price: null,
        tag: null,
        image: null
      },
      activeItem: null
    }
  },
  firestore () {
    return {
        products: db.collection('products')
    }
  },
  methods: {
    uploadImage(){},
    addNew() {
      $('#product').modal('show');
    },
    updateProduct(){},
    editProduct(product){},
    deleteProduct(doc) {},
    readData() {},
    addProduct(){
      this.$firestore.products.add(this.product);
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>

</style>