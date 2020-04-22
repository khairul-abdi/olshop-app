<template>
  <div class="checkout">
    <div>
      <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link class="navbar-brand" to="/">
            <img src="img/logo.png">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link disabled" href="#">Products</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link disabled" href="#">About</router-link>
              </li>
            
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Get Start</a>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <Login></Login>

    <div class="container table-responsive main pt-5">
      <div class="row">
        <!-- <div class="col-md-9">
          <h4 class="py-4">Checkout page</h4>
          <ul>
            <li v-for="(item, index) in this.$store.state.cart" :key="index" class="media">
              <img :src="item.productImage" width="80px" class="align-self-center mr-3">
              <div class="media-body">
                <h5 class="mt-0">{{ item.productName }}
                  <span class="float-right" @click="$store.commit('removeFromCart', item)">X</span>
                </h5>
                <p class="mt-0">{{ item.productPrice | currency }}</p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div> -->
        <div class="col-md-9">
          <table class="table table-responsive table-stipped">
            <thead>
              <tr>
                <th>#</th>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in this.$store.state.cart" :key="index" >
                <td>
                  <!-- <span @click="$store.commit('removeFromCart', item)" class="remove-item"></span> -->
                </td>
                <td>
                  <img :src="item.productImage" style="width:80px">
                  {{ item.productName }}
                </td>
                <td class="align-middle">
                  <div class="center">
                    <div class="input-group">
                      <span class="input-group-btn">
                        <button 
                          type="button" 
                          class="btn btn-danger mr-1" 
                          @click="decreaseQty(item.productId)"
                        >
                          <i class="fa fa-minus fa-xs"></i>
                        </button>
                      </span>
                      <input type="text" :value="item.productQuantity" class="form-control input-number rounded" style="width:40px">
                      <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-success ml-1"
                        @click="increaseQty(item.productId)"
                      >
                        <i class="fa fa-plus fa-xs"></i>
                      </button>
                    </span>
                    </div>
                  </div>
                </td>
                <td class="align-middle">{{ item.productPrice | currency }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-3">
          Total Price :{{ this.$store.getters.totalPrice | currency }}
          
          <button class="btn btn-primary mt-4"><i class="fas fa-cart-arrow-down mr-2"></i>Proceed Checkout</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Login from './Login.vue'

export default {
  name: 'Checkout',
  components: {
    Login
  },
  methods: {
    increaseQty(id) {
      this.$store.commit('increment', id)
    },
    decreaseQty(id) {
      this.$store.commit('decrement', id)
    }
  }
}
</script>

<style lang="scss" scoped>

.nav-item a.nav-link{
  font-size: 18px;
  font-weight: bold;
}

a.active{
  color: #2c3e50 !important;
}

.nav-item a.nav-link:hover{
  color: #42b983 !important;
  cursor: pointer;
  transition: all 0.5s;
}

@media (min-width: 992px) { 
  .navbar.custom-nav {
    background-color: #fff !important;
  }
}

  .remove-item {
  color: #7f7f7f;
  font-size: 16px;
  text-shadow: 0 1px 0 #fff;
  font-weight: bold;
  line-height: 1;
}

.remove-item:hover {
  cursor: pointer;
  color: #3f3f3f;
  transition: all 0.5s;
}

.checkout div.main {
  margin-top: 100px !important;
}


</style>