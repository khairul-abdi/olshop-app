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
                    <tr v-for="(product, index) in products" :key="index">
                      <td>
                        {{ product.name }}
                      </td>

                      <td>
                        {{ product.price }}
                      </td>

                      <td>
                        <button class="btn btn-primary mr-2" @click="editProduct(product)">Edit</button>
                        <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                      </td>
                    </tr>
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
            <h5 class="modal-title" id="productLabel">{{ titleModal }} Product</h5>
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

                <!-- <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage()" class="form-control">
                </div> -->
                <div class="custom-file form-group">
                  <input type="file" class="custom-file-input" id="customFile">
                  <label class="custom-file-label" for="customFile">Product image</label>
                </div>

                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addProduct()" v-if="modal == 'new'">Save Changes</button>
            <button type="button" class="btn btn-primary" @click="updateProduct()" v-if="modal == 'edit'">Apply Changes</button>
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
      activeItem: null,
      modal: null,
      titleModal: null
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
      this.modal = 'new'
      this.titleModal = 'Add'
      $('#product').modal('show');
    },
    updateProduct(){
      this.$firestore.products.doc(this.product.id).update(this.product)

      Toast.fire({
        icon: 'success',
        title: 'Updated successfully'
      })

      $('#product').modal('hide');
    },
    editProduct(product){
      this.modal = 'edit'
      this.titleModal = 'Edit'
      this.product = product
      $('#product').modal('show');
    },
    deleteProduct(doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

          this.$firestore.products.doc(doc['.key']).delete()

          Toast.fire({
            icon: 'success',
            title: 'Deleted successfully'
          })
        }
      })
    },
    readData() {},
    addProduct(){
      this.$firestore.products.add(this.product);

        Toast.fire({
          icon: 'success',
          title: 'Product created successfully'
        })

      $('#product').modal('hide');
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>

</style>