export const yAxisTitle = {
  label: {
    en: "Y Axis Title",
  },
  type: "Text",
  defaultValue: "Fruit eaten",
  responsive: true,
  bindable: true,
  section: "settings",
}
export const yAxisCategories = {
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
}
export const yAxisMaxOn = {
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
}
export const yAxisMax = {
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
}
