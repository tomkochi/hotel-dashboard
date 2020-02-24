<template>
  <div class="visit-by-region">
    <div class="d-flex justify-content-between align-items-center">
      <div class="section-head">View by region (Top 5)</div>
      <div class="menu">
        <svg width="21" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#ededed"/>
          <circle cx="10.5" cy="2.5" r="2.5" fill="#ededed"/>
          <circle cx="18.5" cy="2.5" r="2.5" fill="#ededed"/>
        </svg>
      </div>
      <!-- /.menu -->
    </div>
    <!-- /.d-flex -->
  </div>
  <!-- /.updates -->
</template>

<script>
  export default {
    name: 'visit-by-region-section'
  }
</script>

<style scoped lang="scss">
  * {
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
  .visit-by-region {
    .section-head {
      font-size: 16px;
      font-weight: 400;
      color: #747474;
    }
    .menu {
      cursor: pointer;
      &:hover {
        svg circle {
          fill: #b6b6b6;
        }
      }
    }
  }
</style>
