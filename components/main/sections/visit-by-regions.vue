<template>
  <div class="phone">
    <div class="top d-flex justify-content-between align-items-center">
      <div class="section-head">Visits by region (Top 5)</div>
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
      <div class="chart w-75">
        <canvas id="bar-chart" height="250"></canvas>
      </div>
      <!-- /.chart -->
    </div>
    <!-- /.middle -->
  </div>
  <!-- /.phone -->
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'visit-by-region-section',
    props: ['data'],
    data () {
      return {
        chartData: {
          type: 'horizontalBar',
          data: {
            labels: this.data.labels,
            datasets: [
              {
                backgroundColor: ["#ff9eb3", "#ffc8d4","#ff9eb3","#ffc8d4","#ff9eb3"],
                data: this.data.data
              }
            ]
          },
          options: {
            events: [],
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
            animation: {
              duration: 1
            },
            tooltips: {
              enabled: false
            },
            devicePixelRatio: 2,
            scales: {
              xAxes: [{
                gridLines: {
                  drawOnChartArea: false
                },
                ticks: {
                  stepSize: 200,
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Number of visitors',
                  fontColor: '#747474'
                }
              }],
              yAxes: [{
                gridLines: {
                  drawOnChartArea: false
                },
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
      this.createChart('bar-chart', this.chartData);
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
  .phone {
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
    }
  }
</style>

