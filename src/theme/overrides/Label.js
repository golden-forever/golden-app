import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Label(theme) {
  return {
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          position: "static",
          transform: "translate(0, 0)",
          fontSize: "14px",
          marginBottom: "4px",
        },
      },
    },
  };
}
