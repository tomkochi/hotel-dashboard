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

    <section id="main">
      <dashboard/>
    </section>
    <!-- /#main -->

  </div>
</template>
<script>
  import TopNavbar from '@/components/top-navbar'
  import SearchScrollNotification from '@/components/search-scroll-notification'
  import Dashboard from '@/components/main/dashboard'

  export default {

    components: {
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
    }
  }
</style>
