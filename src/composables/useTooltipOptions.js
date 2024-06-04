import { computed, watch } from "vue"

export default function useTooltipOptions(props, refreshChart) {
  const tooltipEnabled = computed(() => props.content.tooltipEnabled)
  watch(tooltipEnabled, refreshChart)

  const tooltipBackgroundColor = computed(() => props.content.tooltipBackgroundColor)
  watch(tooltipBackgroundColor, refreshChart)
  const tooltipBorderColor = computed(() => props.content.tooltipBorderColor)
  watch(tooltipBorderColor, refreshChart)
  const tooltipBorderRadius = computed(() => props.content.tooltipBorderRadius)
  watch(tooltipBorderRadius, refreshChart)
  const tooltipBorderWidth = computed(() => props.content.tooltipBorderWidth)
  watch(tooltipBorderWidth, refreshChart)

  return {
    tooltipEnabled,
    tooltipBackgroundColor,
    tooltipBorderColor,
    tooltipBorderRadius,
    tooltipBorderWidth,
  }
}
