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

    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-9">
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
        </div>
        <div class="col-md-9">
          Total Price
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

  .float-right{
    color: #7f7f7f;
    font-size: 16px;
    text-shadow: 0 1px 0 #fff;
    font-weight: bold;
    line-height: 1;
  }

  .float-right:hover {
    cursor: pointer;
    color: #3f3f3f;
    transition: all 0.5s;
  }

</style>