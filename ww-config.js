export default {
  editor: {
    label: {
      en: "Highcharts Bar Chart",
    },
    customSettingsPropertiesOrder: [["series", "seriesLabelKey", "seriesDataKey"], ["xAxisCategories"], ["yAxisTitle"]],
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
    subtitle: {
      label: {
        en: "Subtitle",
      },
      type: "Text",
      defaultValue: "by fruit",
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
        tooltip: "An array of x-axis categories: `['Apples', 'Bananas', 'Oranges']`",
      },
      /** wwEditor:end */
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
  },
}
