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
        <div class="col-md-8 pr-5">
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
        <div class="col-md-4 pl-5">
          <p>
            Total Price :{{ this.$store.getters.totalPrice | currency }}
          </p>

          <form>
            <card class='stripe-card'
              :class='{ complete }'
              stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
              :options='stripeOptions'
              @change='complete = $event.complete'
            />

            <button class='pay-with-stripe btn btn-primary mt-4' @click='pay' :disabled='!complete'>Pay with credit card</button>
          </form>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  name: 'Checkout',
  components: {
    Login,
    Card
  },
  methods: {
    increaseQty(id) {
      this.$store.commit('increment', id)
    },
    decreaseQty(id) {
      this.$store.commit('decrement', id)
    },
    pay () {
      createToken().then(data => console.log(data.token))
    }
  }
}
</script>

<style>

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


.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>