<template>
  <div class="my-element">
    <div ref="mainRef">Loading chart...</div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue"
import Highcharts from "highcharts"

const props = defineProps({
  content: { type: Object, required: true },
})

const mainRef = ref(null)

/**
 * @type {{ value: Highcharts.Chart|null }}
 */
const chart = ref(null)
const series = ref(props.content.series || [])
const defaultHighchartsOptions = ref({
  chart: {
    type: "bar",
  },
  title: {
    text: props.content.title,
  },
  subtitle: {
    text: props.content.subtitle,
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  yAxis: {
    title: {
      text: "Fruit eaten",
    },
  },
  series,
})
onMounted(() => {
  chart.value = Highcharts.chart(mainRef.value, defaultHighchartsOptions.value)
})

const chartTitle = computed(() => props.content.title)
watch(chartTitle, (newVal) => {
  chart.value?.title.update({ text: newVal })
})

const chartSubtitle = computed(() => props.content.subtitle)
watch(chartSubtitle, (newVal) => {
  chart.value?.subtitle.update({ text: newVal })
})

const chartSeries = computed(() => props.content.series)
watch(
  chartSeries,
  (newVal) => {
    chart.value = Highcharts.chart(mainRef.value, {
      ...defaultHighchartsOptions.value,
      series: newVal,
    })
  },
  { deep: true }
)
</script>
