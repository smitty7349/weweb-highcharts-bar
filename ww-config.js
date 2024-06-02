export default {
  editor: {
    label: {
      en: "Highcharts Bar Chart",
    },
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
      type: "Text",
      defaultValue: "name",
      responsive: true,
      bindable: true,
      section: "settings",
    },
    seriesDataKey: {
      label: {
        en: "Series Value Key",
      },
      type: "Text",
      defaultValue: "data",
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
        tooltip: "An array of x-axis categories: `['Apples', 'Bananas', 'Oranges']`",
      },
      /** wwEditor:end */
    },
  },
}
