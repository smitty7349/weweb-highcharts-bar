import { computed, watch } from "vue"

export default function useChartOptions(props, chart, refreshChart) {
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

  const chartBackgroundColor = computed(() => props.content.chartBackgroundColor)
  watch(chartBackgroundColor, (newVal) => {
    chart.value?.update({ chart: { backgroundColor: newVal } })
  })

  const chartBorderColor = computed(() => props.content.chartBorderColor)
  watch(chartBorderColor, (newVal) => {
    chart.value?.update({ chart: { borderColor: newVal } })
  })

  const chartBorderRadius = computed(() => props.content.chartBorderRadius)
  watch(chartBorderRadius, (newVal) => {
    chart.value?.update({ chart: { borderRadius: newVal } })
  })

  const chartBorderWidth = computed(() => props.content.chartBorderWidth)
  watch(chartBorderWidth, (newVal) => {
    chart.value?.update({ chart: { borderWidth: newVal } })
  })

  return {
    chartTitle,
    chartTitleAlign,
    chartTitleFloating,
    chartSubtitle,
    chartInverted,
    chartBackgroundColor,
    chartBorderColor,
    chartBorderRadius,
    chartBorderWidth,
  }
}
