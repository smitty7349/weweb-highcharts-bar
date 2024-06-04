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
