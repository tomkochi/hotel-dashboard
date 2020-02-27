<template>
  <div class="bookings d-flex flex-column justify-content-between">
    <div class="d-flex justify-content-between align-items-center">
      <div class="section-head">Bookings</div>
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
      <div class="d-flex justify-content-between align-items-center">
        <div class="chart">
          <div class="heading text-right">Available Rooms vs Booked</div>
          <div class="total d-flex">
            <div
              @mouseenter="roomsToShow = exc"
              @mouseleave="roomsToShow = total"
              class="executive"
              :style="{ width: exc / total * 100 + '%' }"></div>
            <div
              @mouseenter="roomsToShow = dlx"
              @mouseleave="roomsToShow = total"
              class="deluxe"
              :style="{ width: dlx / total * 100 + '%' }"></div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="min">0</div>
            <div class="max">{{ total }}</div>
          </div>
          <!-- /.d-flex -->
        </div>
        <!-- /.chart -->
        <div class="total-booking">
          <animated-number :value="roomsToShow" :round="true" :duration="300"/>
        </div>
      </div>
    </div>
    <!-- /.d-flex -->
    <div class="legends d-flex">
      <div class="legend dlx">Deluxe</div>
      <div class="legend exc">Executive</div>
    </div>
  </div>
  <!-- /.updates -->
</template>

<script>
  import AnimatedNumber from "animated-number-vue/src/AnimatedNumber";

  export default {
    name: 'bookings-section',
    components: {AnimatedNumber},
    props: {
      total: Number,
      exc: Number,
      dlx: Number
    },
    data () {
      return {
        roomsToShow: this.exc + this.dlx
      }
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
  .bookings {
    height: 100%;
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
    .chart {
      width: 70%;
      .heading {
        font-size: 12px;
        font-weight: 300;
        color: #747474;
        margin-bottom: 8px;
      }
      .total {
        height: 30px;
        background: #ededed;
      }
      .executive {
        height: 30px;
        background: #ffb338;
        cursor: pointer;
      }
      .deluxe {
        height: 30px;
        background: #f6d48c;
        cursor: pointer;
      }
      .min, .max {
        font-size: 12px;
        font-weight: 300;
        color: #747474;
      }
    }
    .total-booking {
      font-size: 28px;
      color: #9b9b9b;
      padding-left: 20px;
    }
    .legends {
      .legend {
        padding-left: 18px;
        position: relative;
        font-size: 16px;
        font-weight: 400;
        color: #747474;
        &.dlx {
          margin-right: 15%;
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 10px;
          height: 10px;
        }
        &.dlx:before {
          background: #f6d48c;
        }
        &.exc:before {
          background: #ffb338;
        }
      }
    }
  }
</style>
