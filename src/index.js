import generateVueComponent from './component'
import Highcharts from 'highcharts'

const Chart = generateVueComponent(Highcharts)

// 作为全局组件提供使用
export default function install (Vue, options = {}) {
  // 可以更改组件的名字，防止和已有组件名字重复
  /**
   *
   * import Highcharts from 'highcharts'
   * import HighchartsVue from 'highcharts-vue-xyc
   *
   *  Highcharts.setOptions({
   *    global: {
   *      useUTC: false
   *    },
   *    lang: {
   *      loading: '加载中...',
   *      shortMonths: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
   *      printChart: '打印图表',
   *      downloadJPEG: '导出jpeg',
   *      downloadPNG: '导出png',
   *      downloadSVG: '导出svg',
   *      downloadPDF: '导出pdf',
   *      noData: '暂无数据',
   *      contextButtonTitle: '导出',
   *      viewFullscreen: '全屏显示',
   *      viewData: '表格显示数据'
   *    }
   * })
   *
   * Vue.use(HighchartsVue. {
   *    tagName: 'charts',
   *    highcharts: Highcharts // 可以在全局设置，然后应用到所有的图表中
   * })
   */
  Vue.component(
    options.tagName || 'highcharts',
    generateVueComponent(options.highcharts || Highcharts)
  )
}

// 可以作为局部组件提供使用
export { Chart }
