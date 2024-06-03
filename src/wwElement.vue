<template>
  <div class="my-element">
    <div ref="mainRef">Loading chart...</div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch, reactive } from "vue"
import Highcharts from "highcharts"

const props = defineProps({
  content: { type: Object, required: true },
})

const emit = defineEmits(["update:content"])

const mainRef = ref(null)

/**
 * @type {{ value: Highcharts.Chart|null }}
 */
const chart = ref(null)
const series = computed(() => props.content.series || [])

const seriesLabelKey = computed(() => props.content.seriesLabelKey)
const seriesDataKey = computed(() => props.content.seriesDataKey)
const seriesWithKeys = computed(() =>
  series.value.map((s) => ({
    name: _.get(s, seriesLabelKey.value),
    data: _.get(s, seriesDataKey.value),
  }))
)

watch(() => [seriesLabelKey.value, seriesDataKey.value], refreshChart, { deep: true })
watch(seriesWithKeys, refreshChart, { deep: true })

const chartTitle = computed(() => props.content.title)
watch(chartTitle, (newVal) => {
  chart.value?.title.update({ text: newVal })
})
const chartTitleAlign = computed(() => props.content.titleAlign)
watch(chartTitleAlign, (newVal) => {
  chart.value?.title.update({ align: newVal })
})
const chartTitleFloating = computed(() => props.content.titleFloating)
watch(chartTitleFloating, (newVal) => {
  chart.value?.title.update({ floating: newVal })
})

const chartSubtitle = computed(() => props.content.subtitle)
watch(chartSubtitle, (newVal) => {
  chart.value?.subtitle.update({ text: newVal })
})

const chartInverted = computed(() => props.content.inverted)
watch(chartInverted, refreshChart)

const xAxisTitle = computed(() => props.content.xAxisTitle)
watch(xAxisTitle, refreshChart)
const xAxisCategories = computed(() => props.content.xAxisCategories)
watch(xAxisCategories, refreshChart, { deep: true })
const xAxisMaxOn = computed(() => props.content.xAxisMaxOn)
watch(xAxisMaxOn, (newVal) => {
  if (newVal)
    emit("update:content", {
      ...props.content,
      xAxisMax: Math.max(...seriesWithKeys.value.map((s) => s.data?.length - 1)),
    })
  else
    emit("update:content", {
      ...props.content,
      xAxisMax: null,
    })
  refreshChart()
})
const xAxisMax = computed(() => props.content.xAxisMax)
watch(xAxisMax, refreshChart)

const yAxisTitle = computed(() => props.content.yAxisTitle)
watch(yAxisTitle, refreshChart)
const yAxisCategories = computed(() => props.content.yAxisCategories)
watch(yAxisCategories, refreshChart, { deep: true })
const yAxisMaxOn = computed(() => props.content.yAxisMaxOn)
watch(yAxisMaxOn, (newVal) => {
  if (newVal)
    emit("update:content", {
      ...props.content,
      yAxisMax: Math.max(...seriesWithKeys.value.map((s) => s.data).flat()),
    })
  else
    emit("update:content", {
      ...props.content,
      yAxisMax: null,
    })
  refreshChart()
})
const yAxisMax = computed(() => props.content.yAxisMax)
watch(yAxisMax, refreshChart)

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
})
onMounted(refreshChart)
function refreshChart() {
  try {
    chart.value?.destroy()
  } catch (e) {
    console.error(e)
  }
  chart.value = Highcharts.chart(mainRef.value, highchartsOptions)
}
</script>
