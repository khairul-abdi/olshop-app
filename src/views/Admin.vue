<template>
  <div class="admin">
    
        <div class="page-wrapper default-theme sidebar-bg bg1 boder-radius-on"
          :class="[toggle ? 'toggled' : '']">
        <a 
          id="show-sidebar" 
          class="btn btn-sm btn-dark mt-3"
          @click="showSidebar"
        >
          <i class="fas fa-bars" style="color: #fff;"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a>olshop app</a>
                    <div id="pin-sidebar" @click="pinMenu">
                      <i class="fa fa-eject fa-rotate-270 mr-3"></i>
                    </div>
                    <div id="close-sidebar" @click="closeMenu">
                      <i class="fas fa-times"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="img/user.jpg" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Jhon
                            <strong>Smith</strong>
                        </span>
                        <span class="user-role">Administrator</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        
                         <li>
                            <router-link to="/admin/overview">
                                <i class="fa fa-chart-line"></i>
                                <span>Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products">
                                <i class="fab fa-amazon"></i>
                                <span>Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/admin/profile">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#" @click="logout()">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
            <!-- sidebar-footer  -->
            
        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
          <router-view/>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'Admin',
  components: {
    Hero
  },
  data() {
    return {
      toggle : true
    }
  },
  methods: {
    closeMenu() {
      this.toggle = !this.toggle
    },
    showSidebar() {
      // this.toggle = true
      $(".page-wrapper").toggleClass("toggled");
    },
    pinMenu() {
      if ($(".page-wrapper").hasClass("pinned")) {
        // unpin sidebar when hovered
        $(".page-wrapper").removeClass("pinned");
        $("#sidebar").unbind( "hover");
      } else {
        $(".page-wrapper").addClass("pinned");
        $("#sidebar").hover(
            function () {
                console.log("mouseenter");
                $(".page-wrapper").addClass("sidebar-hovered");
            },
            function () {
                console.log("mouseout");
                $(".page-wrapper").removeClass("sidebar-hovered");
            }
        )
      }
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
