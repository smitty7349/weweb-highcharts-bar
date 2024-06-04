import {
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  caption,
  inverted,
  subtitle,
  title,
  titleAlign,
  titleFloating,
} from "./ww-config/chartOptions"
import { legendAlign, legendBackgroundColor, legendLayout } from "./ww-config/legendOptions"
import {
  series,
  seriesBorderColor,
  seriesBorderRadius,
  seriesBorderWidth,
  seriesColor,
  seriesDataKey,
  seriesLabelKey,
} from "./ww-config/seriesOptions"
import { tooltipEnabled } from "./ww-config/tooltipOptions"
import { xAxisCategories, xAxisMax, xAxisMaxOn, xAxisTitle } from "./ww-config/xAxisOptions"
import { yAxisCategories, yAxisMax, yAxisMaxOn, yAxisTitle } from "./ww-config/yAxisOptions"

export default {
  editor: {
    label: {
      en: "Highcharts Bar Chart",
    },
    customStylesPropertiesOrder: [
      ["title", "titleAlign", "titleFloating"],
      ["subtitle", "caption"],
      "inverted",
      "tooltipEnabled",
      ["chartBackgroundColor", "chartBorderColor", "chartBorderRadius", "chartBorderWidth"],
      "seriesDisplaySettings",
      ["legendAlign", "legendLayout", "legendBackgroundColor"],
    ],
    customSettingsPropertiesOrder: [
      ["series", "seriesLabelKey", "seriesDataKey", "seriesSettings"],
      ["xAxisTitle", "xAxisCategories", "xAxisMaxOn", "xAxisMax"],
      ["yAxisTitle", "yAxisCategories", "yAxisMaxOn", "yAxisMax"],
    ],
  },
  properties: {
    title,
    titleAlign,
    titleFloating,
    subtitle,
    caption,
    tooltipEnabled,
    inverted,
    chartBackgroundColor: backgroundColor,
    chartBorderColor: borderColor,
    chartBorderRadius: borderRadius,
    chartBorderWidth: borderWidth,
    defaultColors: {
      label: {
        en: "Default colors",
      },
      type: "Array",
      defaultValue: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9"],
      options: {
        item: {
          type: "Color",
        },
      },
      responsive: true,
      bindable: true,
      /** wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "An array of colors to use for the series",
      },
      /** wwEditor:end */
    },
    series,
    seriesDataKey,
    seriesLabelKey,
    seriesDisplaySettings: {
      label: {
        en: "Series display settings",
      },
      type: "Array",
      options: {
        item: {
          type: "Object",
          options: {
            item: {
              seriesColor,
              seriesBorderWidth,
              seriesBorderColor,
              seriesBorderRadius,
            },
          },
        },
      },
      defaultValue: [],
      responsive: true,
      bindable: true,
      /** wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "An array of objects specifying settings for each series",
      },
      /** wwEditor:end */
    },
    xAxisTitle,
    xAxisCategories,
    xAxisMaxOn,
    xAxisMax,
    yAxisTitle,
    yAxisCategories,
    yAxisMaxOn,
    yAxisMax,
    responsiveRules: {
      label: {
        en: "Responsive rules",
      },
      type: "Info",
      defaultValue: null,
      responsive: true,
      bindable: true,
      section: "settings",
      /** wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip:
          "An array of objects specifying new chart options to put in place under certain conditions" +
          "\nLike this: \n" +
          "`[{ chartOptions: {...}, condition: {...}}, {}...]`\n" +
          "See https://api.highcharts.com/highcharts/responsive.rules",
      },
      /** wwEditor:end */
    },
    noData: {
      label: {
        en: "No data message",
      },
      type: "Text",
      defaultValue: "No data to display",
      responsive: true,
      bindable: true,
      /** wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "The message to display when there is no data",
      },
      /** wwEditor:end */
    },
    legendAlign,
    legendLayout,
    legendBackgroundColor,
  },
  actions: [
    {
      label: "Show loading",
      action: "showLoading",
    },
    {
      label: "Hide loading",
      action: "hideLoading",
    },
  ],
}
