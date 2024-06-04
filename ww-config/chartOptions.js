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
export const caption = {
  label: {
    en: "Caption",
  },
  type: "Text",
  defaultValue: "",
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

export const backgroundColor = {
  label: {
    en: "Chart Background Color",
  },
  type: "Color",
  defaultValue: "#ffffff",
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The color of the chart background",
  },
  /* wwEditor:end */
}
export const borderColor = {
  label: {
    en: "Chart Border Color",
  },
  type: "Color",
  defaultValue: "#ffffff",
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The border color of the chart",
  },
  /* wwEditor:end */
}
export const borderWidth = {
  label: {
    en: "Chart Border Width",
  },
  type: "Number",
  defaultValue: 0,
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "number",
    tooltip: "The border width of the chart",
  },
  /* wwEditor:end */
}
export const borderRadius = {
  label: {
    en: "Chart Border Radius",
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
  /* wwEditor:start */
  bindingValidation: {
    type: "number",
    tooltip: "The border radius of the chart",
  },
  /* wwEditor:end */
}
