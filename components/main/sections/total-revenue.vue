<template>
  <div class="total-revenue d-flex flex-column justify-content-between">
    <div class="d-flex justify-content-between align-items-center">
      <div class="section-head">Total Revenue</div>
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
        <div class="chart d-flex align-items-center">
          <div class="heading text-right">Occupancy</div>
          <div
            @mouseenter.self="select('maximum')"
            @mouseleave.self="select('this week')"
            class="maximum"></div>
          <div
            @mouseenter.stop="select('last week')"
            @mouseleave.self="select('this week')"
            class="last-week"
            :style="{ width: lastW / maximum* 100 + '%' }"></div>
          <div
            class="this-week"
            :style="{ width: thisW / maximum * 100 + '%' }"></div>
          <div class="scale w-100 d-flex justify-content-between">
            <div class="min">0</div>
            <div class="max">100%</div>
          </div>
          <!-- /.d-flex -->
        </div>
        <!-- /.chart -->
        <div
          class="revenue"
          :class="{
            'maximum': selected === 'maximum',
            'this-week': selected === 'this week',
            'last-week': selected === 'last week'
          }">$<animated-number :value="amountToShow" :round="true" :duration="300"/></div>
      </div>
    </div>
    <!-- /.d-flex -->
    <div class="d-flex justify-content-between align-items-center">
      <div class="legends d-flex">
        <div class="legend last-week">Last week</div>
        <div class="legend this-week">This week</div>
      </div>
      <!-- /.legends -->
      <div class="comparison text-right">
        <span
          class="stat"
          :class="{ 'up': lastW <= thisW, 'down': lastW > thisW }">{{ ((thisW / lastW * 100) - 100).toFixed(2) }}%</span>
      </div>
      <!-- /.comparison -->
    </div>
    <!-- /.d-flex -->
  </div>
  <!-- /.updates -->
</template>

<script>
  import AnimatedNumber from "animated-number-vue"

  export default {
    name: 'bookings-section',
    props: {
      maximum: Number,
      lastW: Number,
      thisW: Number
    },
    data () {
      return {
        amountToShow: this.thisW,
        selected: 'this week',
      }
    },
    methods: {
      select (w) {
        this.selected = w
        if (w === 'maximum') {
          this.amountToShow = this.maximum
        }
        if (w === 'last week') {
          this.amountToShow = this.lastW
        }
        if (w === 'this week') {
          this.amountToShow = this.thisW
        }
      }
    },
    components: {
      AnimatedNumber
    }
  }
</script>

<style scoped lang="scss">
  .total-revenue {
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
      position: relative;
      .heading {
        font-size: 12px;
        font-weight: 300;
        color: #747474;
        margin-bottom: 8px;
      }
      .maximum {
        position: absolute;
        width: 100%;
        height: 30px;
        background: #ededed;
      }
      .last-week {
        position: absolute;
        height: 30px;
        background: #c9e2ff;
      }
      .this-week {
        position: absolute;
        height: 15px;
        background: #4a90e2;

      }
      .maximum, .last-week, .this-week {
        cursor: pointer;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .scale {
        position: absolute;
        top: 28px;
        .min, .max {
          font-size: 12px;
          font-weight: 300;
          color: #747474;
        }
      }
    }
    .revenue {
      font-size: 28px;
      white-space: nowrap;
      padding-left: 20px;
      &.maximum {
        color: #9b9b9b;
      }
      &.this-week {
        color: #4a90e2;
      }
      &.last-week {
        color: #c9e2ff;
      }
    }
    .legends {
      .legend {
        padding-left: 18px;
        position: relative;
        font-size: 16px;
        font-weight: 400;
        color: #747474;
        white-space: nowrap;
        &.last-week {
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
        &.last-week:before {
          background: #c9e2ff;
        }
        &.this-week:before {
          background: #4a90e2;
        }
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

