<template>
  <div class="highcharts-bar">
    <div ref="mainRef">Loading chart...</div>
  </div>
</template>

<script>
import { computed, ref, onMounted, watch, reactive } from "vue"
import useChartOptions from "./composables/useChartOptions"
import useXAxisOptions from "./composables/useXAxisOptions"
import useYAxisOptions from "./composables/useYAxisOptions"
import useChart from "./composables/useChart"
import useSeriesOptions from "./composables/useSeriesOptions"
import useLegendOptions from "./composables/useLegendOptions"
import NoDataToDisplay from "highcharts/modules/no-data-to-display"
import Highcharts from "highcharts"
import useTooltipOptions from "./composables/useTooltipOptions"
NoDataToDisplay(Highcharts)

export default {
  props: {
    content: { type: Object, required: true },
  },
  emits: ["update:content"],
  setup(props, context) {
    const mainRef = ref(null)

    const { chart, refreshChart: baseRefresh } = useChart(mainRef)
    const refreshChart = () => {
      baseRefresh(highchartsOptions)
    }

    const { seriesWithKeys } = useSeriesOptions(props, refreshChart)

    const { chartInverted, chartSubtitle, chartTitle, chartTitleAlign, chartTitleFloating } = useChartOptions(
      props,
      chart,
      refreshChart
    )

    const { xAxisCategories, xAxisMax, xAxisTitle } = useXAxisOptions(props, refreshChart, seriesWithKeys, context.emit)

    const { yAxisCategories, yAxisMax, yAxisTitle } = useYAxisOptions(props, refreshChart, seriesWithKeys, context.emit)

    const responsiveRules = computed(() => props.content.responsiveRules)
    watch(responsiveRules, refreshChart)
    const responsiveRulesIsValid = computed(() => {
      return (
        responsiveRules.value?.length &&
        responsiveRules.value.every((rule) => {
          return (
            "chartOptions" in rule &&
            "condition" in rule &&
            typeof rule.chartOptions == "object" &&
            typeof rule.condition == "object"
          )
        })
      )
    })

    const noData = computed(() => props.content.noData)
    watch(noData, refreshChart)

    const { legendAlign, legendLayout, legendBackgroundColor } = useLegendOptions(props, chart)

    const defaultColors = computed(() => props.content.defaultColors)
    watch(defaultColors, refreshChart, { deep: true })

    const caption = computed(() => props.content.caption)
    watch(caption, refreshChart)

    const { tooltipEnabled, tooltipBackgroundColor, tooltipBorderColor, tooltipBorderRadius, tooltipBorderWidth } =
      useTooltipOptions(props, refreshChart)

    const drilldown = computed(() => props.content.drilldown)
    watch(drilldown, refreshChart)

    const highchartsOptions = reactive({
      chart: {
        type: computed(() => (chartInverted.value ? "column" : "bar")),
      },
      colors: defaultColors,
      series: seriesWithKeys,
      title: {
        text: chartTitle,
        align: chartTitleAlign,
        floating: chartTitleFloating,
      },
      subtitle: {
        text: chartSubtitle,
      },
      legend: {
        align: legendAlign,
        layout: legendLayout,
        backgroundColor: legendBackgroundColor,
        verticalAlign: "bottom",
      },
      caption: {
        text: caption,
      },
      tooltip: {
        enabled: tooltipEnabled,
        backgroundColor: tooltipBackgroundColor,
        borderColor: tooltipBorderColor,
        borderRadius: tooltipBorderRadius,
        borderWidth: tooltipBorderWidth,
      },
      xAxis: {
        title: {
          text: xAxisTitle,
        },
        categories: xAxisCategories,
        max: xAxisMax,
      },
      yAxis: {
        title: {
          text: yAxisTitle,
        },
        categories: yAxisCategories,
        max: yAxisMax,
      },
      responsive: {
        rules: computed(() => (responsiveRulesIsValid.value ? responsiveRules.value : [])),
      },
      lang: {
        noData,
      },
      drilldown,
    })
    onMounted(refreshChart)

    function showLoading() {
      chart.value?.showLoading()
    }
    function hideLoading() {
      chart.value?.hideLoading()
    }

    return {
      mainRef,
      showLoading,
      hideLoading,
    }
  },
}
</script>
