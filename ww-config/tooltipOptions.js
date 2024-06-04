export const tooltipEnabled = {
  label: {
    en: "Tooltip Enabled",
  },
  type: "OnOff",
  defaultValue: true,
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "boolean",
    tooltip: "Whether to enable the tooltip",
  },
  /* wwEditor:end */
}
export const backgroundColor = {
  label: {
    en: "Tooltip Background Color",
  },
  type: "Color",
  defaultValue: "#ffffff",
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The color of the tooltip background",
  },
  /* wwEditor:end */
}
export const borderColor = {
  label: {
    en: "Tooltip Border Color",
  },
  type: "Color",
  defaultValue: "#ffffff",
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "string",
    tooltip: "The border color of the tooltip",
  },
  /* wwEditor:end */
}
export const borderWidth = {
  label: {
    en: "Tooltip Border Width",
  },
  type: "Number",
  defaultValue: 0,
  responsive: true,
  bindable: true,
  /* wwEditor:start */
  bindingValidation: {
    type: "number",
    tooltip: "The border width of the tooltip",
  },
  /* wwEditor:end */
}
export const borderRadius = {
  label: {
    en: "Tooltip Border Radius",
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
    tooltip: "The border radius of the tooltip",
  },
  /* wwEditor:end */
}
