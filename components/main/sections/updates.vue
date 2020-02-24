<template>
  <div class="updates d-flex flex-column justify-content-between">
    <div class="d-flex justify-content-between align-items-center">
      <div class="section-head">Updates</div>
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
    <div>
      <h4>Great!</h4>
      <div class="message">You have <span>15</span> new followers on facebook</div>
    </div>
    <div class="comparison text-right">
      <span class="stat up">3.2%</span>
    </div>
    <!-- /.comparison -->
  </div>
  <!-- /.updates -->
</template>

<script>
  export default {
    name: 'updates-section'
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
  .updates {
    height: 100%;
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
    h4 {
      font-size: 28px;
      font-weight: 300;
      color: #446694;
      margin: 0;
    }
    .message {
      font-size: 18px;
      font-weight: 300;
      color: #446694;
      max-width: 80%;
      span {
        color: #ff5d53;
      }
    }
    .comparison {
      .stat {
        font-size: 16px;
        font-weight: 400;
        color: #747474;
        position: relative;
        padding-left: 30px;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 5px;
          width: 17px;
          height: 10px;
          -webkit-background-size: contain;
          background-size: contain;
        }
        &.up:before {
          background: url("~assets/images/stat-up.svg") no-repeat;
        }
        &.down:before {
          background: url("~assets/images/stat-down.svg") no-repeat;
        }
      }
    }
  }
</style>
