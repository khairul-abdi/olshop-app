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
                    <a>pro sidebar</a>
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
                            <span>General</span>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-tachometer-alt"></i>
                                <span class="menu-text">Dashboard</span>
                                <span class="badge badge-pill badge-warning">New</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Dashboard 1
                                            <span class="badge badge-pill badge-success">Pro</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-book"></i>
                                <span class="menu-text">Documentation</span>
                                <span class="badge badge-pill badge-primary">Beta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-calendar"></i>
                                <span class="menu-text">Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-folder"></i>
                                <span class="menu-text">Examples</span>
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
            <div id="overlay" class="overlay"></div>
            <div class="container-fluid p-5">
                <div class="row">
                    <div class="form-group col-md-12">
                        <h2>Pro Sidebar</h2>
                        <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
                    </div>

                    <div class="form-group col-md-12">
                        <a 
                          id="toggle-sidebar" 
                          class="btn btn-secondary rounded-0" 
                          @click="closeMenu"
                        >
                            <span>Toggle Sidebar</span>
                        </a>
                        <a id="pin-sidebar" 
                          class="btn btn-outline-secondary rounded-0" 
                          href="#"
                          @click="pinMenu"
                        >
                            <span>Pin Sidebar</span>
                        </a>
                    </div>
                </div>

            </div>
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
