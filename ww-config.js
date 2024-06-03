import { inverted, subtitle, title, titleAlign, titleFloating } from "./ww-config/chartOptions"
import {
  series,
  seriesBorderColor,
  seriesBorderRadius,
  seriesBorderWidth,
  seriesColor,
  seriesDataKey,
  seriesLabelKey,
} from "./ww-config/seriesOptions"
import { xAxisCategories, xAxisMax, xAxisMaxOn, xAxisTitle } from "./ww-config/xAxisOptions"
import { yAxisCategories, yAxisMax, yAxisMaxOn, yAxisTitle } from "./ww-config/yAxisOptions"

export default {
  editor: {
    label: {
      en: "Highcharts Bar Chart",
    },
    customStylesPropertiesOrder: [
      ["title", "titleAlign", "titleFloating"],
      "subtitle",
      "inverted",
      "seriesDisplaySettings",
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
    inverted,
    series,
    seriesDataKey,
    seriesLabelKey,
    seriesSettings: {
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
  },
}
