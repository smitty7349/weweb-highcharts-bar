import { computed, watch } from "vue"

export default function useSeriesOptions(props, refreshChart) {
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

  return {
    series,
    seriesLabelKey,
    seriesDataKey,
    seriesWithKeys,
  }
}
