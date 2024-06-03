import { computed, watch } from "vue"

export default function useXAxisOptions(props, refreshChart, seriesWithKeys, emit) {
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

  return {
    xAxisTitle,
    xAxisCategories,
    xAxisMaxOn,
    xAxisMax,
  }
}
