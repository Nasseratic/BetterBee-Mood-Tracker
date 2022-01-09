import { light, mapping } from "@eva-design/eva";
import { SchemaType } from "@eva-design/dss";
import {
  ApplicationProvider,
  ApplicationProviderProps,
  ThemeType,
} from "@ui-kitten/components";
import React from "react";

export const myTheme: ThemeType = {
  ...light,

  "color-primary-100": "#FEF2CE",
  "color-primary-200": "#FDE09E",
  "color-primary-300": "#FBCA6E",
  "color-primary-400": "#F7B34A",
  "color-primary-500": "#F39010",
  "color-primary-600": "#D0720B",
  "color-primary-700": "#AE5708",
  "color-primary-800": "#8C3F05",
  "color-primary-900": "#742F03",
  "color-success-100": "#ECFDDD",
  "color-success-200": "#D5FCBC",
  "color-success-300": "#B6F899",
  "color-success-400": "#98F17E",
  "color-success-500": "#6BE855",
  "color-success-600": "#48C73E",
  "color-success-700": "#2AA72B",
  "color-success-800": "#1B8624",
  "color-success-900": "#106F1F",
  "color-info-100": "#D9F5FF",
  "color-info-200": "#B3E7FF",
  "color-info-300": "#8DD5FF",
  "color-info-400": "#71C3FF",
  "color-info-500": "#42A6FF",
  "color-info-600": "#3081DB",
  "color-info-700": "#2160B7",
  "color-info-800": "#154493",
  "color-info-900": "#0C2F7A",
  "color-warning-100": "#FFF7D5",
  "color-warning-200": "#FFEDAC",
  "color-warning-300": "#FFE182",
  "color-warning-400": "#FFD563",
  "color-warning-500": "#FFC130",
  "color-warning-600": "#DB9E23",
  "color-warning-700": "#B77E18",
  "color-warning-800": "#935F0F",
  "color-warning-900": "#7A4A09",
  "color-danger-100": "#FEE2D5",
  "color-danger-200": "#FEBEAC",
  "color-danger-300": "#FC9383",
  "color-danger-400": "#FA6A63",
  "color-danger-500": "#f8313a",
  "color-danger-600": "#D5233B",
  "color-danger-700": "#B2183B",
  "color-danger-800": "#8F0F37",
  "color-danger-900": "#770935",
};

