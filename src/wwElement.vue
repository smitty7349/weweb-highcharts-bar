<template>
  <div class="highcharts-bar">
    <div ref="mainRef">Loading chart...</div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch, reactive } from "vue"
import useChartOptions from "./composables/useChartOptions"
import useXAxisOptions from "./composables/useXAxisOptions"
import useYAxisOptions from "./composables/useYAxisOptions"
import useChart from "./composables/useChart"
import useSeriesOptions from "./composables/useSeriesOptions"
import NoDataToDisplay from "highcharts/modules/no-data-to-display"
import Highcharts from "highcharts"
NoDataToDisplay(Highcharts)

const props = defineProps({
  content: { type: Object, required: true },
})

const emit = defineEmits(["update:content"])

const mainRef = ref(null)

const { chart, refreshChart: baseRefresh } = useChart(mainRef)
const refreshChart = () => {
  baseRefresh(highchartsOptions)
}

const { seriesWithKeys } = useSeriesOptions(props, refreshChart)

const { chartInverted, chartSubtitle, chartTitle, chartTitleAlign, chartTitleFloating } = useChartOptions(
  props,
  chart,
  refreshChart
)

const { xAxisCategories, xAxisMax, xAxisTitle } = useXAxisOptions(props, refreshChart, seriesWithKeys, emit)

const { yAxisCategories, yAxisMax, yAxisTitle } = useYAxisOptions(props, refreshChart, seriesWithKeys, emit)

const responsiveRules = computed(() => props.content.responsiveRules)
watch(responsiveRules, refreshChart)
const responsiveRulesIsValid = computed(() => {
  return (
    responsiveRules.value?.length &&
    responsiveRules.value.every((rule) => {
      return (
        "chartOptions" in rule &&
        "condition" in rule &&
        typeof rule.chartOptions == "object" &&
        typeof rule.condition == "object"
      )
    })
  )
})

const noData = computed(() => props.content.noData)
watch(noData, refreshChart)

const highchartsOptions = reactive({
  chart: {
    type: computed(() => (chartInverted.value ? "column" : "bar")),
  },
  series: seriesWithKeys,
  title: {
    text: chartTitle,
    align: chartTitleAlign,
    floating: chartTitleFloating,
  },
  subtitle: {
    text: chartSubtitle,
  },
  xAxis: {
    title: {
      text: xAxisTitle,
    },
    categories: xAxisCategories,
    max: xAxisMax,
  },
  yAxis: {
    title: {
      text: yAxisTitle,
    },
    categories: yAxisCategories,
    max: yAxisMax,
  },
  responsive: {
    rules: computed(() => (responsiveRulesIsValid.value ? responsiveRules.value : [])),
  },
  lang: {
    noData,
  },
})
onMounted(refreshChart)
</script>
