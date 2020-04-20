<template>
  <div class="mini-cart">
    <!-- Modal -->
      <div class="modal fade" id="miniCart" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">My Bag</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
              <button to="/checkout" class="btn btn-primary" @click="checkOut">Checkout</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MiniCart',
  methods: {

    checkOut() {
      $('#miniCart').modal('hide')
      this.$router.push('/checkout')
    }
  }
}
</script>

<style lang="css">

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