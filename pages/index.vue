<template>
  <div class="full-screen">

    <section id="top-navbar">
      <top-navbar/>
    </section>
    <!-- /#top-navbar -->

    <section id="search-scroll-notification">
      <search-scroll-notification/>
    </section>
    <!-- /#ssn -->

    <section id="main"
      :style="{ 'padding-left': showSideBar ? '95px' : '20px' }">
      <dashboard/>
    </section>
    <!-- /#main -->

    <section id="side-bar" :style="{ width: sidebarWidth }">
      <side-bar/>
    </section>
    <!-- /#side-bar -->

    <section id="search" :style="{ width: showSearch ? '340px' : 0 }">
      <search-hotels/>
    </section>
    <!-- /#search -->

  </div>
</template>
<script>
  import TopNavbar from '@/components/top-navbar'
  import SearchScrollNotification from '@/components/search-scroll-notification'
  import Dashboard from '@/components/main/dashboard'
  import SideBar from "../components/side-bar";
  import SearchHotels from "../components/search-hotels";

  export default {
    data () {
      return {
        showSideBar: false,
        showMenuText: false,
        showSearch: false
      }
    },
    mounted () {
      this.$bus.$on('menu-button', () => {
        this.showSideBar = !this.showSideBar
      })
      this.$bus.$on('show-menu-text', () => {
        this.showMenuText = true
      })
      this.$bus.$on('hide-menu-text', () => {
        this.showMenuText = false
      })
      this.$bus.$on('show-search', () => {
        this.showSearch = true
      })
      this.$bus.$on('hide-search', () => {
        this.showSearch = false
      })
    },
    computed: {
      sidebarWidth () {
        if (!this.showSideBar) return '0'
        if (this.showSideBar && !this.showMenuText) {
          return '75px'
        }
        if (this.showSideBar && this.showMenuText) {
          return '170px'
        }
      }
    },
    components: {
      SearchHotels,
      SideBar,
      TopNavbar,
      SearchScrollNotification,
      Dashboard
    }
  }
</script>

<style scoped lang="scss">
  .full-screen {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    #top-navbar {
      position: relative;
      z-index: 2000;
    }
    section#main {
      background: #f8f7f6;
      height: calc(100vh - 120px);
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
    section#side-bar {
      height: calc(100vh - 120px);
      overflow: hidden;
      background: rgba(64, 56, 66, 0.87);
      position: fixed;
      left: 0;
      top: 120px;
      -webkit-transition: width 0.3s;
      -moz-transition: width 0.3s;
      -ms-transition: width 0.3s;
      -o-transition: width 0.3s;
      transition: width 0.3s;
    }
    section#search {
      overflow: hidden;
      position: fixed;
      left: 0;
      top: 80px;
      -webkit-transition: width 0.3s;
      -moz-transition: width 0.3s;
      -ms-transition: width 0.3s;
      -o-transition: width 0.3s;
      transition: width 0.3s;
    }
  }
</style>
