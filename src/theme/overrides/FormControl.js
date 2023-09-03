import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function FormControl(theme) {
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 0,
          transform: "translate(0, 0)",
        },
      },
    },
  };
}
