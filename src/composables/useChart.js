import Highcharts from "highcharts"
import { ref } from "vue"

export default function useChart(mainRef) {
  /**
   * @type {{ value: Highcharts.Chart|null }}
   */
  const chart = ref(null)

  function refreshChart(mainRef, options = {}) {
    try {
      chart.value?.destroy()
    } catch (e) {
      console.error(e)
    }
    chart.value = Highcharts.chart(mainRef.value, options)
  }

  return {
    chart,
    refreshChart: refreshChart.bind(null, mainRef),
  }
}
