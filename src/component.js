import { cloneDeep } from 'lodash'

const generateVueComponent = function (Highcharts) {
  return {
    template: '<div ref="chart"></div>',
    render (h) {
      return h('div', {
        ref: 'chart'
      })
    },
    props: {
      constructorType: {
        type: String,
        default: 'chart'
      },
      options: {
        type: Object,
        required: true
      },
      callback: Function,
      // 可以使用外面传入的Highcharts
      highcharts: {
        type: Object
      },
      // 配置更新后图表是否重新绘制
      updatedRedraw: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      options: {
        handler (newValue) {
          this.chart.update(cloneDeep(newValue), this.updatedRedraw)
        },
        deep: true
      }
    },
    mounted () {
      let HC = this.highcharts || Highcharts

      if (this.options && HC[this.constructorType]) {
        this.chart = HC[constructorType](
          this.$refs.chart,
          cloneDeep(this.options),
          this.callback || null
        )
      } else {
        !this.options
          ? console.warn('The "options" parameter was not passed.')
          : console.warn(
            `'${this.constructorType}' constructor-type is incorrect. Sometimes this error is caused by the fact, that the corresponding module wasn't imported.`
          )
      }
    },
    beforeDestroy () {
      if (this.chart) {
        this.chart.destroy()
      }
    }
  }
}

export default generateVueComponent
