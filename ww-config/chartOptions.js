export const title = {
  label: {
    en: "Title",
  },
  type: "Text",
  defaultValue: "Fruit Consumption",
  responsive: true,
  bindable: true,
}
export const titleAlign = {
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
}
export const titleFloating = {
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
}
export const subtitle = {
  label: {
    en: "Subtitle",
  },
  type: "Text",
  defaultValue: "by fruit",
  responsive: true,
  bindable: true,
}
export const inverted = {
  label: {
    en: "Inverted",
  },
  type: "OnOff",
  defaultValue: false,
  responsive: true,
  bindable: true,
}
