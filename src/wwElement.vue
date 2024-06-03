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

const yAxisTitle = computed(() => props.content.yAxisTitle)
watch(yAxisTitle, refreshChart)
const yAxisCategories = computed(() => props.content.yAxisCategories)
watch(yAxisCategories, refreshChart, { deep: true })

const highchartsOptions = reactive({
  chart: {
    type: computed(() => (chartInverted.value ? "column" : "bar")),
  },
  title: {
    text: chartTitle,
    align: chartTitleAlign,
  },
  subtitle: {
    text: chartSubtitle,
  },
  xAxis: {
    title: {
      text: xAxisTitle,
    },
    categories: xAxisCategories,
  },
  yAxis: {
    title: {
      text: yAxisTitle,
    },
    categories: yAxisCategories,
  },
  series: seriesWithKeys,
})
onMounted(refreshChart)
function refreshChart() {
  chart.value?.destroy()
  chart.value = Highcharts.chart(mainRef.value, highchartsOptions)
}
</script>
