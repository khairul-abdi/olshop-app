<template>
  <div class="container products">
    <div class="container h-100">
        <div class="container intro">
          <div class="container row justify-content-center align-items-center">
            <div class="col-md-6">
              <h3>Products Page</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur iure, consequatur facilis minima laudantium quo quisquam magnam est officia.</p>
            </div>
             <div class="col-md-6">
              <img src="/img/svg/admin/products.svg" width="300" class="img-fluid ml-5">
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
                  <vue-editor v-model="product.description"></vue-editor>
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
                  <b-form-tags
                    input-id="tags-remove-on-delete"
                    :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
                    v-model="product.tags"
                    tag-variant="primary"
                    separator=" ,;"
                    placeholder="Enter product tags"
                    remove-on-delete
                    class="mb-2"
                  ></b-form-tags>
                </div>

                <div class="custom-file form-group">
                  <input type="file" class="custom-file-input" id="customFile" @change="uploadImage">
                  <label class="custom-file-label" for="customFile">Product image</label>
                </div>

                <div class="form-groupt d-flex">
                  <div class="mt-3 mr-1"  v-for="(image, index) in product.images" :key="index">
                    <div class="img-wrapp">
                      <img :src="image" width="80px">
                      <span class="delete-img" @click="deleteImage(image, index)">X</span>
                    </div>
                  </div>
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
import { VueEditor } from "vue2-editor";
import { fb, db } from '../firebase'

export default {
  name: "Products",
  components: {
    VueEditor
  },
  data() {
    return {
      products:[],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
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
    uploadImage(e){

      if(e.target.files[0]) {
        let file = e.target.files[0]
        var storageRef = fb.storage().ref('products/' + Math.random() + '_'  + file.name);
        let uploadTask = storageRef.put(file)
  
        uploadTask.on('state_changed', (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, (error) => {
          // Handle unsuccessful uploads
        }, () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.product.images.push(downloadURL)
            console.log('File available at', downloadURL);
          });
        });
      }
    }, 
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img)

      this.product.images.splice(index, 1)
      image.delete().then(function() {
        // File deleted successfully
        console.log('image deleted')
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred')
      });
    },
    reset(){
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      }
    },
    addNew() {
      this.modal = 'new'
      this.titleModal = 'Add'
      this.reset()
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
      // console.log(product)
      this.modal = 'edit'
      this.titleModal = 'Edit'
      this.product = product
      $('#product').modal('show');
    },
    deleteProduct(doc) {
      this.product = doc
      
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
          this.$firestore.products.doc(this.product.id).delete()

          Toast.fire({
            icon: 'success',
            title: 'Deleted successfully'
          })
        }
      })
    },
    addProduct(){
      this.$firestore.products.add(this.product);

        Toast.fire({
          icon: 'success',
          title: 'Product created successfully'
        })

      $('#product').modal('hide');
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-wrapp{
    position: relative;
  }

  .img-wrapp span.delete-img{
    font-weight: bold;
    color: red;
    position: absolute;
    top: -14px;
    left: -2px;
  }

  .img-wrapp span.delete-img:hover{
    cursor: pointer;
    color: black;
  }
</style>