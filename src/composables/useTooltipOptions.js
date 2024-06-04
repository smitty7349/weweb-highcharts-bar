import { computed, watch } from "vue"

export default function useTooltipOptions(props, refreshChart) {
  const tooltipEnabled = computed(() => props.content.tooltipEnabled)
  watch(tooltipEnabled, refreshChart)

  return {
    tooltipEnabled,
  }
}
