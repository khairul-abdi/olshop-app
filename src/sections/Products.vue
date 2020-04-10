<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-4">Our Products</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product1.jpg" class="card-img-top">
            
            <div class="card-body">
              <h5 class="card-title">Surface Book 2</h5>
              <p class="card-text">
                Complete your device with Office 365 and get 1TB cloud storage, Excel, Word, PowerPoint & more. Select your suite during checkout.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product2.jpg" class="card-img-top">
            
            <div class="card-body">
              <h5 class="card-title">Surface Laptop 2</h5>
              <p class="card-text">
                Style and speed. Go beyond the traditional with new Surface Laptop 2. Featuring improved performance and the full Windows 10 Home experience.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product3.jpg" class="card-img-top">
            
            <div class="card-body">
              <h5 class="card-title">Surface Studio 2</h5>
              <p class="card-text">
                The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

      </div>
       <div class="row mt-5">
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product1.jpg" class="card-img-top">
            
            <div class="card-body">
              <h5 class="card-title">Surface Book 2</h5>
              <p class="card-text">
                Complete your device with Office 365 and get 1TB cloud storage, Excel, Word, PowerPoint & more. Select your suite during checkout.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product2.jpg" class="card-img-top">
            
            <div class="card-body">
              <h5 class="card-title">Surface Laptop 2</h5>
              <p class="card-text">
                Style and speed. Go beyond the traditional with new Surface Laptop 2. Featuring improved performance and the full Windows 10 Home experience.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product3.jpg" class="card-img-top">
            
            <div class="card-body">
              <h5 class="card-title">Surface Studio 2</h5>
              <p class="card-text">
                The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display.
              </p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products"
}
</script>

<style lang="scss" scoped>
  .products {
    margin-top: 7rem;
    // margin-top: 30rem;
    background: #f2f2f2;
    padding-bottom: 3rem;
  }
</style>