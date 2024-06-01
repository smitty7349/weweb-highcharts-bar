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
    },
    subtitle: {
      label: {
        en: "Subtitle",
      },
      type: "Text",
      defaultValue: "by fruit",
      responsive: true,
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
  },
}