export const customMapping: SchemaType = {
  ...mapping,
  components: {
    Button: {
      meta: {
        scope: "all",
        parameters: {
          minWidth: {
            type: "number",
          },
          minHeight: {
            type: "number",
          },
          paddingHorizontal: {
            type: "number",
          },
          paddingVertical: {
            type: "number",
          },
          borderRadius: {
            type: "number",
          },
          borderColor: {
            type: "string",
          },
          borderWidth: {
            type: "number",
          },
          backgroundColor: {
            type: "string",
          },
          textMarginHorizontal: {
            type: "number",
          },
          textFontFamily: {
            type: "string",
          },
          textFontSize: {
            type: "number",
          },
          textFontWeight: {
            type: "string",
          },
          textColor: {
            type: "string",
          },
          iconWidth: {
            type: "number",
          },
          iconHeight: {
            type: "number",
          },
          iconTintColor: {
            type: "string",
          },
          iconMarginHorizontal: {
            type: "number",
          },
        },
        appearances: {
          filled: {
            default: true,
          },
          outline: {
            default: false,
          },
          ghost: {
            default: false,
          },
        },
        variantGroups: {
          status: {
            basic: {
              default: false,
            },
            primary: {
              default: true,
            },
            success: {
              default: false,
            },
            info: {
              default: false,
            },
            warning: {
              default: false,
            },
            danger: {
              default: false,
            },
            control: {
              default: false,
            },
          },
          size: {
            tiny: {
              default: false,
            },
            small: {
              default: false,
            },
            medium: {
              default: true,
            },
            large: {
              default: false,
            },
            giant: {
              default: false,
            },
            icon: {
              default: false,
            },
            bigIcon: {
              default: false,
            },
          },
        },
        states: {
          hover: {
            default: false,
            priority: 0,
            scope: "all",
          },
          disabled: {
            default: false,
            priority: 1,
            scope: "all",
          },
          active: {
            default: false,
            priority: 2,
            scope: "all",
          },
          focused: {
            default: false,
            priority: 3,
            scope: "mobile",
          },
        },
      },
      appearances: {
        filled: {
          mapping: {
            textFontFamily: "text-font-family",
            iconMarginHorizontal: 4,
          },
          variantGroups: {
            status: {
              basic: {
                borderColor: "color-basic-default-border",
                backgroundColor: "color-basic-default",
                textColor: "color-basic-800",
                iconTintColor: "color-basic-800",
                state: {
                  focused: {
                    borderColor: "color-basic-focus-border",
                    backgroundColor: "color-basic-focus",
                  },
                  hover: {
                    borderColor: "color-basic-hover-border",
                    backgroundColor: "color-basic-hover",
                  },
                  active: {
                    borderColor: "color-basic-active-border",
                    backgroundColor: "color-basic-active",
                  },
                  disabled: {
                    borderColor: "color-basic-disabled-border",
                    backgroundColor: "color-basic-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              primary: {
                borderColor: "color-primary-default-border",
                backgroundColor: "color-primary-default",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-primary-focus-border",
                    backgroundColor: "color-primary-focus",
                  },
                  hover: {
                    borderColor: "color-primary-hover-border",
                    backgroundColor: "color-primary-hover",
                  },
                  active: {
                    borderColor: "color-primary-active-border",
                    backgroundColor: "color-primary-active",
                  },
                  disabled: {
                    borderColor: "color-primary-disabled-border",
                    backgroundColor: "color-primary-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              success: {
                borderColor: "color-success-default-border",
                backgroundColor: "color-success-default",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-success-focus-border",
                    backgroundColor: "color-success-focus",
                  },
                  hover: {
                    borderColor: "color-success-hover-border",
                    backgroundColor: "color-success-hover",
                  },
                  active: {
                    borderColor: "color-success-active-border",
                    backgroundColor: "color-success-active",
                  },
                  disabled: {
                    borderColor: "color-success-disabled-border",
                    backgroundColor: "color-success-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              info: {
                borderColor: "color-info-default-border",
                backgroundColor: "color-info-default",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-info-focus-border",
                    backgroundColor: "color-info-focus",
                  },
                  hover: {
                    borderColor: "color-info-hover-border",
                    backgroundColor: "color-info-hover",
                  },
                  active: {
                    borderColor: "color-info-active-border",
                    backgroundColor: "color-info-active",
                  },
                  disabled: {
                    borderColor: "color-info-disabled-border",
                    backgroundColor: "color-info-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              warning: {
                borderColor: "color-warning-default-border",
                backgroundColor: "color-warning-default",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-warning-focus-border",
                    backgroundColor: "color-warning-focus",
                  },
                  hover: {
                    borderColor: "color-warning-hover-border",
                    backgroundColor: "color-warning-hover",
                  },
                  active: {
                    borderColor: "color-warning-active-border",
                    backgroundColor: "color-warning-active",
                  },
                  disabled: {
                    borderColor: "color-warning-disabled-border",
                    backgroundColor: "color-warning-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              danger: {
                borderColor: "color-danger-default-border",
                backgroundColor: "color-danger-default",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-danger-focus-border",
                    backgroundColor: "color-danger-focus",
                  },
                  hover: {
                    borderColor: "color-danger-hover-border",
                    backgroundColor: "color-danger-hover",
                  },
                  active: {
                    borderColor: "color-danger-active-border",
                    backgroundColor: "color-danger-active",
                  },
                  disabled: {
                    borderColor: "color-danger-disabled-border",
                    backgroundColor: "color-danger-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              control: {
                borderColor: "color-control-default-border",
                backgroundColor: "color-control-default",
                textColor: "color-basic-800",
                iconTintColor: "color-basic-800",
                state: {
                  focused: {
                    borderColor: "color-control-focus-border",
                    backgroundColor: "color-control-focus",
                  },
                  hover: {
                    borderColor: "color-control-hover-border",
                    backgroundColor: "color-control-hover",
                  },
                  active: {
                    borderColor: "color-control-active-border",
                    backgroundColor: "color-control-active",
                  },
                  disabled: {
                    borderColor: "color-control-disabled-border",
                    backgroundColor: "color-control-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
            },
            size: {
              tiny: {
                minWidth: "size-tiny",
                minHeight: "size-tiny",
                borderRadius: "border-radius",
                borderWidth: "border-width",
                paddingHorizontal: 6,
                paddingVertical: 6,
                textMarginHorizontal: 6,
                textFontSize: 10,
                textFontWeight: "bold",
                iconWidth: 12,
                iconHeight: 12,
                iconMarginHorizontal: 6,
              },
              small: {
                minWidth: "size-small",
                minHeight: "size-small",
                borderRadius: "border-radius",
                borderWidth: "border-width",
                paddingHorizontal: 8,
                paddingVertical: 8,
                textMarginHorizontal: 8,
                textFontSize: 12,
                textFontWeight: "bold",
                iconWidth: 16,
                iconHeight: 16,
                iconMarginHorizontal: 8,
              },
              medium: {
                minWidth: "size-medium",
                minHeight: "size-medium",
                borderRadius: "border-radius",
                borderWidth: "border-width",
                paddingHorizontal: 10,
                paddingVertical: 12,
                textMarginHorizontal: 10,
                textFontSize: 14,
                textFontWeight: "bold",
                iconWidth: 30,
                iconHeight: 30,
                iconMarginHorizontal: 10,
              },
              large: {
                minWidth: "size-large",
                minHeight: "size-large",
                borderRadius: "border-radius",
                borderWidth: "border-width",
                paddingHorizontal: 10,
                paddingVertical: 14,
                textMarginHorizontal: 10,
                textFontSize: 16,
                textFontWeight: "bold",
                iconWidth: 24,
                iconHeight: 24,
                iconMarginHorizontal: 10,
              },
              giant: {
                minWidth: "size-giant",
                minHeight: "size-giant",
                borderRadius: "border-radius",
                borderWidth: "border-width",
                paddingHorizontal: 10,
                paddingVertical: 13,
                textMarginHorizontal: 10,
                textFontSize: 28,
                textFontWeight: "bold",
                iconWidth: 34,
                iconHeight: 34,
                iconMarginHorizontal: 12,
              },
              icon: {
                minWidth: "size-small",
                minHeight: "size-small",
                borderWidth: "border-width",
                paddingHorizontal: 3,
                paddingVertical: 3,
                iconWidth: 33,
                iconHeight: 33,
                iconMarginHorizontal: 0,
                borderRadius: 100,
              },
              bigIcon: {
                minWidth: "size-medium",
                minHeight: "size-medium",
                borderWidth: "border-width",
                paddingHorizontal: 5,
                paddingVertical: 5,
                iconWidth: 60,
                iconHeight: 60,
                iconMarginHorizontal: 0,
                borderRadius: 100,
              },
            },
          },
        },
        outline: {
          mapping: {},
          variantGroups: {
            status: {
              basic: {
                borderColor: "color-basic-transparent-default-border",
                backgroundColor: "color-basic-transparent-default",
                textColor: "text-hint-color",
                iconTintColor: "text-hint-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-focus-border",
                    backgroundColor: "color-basic-transparent-focus",
                    textColor: "text-hint-color",
                    iconTintColor: "text-hint-color",
                  },
                  hover: {
                    borderColor: "color-basic-transparent-hover-border",
                    backgroundColor: "color-basic-transparent-hover",
                    textColor: "text-hint-color",
                    iconTintColor: "text-hint-color",
                  },
                  active: {
                    borderColor: "color-basic-transparent-active-border",
                    backgroundColor: "color-basic-transparent-active",
                    textColor: "text-hint-color",
                    iconTintColor: "text-hint-color",
                  },
                  disabled: {
                    borderColor: "color-basic-transparent-disabled-border",
                    backgroundColor: "color-basic-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              primary: {
                borderColor: "color-primary-transparent-default-border",
                backgroundColor: "color-primary-transparent-default",
                textColor: "text-primary-color",
                iconTintColor: "text-primary-color",
                state: {
                  focused: {
                    borderColor: "color-primary-transparent-focus-border",
                    backgroundColor: "color-primary-transparent-focus",
                    textColor: "text-primary-color",
                    iconTintColor: "text-primary-color",
                  },
                  hover: {
                    borderColor: "color-primary-transparent-hover-border",
                    backgroundColor: "color-primary-transparent-hover",
                    textColor: "text-primary-color",
                    iconTintColor: "text-primary-color",
                  },
                  active: {
                    borderColor: "color-primary-transparent-active-border",
                    backgroundColor: "color-primary-transparent-active",
                    textColor: "text-primary-color",
                    iconTintColor: "text-primary-color",
                  },
                  disabled: {
                    borderColor: "color-primary-transparent-disabled-border",
                    backgroundColor: "color-primary-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              success: {
                borderColor: "color-success-transparent-default-border",
                backgroundColor: "color-success-transparent-default",
                textColor: "text-success-color",
                iconTintColor: "text-success-color",
                state: {
                  focused: {
                    borderColor: "color-success-transparent-focus-border",
                    backgroundColor: "color-success-transparent-focus",
                    textColor: "text-success-color",
                    iconTintColor: "text-success-color",
                  },
                  hover: {
                    borderColor: "color-success-transparent-hover-border",
                    backgroundColor: "color-success-transparent-hover",
                    textColor: "text-success-color",
                    iconTintColor: "text-success-color",
                  },
                  active: {
                    borderColor: "color-success-transparent-active-border",
                    backgroundColor: "color-success-transparent-active",
                    textColor: "text-success-color",
                    iconTintColor: "text-success-color",
                  },
                  disabled: {
                    borderColor: "color-success-transparent-disabled-border",
                    backgroundColor: "color-success-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              info: {
                borderColor: "color-info-transparent-default-border",
                backgroundColor: "color-info-transparent-default",
                textColor: "text-info-color",
                iconTintColor: "text-info-color",
                state: {
                  focused: {
                    borderColor: "color-info-transparent-focus-border",
                    backgroundColor: "color-info-transparent-focus",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  hover: {
                    borderColor: "color-info-transparent-hover-border",
                    backgroundColor: "color-info-transparent-hover",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  active: {
                    borderColor: "color-info-transparent-active-border",
                    backgroundColor: "color-info-transparent-active",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  disabled: {
                    borderColor: "color-info-transparent-disabled-border",
                    backgroundColor: "color-info-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              warning: {
                borderColor: "color-warning-transparent-default-border",
                backgroundColor: "color-warning-transparent-default",
                textColor: "text-warning-color",
                iconTintColor: "text-warning-color",
                state: {
                  focused: {
                    borderColor: "color-warning-transparent-focus-border",
                    backgroundColor: "color-warning-transparent-focus",
                    textColor: "text-warning-color",
                    iconTintColor: "text-warning-color",
                  },
                  hover: {
                    borderColor: "color-warning-transparent-hover-border",
                    backgroundColor: "color-warning-transparent-hover",
                    textColor: "text-warning-color",
                    iconTintColor: "text-warning-color",
                  },
                  active: {
                    borderColor: "color-warning-transparent-active-border",
                    backgroundColor: "color-warning-transparent-active",
                    textColor: "text-warning-color",
                    iconTintColor: "text-warning-color",
                  },
                  disabled: {
                    borderColor: "color-warning-transparent-disabled-border",
                    backgroundColor: "color-warning-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              danger: {
                borderColor: "color-danger-transparent-default-border",
                backgroundColor: "color-danger-transparent-default",
                textColor: "text-danger-color",
                iconTintColor: "text-danger-color",
                state: {
                  focused: {
                    borderColor: "color-danger-transparent-focus-border",
                    backgroundColor: "color-danger-transparent-focus",
                    textColor: "text-danger-color",
                    iconTintColor: "text-danger-color",
                  },
                  hover: {
                    borderColor: "color-danger-transparent-hover-border",
                    backgroundColor: "color-danger-transparent-hover",
                    textColor: "text-danger-color",
                    iconTintColor: "text-danger-color",
                  },
                  active: {
                    borderColor: "color-danger-transparent-active-border",
                    backgroundColor: "color-danger-transparent-active",
                    textColor: "text-danger-color",
                    iconTintColor: "text-danger-color",
                  },
                  disabled: {
                    borderColor: "color-danger-transparent-disabled-border",
                    backgroundColor: "color-danger-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              control: {
                borderColor: "color-control-transparent-default-border",
                backgroundColor: "color-control-transparent-default",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-control-transparent-focus-border",
                    backgroundColor: "color-control-transparent-focus",
                    textColor: "text-control-color",
                    iconTintColor: "text-control-color",
                  },
                  hover: {
                    borderColor: "color-control-transparent-hover-border",
                    backgroundColor: "color-control-transparent-hover",
                    textColor: "text-control-color",
                    iconTintColor: "text-control-color",
                  },
                  active: {
                    borderColor: "color-control-transparent-active-border",
                    backgroundColor: "color-control-transparent-active",
                    textColor: "text-control-color",
                    iconTintColor: "text-control-color",
                  },
                  disabled: {
                    borderColor: "color-control-transparent-disabled-border",
                    backgroundColor: "color-control-transparent-disabled",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
            },
          },
        },
        ghost: {
          mapping: {},
          variantGroups: {
            status: {
              basic: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-hint-color",
                iconTintColor: "text-hint-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-hint-color",
                    iconTintColor: "text-hint-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-hint-color",
                    iconTintColor: "text-hint-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-hint-color",
                    iconTintColor: "text-hint-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              primary: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-primary-color",
                iconTintColor: "text-primary-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-primary-color",
                    iconTintColor: "text-primary-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-primary-color",
                    iconTintColor: "text-primary-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-primary-color",
                    iconTintColor: "text-primary-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              success: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-success-color",
                iconTintColor: "text-success-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-success-color",
                    iconTintColor: "text-success-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-success-color",
                    iconTintColor: "text-success-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-success-color",
                    iconTintColor: "text-success-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              info: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-info-color",
                iconTintColor: "text-info-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              warning: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-warning-color",
                iconTintColor: "text-warning-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-info-color",
                    iconTintColor: "text-info-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-warning-color",
                    iconTintColor: "text-warning-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-warning-color",
                    iconTintColor: "text-warning-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              danger: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-danger-color",
                iconTintColor: "text-danger-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-danger-color",
                    iconTintColor: "text-danger-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-danger-color",
                    iconTintColor: "text-danger-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-danger-color",
                    iconTintColor: "text-danger-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
              control: {
                borderColor: "transparent",
                backgroundColor: "transparent",
                textColor: "text-control-color",
                iconTintColor: "text-control-color",
                state: {
                  focused: {
                    borderColor: "color-basic-transparent-500",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-control-color",
                    iconTintColor: "text-control-color",
                  },
                  hover: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-100",
                    textColor: "text-control-color",
                    iconTintColor: "text-control-color",
                  },
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-control-color",
                    iconTintColor: "text-control-color",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-basic-transparent-200",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
