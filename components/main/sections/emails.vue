<template>
  <div class="emails">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="section-head">Emails</div>
      <div class="menu">
        <svg width="21" height="5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#ededed"/>
          <circle cx="10.5" cy="2.5" r="2.5" fill="#ededed"/>
          <circle cx="18.5" cy="2.5" r="2.5" fill="#ededed"/>
        </svg>
      </div>
      <!-- /.menu -->
    </div>
    <!-- /.top -->

    <div class="middle d-flex justify-content-between align-items-center">
      <div class="left">
        <div class="number">
          <animated-number :value="data.total" :round="true" :duration="4000"/>
        </div>
        <div class="text">Total calls</div>
      </div>
      <!-- /.left -->
      <div class="v-line"></div>
      <div class="center">
        <div class="label">Last updated: 10.15 am</div>
        <div class="text">New inquiry on your website</div>
      </div>
      <!-- /.center -->
      <div class="right">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="23" viewBox="0 0 11 23">
          <path fill="none" fill-rule="evenodd" stroke="#D3D3D3" d="M1396 394L1404.513 405.221 1396 416.996" transform="translate(-1395 -394)"/>
        </svg>
      </div>
      <!-- /.right -->
    </div>
    <!-- /.middle -->
  </div>
  <!-- /.emails -->
</template>

<script>
  import AnimatedNumber from "animated-number-vue/src/AnimatedNumber";

  export default {
    name: 'phone-section',
    props: ['data'],
    components: {AnimatedNumber},
    data() {
      return {}
    },
    methods: {},
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
  .emails {
    position: relative;
    height: 100%;
    .top {
      position: absolute;
      width: 100%;
      .section-head {
        font-size: 16px;
        font-weight: 400;
        color: #747474;
      }
      .menu {
        cursor: pointer;
        -webkit-transform: translate(8px, -14px);
        -moz-transform: translate(8px, -14px);
        -ms-transform: translate(8px, -14px);
        -o-transform: translate(8px, -14px);
        transform: translate(8px, -14px);
        &:hover {
          svg circle {
            fill: #b6b6b6;
          }
        }
      }
    }

    .middle {
      height: 100%;
      .text {
        font-size: 12px;
        font-weight: 400;
        color: #747474;
      }
      .label {
        font-size: 12px;
        font-weight: 300;
        color: #747474;
      }
      .left {
        .number {
          font-size: 50px;
          font-weight: 300;
          color: #8492bb;
        }
      }
      .center {
        .number {
          font-size: 50px;
          font-weight: 300;
          color: #ff5d53;
        }
      }
    }

    .v-line {
      height: 100%;
      border-right: 1px solid #ededed;
      margin: 0 25px;
    }
  }
</style>

