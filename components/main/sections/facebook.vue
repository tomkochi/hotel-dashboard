<template>
  <div class="facebook">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="section-head">Facebook</div>
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

    <div class="middle d-flex flex-column justify-content-center">
      <div class="w-100">
        <div class="total-followers w-100"><span>
          <animated-number :value="data.followers" :round="true" :duration="2000"/>
        </span> Followers</div>
        <div class="chart">
          <div class="max"></div>
          <div
            :style="{ width: data.target / data.max * 100 + '%' }"
            class="target">
            <div class="target-text">Target {{ data.target }}</div>
          </div>
          <div
            :style="{ width: data.followers / data.max * 100 + '%' }"
            class="followers"></div>
        </div>
        <!-- /.chart -->
        <div class="max-min d-flex justify-content-between">
          <div>0</div>
          <div>{{ data.max }}</div>
        </div>
        <!-- /.d-flex -->
      </div>
      <!-- /.w-100 -->
      <div class="comparison mt-4">
        <div class="stat up">673 visits</div>
        <div class="stat down">259 Shares / Likes</div>
        <div class="stat up">15 New Followers</div>
        <div class="stat up">65 Conversions</div>
      </div>
      <!-- /.comparison -->
    </div>
    <!-- /.middle -->
  </div>
  <!-- /.facebook -->
</template>

<script>
  import AnimatedNumber from "animated-number-vue/src/AnimatedNumber";
  export default {
    name: 'facebook-section',
    props: ['data'],
    components: {AnimatedNumber},
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {

    },
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
  .facebook {
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
      padding-top: 30px;
      .total-followers {
        font-size: 28px;
        font-weight: 300;
        color: #446694;
        margin-bottom: 15px;
        span {
          font-weight: 400;
        }
      }
      .chart {
        width: 100%;
        position: relative;
        .max, .target, .followers {
          position: absolute;
        }
        .max {
          width: 100%;
          height: 20px;
          background: #ededed;
        }
        .target {
          height: 34px;
          top: -7px;
          border-right: 1px solid #979797;
          .target-text {
            position: absolute;
            right: 0;
            top: -24px;
            font-size: 12px;
            font-weight: 300;
            color: #747474;
            -webkit-transform: translateX(50%);
            -moz-transform: translateX(50%);
            -ms-transform: translateX(50%);
            -o-transform: translateX(50%);
            transform: translateX(50%);
          }
        }
        .followers {
          height: 20px;
          background: #446694;
        }
      }
      .max-min {
        font-size: 12px;
        font-weight: 300;
        color: #747474;
        margin-top: 40px;
      }
      .comparison {
        font-size: 16px;
        font-weight: 400;
        color: #747474;
        .stat {
          margin-bottom: 10px;
          position: relative;
          padding-left: 34px;
          &:before {
            position: absolute;
            content: '';
            width: 17px;
            height: 10px;
            left: 0;
            top: 5px;
          }
          &.up:before {
            background: url("~assets/images/stat-up.svg") no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
          }
          &.down:before {
            background: url("~assets/images/stat-down.svg") no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
          }
        }
      }
    }
  }
</style>

