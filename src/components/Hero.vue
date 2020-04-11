<template>
  <div id="home" class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title">
              Online Shop For Everyone
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque doloremque, doloribus provident asperiores vel eos quam eligendi et sunt aspernatur. Placeat veritatis in libero minus adipisci tempora repellendus iste non!
            </p>
            <div class="hero-btn mt-5">
                <button class="btn custom-btn btn-info mr-4">Explore</button>
                <button class="btn custom-btn btn-outline-secondary">Products</button>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <img src="/img/svg/landing-page/1.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .btn-outline-secondary {
      margin-top: 10px;
    }
  } 

  .hero {
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
</style>