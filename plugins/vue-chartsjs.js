import { Line, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  name: 'line-chart',
  extends: Line,
  mixins: [reactiveProp],
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  },
  watch: {
    data: {
      handler: function (val) {
        this._chart.update()
      },
      deep: true
    }
  }
}
