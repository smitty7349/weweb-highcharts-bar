import Highcharts from "highcharts"
import { ref } from "vue"

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

export default function useChart(mainRef) {
  return {
    chart,
    refreshChart: refreshChart.bind(null, mainRef),
  }
}
