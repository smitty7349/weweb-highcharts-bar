export const legendAlign = {
  label: {
    en: "Legend Align",
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
    tooltip: "The alignment of the legend `'left'`, `'center'`, or `'right'`",
  },
  /** wwEditor:end */
}
export const legendLayout = {
  label: {
    en: "Legend Layout",
  },
  type: "TextSelect",
  defaultValue: "horizontal",
  options: {
    options: [
      { value: "horizontal", label: { en: "Horizontal" } },
      { value: "vertical", label: { en: "Vertical" } },
      { value: "proximate", label: { en: "Proximate" } },
    ],
  },
  responsive: true,
  bindable: true,
  /** wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The layout of the legend `'horizontal'`, `'vertical'`, or `'proximate'`",
  },
  /** wwEditor:end */
}
export const legendBackgroundColor = {
  label: {
    en: "Legend Background Color",
  },
  type: "Color",
  defaultValue: "#FFFFFF",
  responsive: true,
  bindable: true,
  /** wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The background color of the legend",
  },
  /** wwEditor:end */
}
