import { inverted, subtitle, title, titleAlign, titleFloating } from "./ww-config/chartOptions"
import { series, seriesDataKey, seriesLabelKey } from "./ww-config/seriesOptions"
import { xAxisCategories, xAxisMax, xAxisMaxOn, xAxisTitle } from "./ww-config/xAxisOptions"
import { yAxisCategories, yAxisMax, yAxisMaxOn, yAxisTitle } from "./ww-config/yAxisOptions"

export default {
  editor: {
    label: {
      en: "Highcharts Bar Chart",
    },
    customStylesPropertiesOrder: [["title", "titleAlign", "titleFloating"], "subtitle", "inverted"],
    customSettingsPropertiesOrder: [
      ["series", "seriesLabelKey", "seriesDataKey"],
      ["xAxisTitle", "xAxisCategories", "xAxisMaxOn", "xAxisMax"],
      ["yAxisTitle", "yAxisCategories", "yAxisMaxOn", "yAxisMax"],
    ],
  },
  properties: {
    title,
    titleAlign,
    titleFloating,
    subtitle,
    inverted,
    series,
    seriesDataKey,
    seriesLabelKey,
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
  },
}
