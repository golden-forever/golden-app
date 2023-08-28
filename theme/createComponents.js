import {
  createTheme,
  filledInputClasses,
  inputLabelClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses,
} from "@mui/material";

// Used only to create transitions
const muiTheme = createTheme();

export function createComponents(config) {
  const { palette } = config;

  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px 16px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: "auto",
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
          padding: "15px 16px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
            backgroundColor: palette.neutral[50],
            color: palette.neutral[700],
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
          "&::placeholder": {
            color: palette.text.secondary,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: 8,
          borderStyle: "solid",
          borderWidth: 1,
          overflow: "hidden",
          borderColor: palette.neutral[200],
          transition: muiTheme.transitions.create([
            "border-color",
            "box-shadow",
          ]),
          "&:hover": {
            backgroundColor: palette.action.hover,
          },
          "&:before": {
            display: "none",
          },
          "&:after": {
            display: "none",
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: "transparent",
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: "transparent",
            borderColor: "primary.main",
            boxShadow: `${"primary.main"} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: "error.main",
            boxShadow: `${"error.main"} 0 0 0 2px`,
          },
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: palette.action.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.neutral[200],
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: "transparent",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "primary.main",
              boxShadow: `${"primary.main"} 0 0 0 2px`,
            },
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "error.main",
              boxShadow: `${"error.main"} 0 0 0 2px`,
            },
          },
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: "24px",
        },
        notchedOutline: {
          borderColor: palette.neutral[200],
          transition: muiTheme.transitions.create([
            "border-color",
            "box-shadow",
          ]),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          [`&.${inputLabelClasses.filled}`]: {
            transform: "translate(12px, 18px) scale(1)",
          },
          [`&.${inputLabelClasses.shrink}`]: {
            [`&.${inputLabelClasses.standard}`]: {
              transform: "translate(0, -1.5px) scale(0.85)",
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: "translate(12px, 6px) scale(0.85)",
            },
            [`&.${inputLabelClasses.outlined}`]: {
              transform: "translate(14px, -9px) scale(0.85)",
            },
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral[300],
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: muiTheme.palette.primary.light,
            color: "white",
          },
          "&.Mui-selected:hover": {
            backgroundColor: muiTheme.palette.primary.main,
            color: "white",
          },
        },
      },
    },
  };
}
