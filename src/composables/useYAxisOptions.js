import { computed, watch } from "vue"

export default function useYAxisOptions(props, refreshChart, seriesWithKeys, emit) {
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

  return {
    yAxisTitle,
    yAxisCategories,
    yAxisMaxOn,
    yAxisMax,
  }
}
