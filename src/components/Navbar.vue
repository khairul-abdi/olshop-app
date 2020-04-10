<template>
  <div class="navbar-container">
    <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="img/logo.png">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>

      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

  .navbar-container {
    text-align: center;
  }

  .nav-item a.nav-link{
    font-size: 18px;
    font-weight: bold;
    color: #2c3e50 !important;
  }

  .nav-item a.nav-link:hover{
    color: #42b983 !important;
  }

  @media (min-width: 992px) { 
    .navbar.custom-nav {
      background-color: #fff !important;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .form-inline {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 576px) and (max-width: 767px) {
    .form-inline {
      display: inline-block !important;
    }
  }

</style>
