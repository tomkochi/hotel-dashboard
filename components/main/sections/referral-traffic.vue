<template>
  <div class="referral-traffic">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="section-head">Referral Traffic</div>
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
      <div class="d-flex flex-column w-100">
        <div class="chart w-100 pt-4 d-flex justify-content-center align-items-center">
          <canvas id="doughnut-chart" height="250"></canvas>
        </div>
        <!-- /.chart -->
        <hr class="w-100">
        <div class="d-flex justify-content-between">
          <div
            v-for="(label, i) in data.labels "
            class="legend">
            <span
              :style="{ backgroundColor: chartData.data.datasets[0].backgroundColor[i] }"
              class="box"></span>
            <span class="label">{{ label }}</span>
          </div>
        </div>
        <!-- /.d-flex -->
      </div>
    </div>
    <!-- /.middle -->
  </div>
  <!-- /.referral-traffic -->
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'referral-traffic-section',
    props: ['data'],
    data () {
      return {
        chartData: {
          type: 'doughnut',
          data: {
            labels: this.data.labels,
            datasets: [
              {
                backgroundColor: ["#4a90e2", "#446694","#ffc038"],
                borderWidth: 0,
                data: this.data.data
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
            cutoutPercentage: 50,
            rotation: 1.5 * Math.PI,
            devicePixelRatio: 3,
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  display: false
                },
              }],
              yAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  display: false
                }
              }]
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
      this.createChart('doughnut-chart', this.chartData);
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
  .referral-traffic {
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
      .legend {
        .box {
          display: inline-block;
          width: 15px;
          height: 15px;
        }
        .label {
          margin-left: 17px;
        }
      }
    }
  }
</style>

