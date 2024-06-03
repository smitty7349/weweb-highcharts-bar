import { inverted, subtitle, title, titleAlign, titleFloating } from "./ww-config/chartOptions"
import { series, seriesDataKey, seriesLabelKey } from "./ww-config/seriesOptions"
import { xAxisCategories, xAxisMax, xAxisMaxOn, xAxisTitle } from "./ww-config/xAxisOptions"

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
    yAxisTitle: {
      label: {
        en: "Y Axis Title",
      },
      type: "Text",
      defaultValue: "Fruit eaten",
      responsive: true,
      bindable: true,
      section: "settings",
    },
    yAxisCategories: {
      label: {
        en: "Y Axis Categories",
      },
      type: "Array",
      defaultValue: [],
      options: {
        item: {
          type: "Text",
        },
      },
      responsive: true,
      bindable: true,
      section: "settings",
      /** wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "An array of y-axis categories: e.g. `[0, 5, 10]`",
      },
      /** wwEditor:end */
    },
    yAxisMaxOn: {
      label: {
        en: "Y Axis Max On",
      },
      type: "OnOff",
      defaultValue: false,
      responsive: true,
      bindable: true,
      section: "settings",
      /** wwEditor:start */
      bindingValidation: {
        type: "boolean",
        tooltip: "Whether to use a max limit for the Y Axis (`true` or `false`)",
      },
      /** wwEditor:end */
    },
    yAxisMax: {
      label: {
        en: "Y Axis Max",
      },
      type: "Number",
      defaultValue: null,
      responsive: true,
      bindable: true,
      section: "settings",
      /** wwEditor:start */
      bindingValidation: {
        type: "number",
        tooltip: "The maximum value of the y-axis (e.g. `10`)",
      },
      /** wwEditor:end */
      hidden: (content) => !content.yAxisMaxOn,
    },
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
