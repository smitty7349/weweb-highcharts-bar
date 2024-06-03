export const series = {
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
}
export const seriesLabelKey = {
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
}
export const seriesDataKey = {
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
}
export const seriesColor = {
  label: {
    en: "Series Color",
  },
  type: "Color",
  defaultValue: "#007bff",
  responsive: true,
  bindable: true,
  section: "settings",
  /* wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The color of the series",
  },
  /* wwEditor:end */
}
export const seriesBorderColor = {
  label: {
    en: "Series Border Color",
  },
  type: "Color",
  defaultValue: "#007bff",
  responsive: true,
  bindable: true,
  section: "settings",
  /* wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The border color of the series",
  },
  /* wwEditor:end */
}
export const seriesBorderWidth = {
  label: {
    en: "Series Border Width",
  },
  type: "Number",
  defaultValue: 0,
  responsive: true,
  bindable: true,
  section: "settings",
  /* wwEditor:start */
  bindingValidation: {
    type: "number",
    tooltip: "The border width of the series",
  },
  /* wwEditor:end */
}
export const seriesBorderRadius = {
  label: {
    en: "Series Border Radius",
  },
  type: "Length",
  options: {
    unitChoices: [
      { value: "px", label: "px" },
      { value: "em", label: "em" },
      { value: "rem", label: "rem" },
      { value: "%", label: "%" },
    ],
  },
  defaultValue: "6px",
  responsive: true,
  bindable: true,
  section: "settings",
  /* wwEditor:start */
  bindingValidation: {
    type: "number",
    tooltip: "The border radius of the series",
  },
  /* wwEditor:end */
}
