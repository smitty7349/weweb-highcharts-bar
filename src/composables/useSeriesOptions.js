import { computed, watch } from "vue"

export default function useSeriesOptions(props, refreshChart) {
  const series = computed(() => props.content.series || [])

  const seriesDisplaySettings = computed(() => props.content.seriesDisplaySettings || [])

  const labelKey = computed(() => props.content.seriesLabelKey)
  const dataKey = computed(() => props.content.seriesDataKey)
  const seriesWithKeys = computed(() => {
    return series.value.map((s, index) => ({
      name: _.get(s, labelKey.value),
      data: _.get(s, dataKey.value),
      color: seriesDisplaySettings.value[index]?.seriesColor || "#007bff",
      borderWidth: seriesDisplaySettings.value[index]?.seriesBorderWidth || 1,
      borderColor: seriesDisplaySettings.value[index]?.seriesBorderColor || "#007bff",
      borderRadius: seriesDisplaySettings.value[index]?.seriesBorderRadius || 6,
    }))
  })

  watch(() => [labelKey.value, dataKey.value], refreshChart, { deep: true })
  watch(seriesWithKeys, refreshChart, { deep: true })

  return {
    series,
    seriesLabelKey: labelKey,
    seriesDataKey: dataKey,
    seriesWithKeys,
  }
}
