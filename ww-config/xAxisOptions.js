export const xAxisTitle = {
  label: {
    en: "X Axis Title",
  },
  type: "Text",
  defaultValue: "",
  responsive: true,
  bindable: true,
  section: "settings",
}
export const xAxisCategories = {
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
}
export const xAxisMaxOn = {
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
}
export const xAxisMax = {
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
}
