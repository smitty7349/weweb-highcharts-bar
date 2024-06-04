import { computed, watch } from "vue"

export default function useLegendOptions(props, chart) {
  const legendAlign = computed(() => props.content.legendAlign || "center")
  watch(legendAlign, (newVal) => {
    chart.value?.legend.update({ align: newVal })
  })
  const legendLayout = computed(() => props.content.legendLayout || "horizontal")
  watch(legendLayout, (newVal) => {
    chart.value?.legend.update({ layout: newVal })
  })
  const legendBackgroundColor = computed(() => props.content.legendBackgroundColor || "#FFFFFF")
  watch(legendBackgroundColor, (newVal) => {
    chart.value?.legend.update({ backgroundColor: newVal })
  })
  return {
    legendAlign,
    legendLayout,
    legendBackgroundColor,
  }
}
