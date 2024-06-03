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
    title: {
      label: {
        en: "Title",
      },
      type: "Text",
      defaultValue: "Fruit Consumption",
      responsive: true,
      bindable: true,
    },
    titleAlign: {
      label: {
        en: "Title Align",
      },
      type: "TextRadioGroup",
      defaultValue: "center",
      options: {
        choices: [
          { value: "left", icon: "align-left" },
          { value: "center", icon: "align-center" },
          { value: "right", icon: "align-right" },
        ],
      },
      responsive: true,
      bindable: true,
      /** wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: "The alignment of the title `'left'`, `'center'`, or `'right'`",
      },
      /** wwEditor:end */
    },
    titleFloating: {
      label: {
        en: "Title Floating",
      },
      type: "OnOff",
      defaultValue: false,
      responsive: true,
      bindable: true,
      /** wwEditor:start */
      bindingValidation: {
        type: "boolean",
        tooltip: "Whether the title should float or not (`true` or `false`)",
      },
      /** wwEditor:end */
    },
    subtitle: {
      label: {
        en: "Subtitle",
      },
      type: "Text",
      defaultValue: "by fruit",
      responsive: true,
      bindable: true,
    },
    inverted: {
      label: {
        en: "Inverted",
      },
      type: "OnOff",
      defaultValue: false,
      responsive: true,
      bindable: true,
    },
    series: {
      label: {
        en: "Series",
      },
      defaultValue: [
        {
          name: "Jane",
          data: [1, 0, 4],
        },
        {
          name: "John",
          data: [5, 7, 3],
        },
      ],
      type: "Info",
      options: {
        text: "Bind series data",
      },
      bindable: "list",
      responsive: true,
      states: true,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip: "A collection of series data in array format: `[{ name: 'Jane', data: [0, 1, 2] }, {...}, ...]`",
      },
      /* wwEditor:end */
    },
    seriesLabelKey: {
      label: {
        en: "Series Label Key",
      },
      type: "ObjectPropertyPath",
      defaultValue: "['name']",
      responsive: true,
      bindable: true,
      section: "settings",
      options: (content) => {
        const series = (!content.series || Array.isArray(content.series) ? content.series : content.series.series) || []
        if (!Array.isArray(series) || !series[0]) return null
        return { object: series[0] }
      },
    },
    seriesDataKey: {
      label: {
        en: "Series Value Key",
      },
      type: "ObjectPropertyPath",
      defaultValue: "['data']",
      responsive: true,
      bindable: true,
      section: "settings",
      options: (content) => {
        const series = (!content.series || Array.isArray(content.series) ? content.series : content.series.series) || []
        if (!Array.isArray(series) || !series[0]) return null
        return { object: series[0] }
      },
    },
    xAxisTitle: {
      label: {
        en: "X Axis Title",
      },
      type: "Text",
      defaultValue: "",
      responsive: true,
      bindable: true,
      section: "settings",
    },
    xAxisCategories: {
      label: {
        en: "X Axis Categories",
      },
      type: "Array",
      defaultValue: ["Apples", "Bananas", "Oranges"],
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
        tooltip: "An array of x-axis categories: e.g. `['Apples', 'Bananas', 'Oranges']`",
      },
      /** wwEditor:end */
    },
    xAxisMaxOn: {
      label: {
        en: "X Axis Max On",
      },
      type: "OnOff",
      defaultValue: false,
      responsive: true,
      bindable: true,
      section: "settings",
      /** wwEditor:start */
      bindingValidation: {
        type: "boolean",
        tooltip: "Whether to use a max limit for the X Axis (`true` or `false`)",
      },
      /** wwEditor:end */
    },
    xAxisMax: {
      label: {
        en: "X Axis Max",
      },
      type: "Number",
      defaultValue: null,
      responsive: true,
      bindable: true,
      section: "settings",
      /** wwEditor:start */
      bindingValidation: {
        type: "number",
        tooltip: "The maximum value of the x-axis (e.g. `10`)",
      },
      /** wwEditor:end */
      hidden: (content) => !content.xAxisMaxOn,
    },
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
    },
  },
}
