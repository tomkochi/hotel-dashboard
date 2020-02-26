<template>
  <div class="web">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="section-head">Web</div>
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
        <div class="total-visits">
          <div class="number">
            <animated-number :value="totalVisits" :round="true" :duration="totalVisits / 5"/>
          </div>
          <div class="text">Total Visits</div>
        </div>
        <!-- /.total-visits -->
      </div>
      <!-- /.left -->
      <div class="v-line"></div>
      <div class="right">
        <div class="label">Last 7 days</div>
        <div class="chart border">
          <canvas id="line-chart" height="30"></canvas>
        </div>
        <!-- /.chart -->
      </div>
      <!-- /.right -->

    </div>
    <!-- /.middle -->

    <div class="comparison text-right">
      <span class="stat down">6%</span>
    </div>
    <!-- /.comparison -->

  </div>
  <!-- /.updates -->
</template>

<script>
  import Chart from 'chart.js'
  import AnimatedNumber from "animated-number-vue/src/AnimatedNumber";

  export default {
    name: 'web-section',
    props: ['data'],
    components: {AnimatedNumber},
    data() {
      return {
        chartData: {
          type: 'line',
          data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [
              {
                backgroundColor: 'transparent',
                borderColor: '#8492bb',
                borderWidth: 2,
                data: this.data
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            elements: {
              line: {
                tension: 0
              },
              point:{
                radius: 0
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 70,
            rotation: 1.5 * Math.PI,
            animation: { animateRotate : true, animateScale: true },
            tooltips: {
              enabled: false
            },
            scales: {
              xAxes: [{
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                ticks: {
                  display: false
                },
                gridLines: {
                  display: false
                }
              }],
            },
            devicePixelRatio: 3,
            layout: {
              padding: {
                left: -10,
              }
            }
          },
        },
      }
    },
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    },
    mounted () {
      this.createChart('line-chart', this.chartData);
    },
    computed: {
      totalVisits () {
        return this.data.reduce((a, b) => a + b )
      }
    }
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
  .web {
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
      .left {
        .total-visits {
          width: 100px;
          .number {
            font-size: 50px;
            font-weight: 300;
            color: #8492bb;
          }
          .text {
            font-size: 12px;
            font-weight: 400;
            color: #747474;
          }
        }
      }
      .right {
        .label {
          font-size: 12px;
          font-weight: 300;
          color: #747474;
          margin-bottom: 10px;
        }
        .chart {
          width: 100%;
          canvas {
            width: 50%;
          }
        }
      }
    }

    .comparison {
      position: absolute;
      width: 100%;
      bottom: 0;
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
    .v-line {
      height: 100%;
      border-right: 1px solid #ededed;
      margin: 0 25px;
    }
  }
</style>

